import React, { useState } from "react";
import axios from "../Api/bootapi";



const Modal = ({setModal ,ApplyLoan}) => {

//     if (modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

    const [rea, setRea] = useState("");
    const rejectionreason=(e)=>{
        const rea=e.target.value;
        setRea(rea);
    }
    const onSubmit = (e) => {

        console.log(ApplyLoan.loanId);
        let status = "rejected";
        console.log("hello");
        console.log(rea);
        axios.put(`/admin/updatereason/${ApplyLoan.loanId}/${status}/${rea}`);
        // update(ApplyLoan.loanId);
    }

    return (
        <div>
            <div className="modall">
            <div class="overlay">
                <div className="modall-content bg-white rounded p-8 m-8 max-w-xs max-h-full text-center overflow-y-auto">
                    <div className="mb-4">
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Reason for Rejection</h2>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className='h-20'>
                            <input
                                type="text"
                                className="appearance-none rounded-1 relative block w-full px-3 py-2  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                                placeholder="Reason for Rejection"
                                onChange={rejectionreason}
                    
                                value={rea}
                            />
                        </div>

                        <div className="flex justify-between gap-4">
                            <button
                                onClick={onSubmit}
                                type="submit"
                                className="group relative w-full mt-2 rounded-3 flex justify-center py-2 px-4 border border-transparent text-sm btn-success">
                                Send
                            </button>

                            <button
                            onClick={()=>setModal(false)}
                                type='button'
                                className="group relative w-full mt-2 ms-1 rounded-3 flex justify-center py-2 px-4 border border-transparent text-sm btn-danger">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;