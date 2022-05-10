package com.examly.springapp.service;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.examly.springapp.model.DocumentModel;
import com.examly.springapp.model.LoanModel;
import com.examly.springapp.model.RepaymentModel;
import com.examly.springapp.repository.RepaymentRepository;

@Service
public class RepaymentServiceImpl  implements RepaymentService{
    
	@Autowired
	private RepaymentRepository repaymentRepository;

	
	@Override
	public void addRepayment(LoanModel loanModel) {
		RepaymentModel repaymentModel = new RepaymentModel();
		//	repaymentModel.setBalanceAmount(loanModel.getLoanAmountRequired());
		System.out.println("loan amount req"+loanModel.getLoanAmountRequired());
		//float f = loanModel.getLoanAmountRequired();
		
//		repaymentModel.setLoanId(loanModel.getLoanId());
		
		Date oldDate=loanModel.getApplicationDate();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
		Calendar c = Calendar.getInstance();
		//Setting the date to the given date
		c.setTime(oldDate);
		
		c.add(Calendar.DAY_OF_MONTH, 30);
		String newDate = sdf.format(c.getTime());
		float interest =  (loanModel.getLoanAmountRequired()*loanModel.getLoanRepaymentMonths()*10)/1200;
//		System.out.println(interest);
		float a = (loanModel.getLoanAmountRequired()+interest);
		
	
		repaymentModel.setBalanceAmount(a);
		
		repaymentModel.setInstallmentDue(a/loanModel.getLoanRepaymentMonths());
		
		repaymentModel.setInitialMonthlyDue(a/loanModel.getLoanRepaymentMonths());
		
		repaymentModel.setInstallmentDate(newDate);
		
		repaymentModel.setMonthCounter(1);
		
		repaymentRepository.save(repaymentModel);
		
	}

	@Override
	public RepaymentModel getRepaymentbyId(int id) {
		// TODO Auto-generated method stub    
			List<RepaymentModel> list = repaymentRepository.findAll();
			RepaymentModel repaymentModel = null;
			for(RepaymentModel repaymentList:list)
			{
				if(repaymentList.getRepaymentId()==id)
				{
					repaymentModel=repaymentList;
					break;
				}
			}
			return repaymentModel;
		}

	@Override
	public RepaymentModel updateRepaymentByPayment(int id,float payment) {
		List<RepaymentModel> list = repaymentRepository.findAll();
		RepaymentModel updaterepaymentModel = null;
		for(RepaymentModel updaterepaymentList:list)
		{
			if(updaterepaymentList.getRepaymentId()==id)
			{
				updaterepaymentModel=updaterepaymentList;
				break;
			}
		}
		
		
		
		updaterepaymentModel.setMonthCounter(updaterepaymentModel.getMonthCounter()+1);
		
		
		
		if(updaterepaymentModel.getInstallmentDue()<=updaterepaymentModel.getBalanceAmount()) {
			updaterepaymentModel.setBalanceAmount(updaterepaymentModel.getBalanceAmount()-payment);
//			System.out.println(updaterepaymentModel.getBalanceAmount());
		    if(updaterepaymentModel.getBalanceAmount()==0) {
			    updaterepaymentModel.setInstallmentDue(0);
			    updaterepaymentModel.setInstallmentDate("0");
			    updaterepaymentModel.setMonthCounter(0);
			return repaymentRepository.save(updaterepaymentModel);
		    }
		    float n = updaterepaymentModel.getInitialMonthlyDue()+ (updaterepaymentModel.getInstallmentDue()-payment);
		    updaterepaymentModel.setInstallmentDue(n);
		}
		
		
		if(updaterepaymentModel.getInitialMonthlyDue() > updaterepaymentModel.getBalanceAmount()) {
			updaterepaymentModel.setInstallmentDue(updaterepaymentModel.getBalanceAmount());
		}	
		
		
		
		
		
		
		String OldDate = updaterepaymentModel.getInstallmentDate();
		SimpleDateFormat sd = new SimpleDateFormat("yyyy/MM/dd");
		Calendar c = Calendar.getInstance();
		try{
			   //Setting the date to the given date
			   c.setTime(sd.parse(OldDate));
			}catch(ParseException e){
				e.printStackTrace();
			 }
		
		c.add(Calendar.DAY_OF_MONTH, 30);
		String newDate = sd.format(c.getTime());
		updaterepaymentModel.setInstallmentDate(newDate);
		
		
		
		
		
		//float n = updaterepaymentModel.getBalanceAmount()/(loanModel.getLoanRepaymentMonths()-updaterepaymentModel.getMonthCounter());
//		System.out.println(updaterepaymentModel.getInstallmentDue());
//		System.out.println(updaterepaymentModel.getInstallmentDue()-payment);
		//System.out.println(n);
		
	
		return repaymentRepository.save(updaterepaymentModel) ;
}
		

}
