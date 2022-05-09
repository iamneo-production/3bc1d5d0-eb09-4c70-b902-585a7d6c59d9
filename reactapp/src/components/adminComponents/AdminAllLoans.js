import React, { useState, useEffect } from "react";
import AdminAppliedLoans from "./AdminAppliedLoans";
import axios from "axios";
// import { toast } from "react-toastify";

const AllLoans = () => {

    const baseURL = "http://localhost:8080";

    useEffect(() => {
        document.title = "AllLoans"
    }, []);


    useEffect(() => {
        axios.get(baseURL + `/admin/getAllLoans/pending`).then(
            (Response) => {
                setLoans(Response.data);
                console.log(Response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    const [Loans, setLoans] = useState([0]);

    const updateLoan = (id) => {
        setLoans(Loans.filter((l) => l.id !== id));
    }

    return (
        <div>
            {Loans.length > 0 ? Loans.map(
                item =>
                    <div key={item.id}>
                        <AdminAppliedLoans ApplyLoan={item} update={updateLoan} />
                    </div>
            )
                :
                <div style={{ textAlign: "center", margin: "130px auto", fontSize: "35px" }}>Yay!<br/> No new loan applications pending.</div>
            }

            {/* {Loans.length>0 ? Loans.map(
                (item)=>
                <AdminAppliedLoans key={item.id} ApplyLoan={item} update={updateLoan} />)
                 : 
                 <div style={{textAlign:"center" , margin:"150px auto", fontSize:"30px"}}>No New loan applications!</div>
            } */}
        </div>
    );
};

export default AllLoans;   