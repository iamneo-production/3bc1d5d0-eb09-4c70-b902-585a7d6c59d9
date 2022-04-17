import React, { useState } from "react";
import { useEffect } from "react";
import AppliedLoans from "./AppliedLoans";
import axios from "../Api/bootapi";
import { toast } from "react-toastify";

const AllLoans=() => {

    useEffect(()=>{
        document.title="AllLoans"
    }, []);

    //func to call server
    //Applied Loans Button
    const getAllLoansFromserver=()=>{
        axios.get(`/admin/getAllLoans/pending`).then(
            (Response)=>{
                setLoans(Response.data);
                console.log(Response.data);
                // console.log("hello");
                toast("courses has been loaded",{
                    position:"bottom-center",
                  });
            },
            (error)=>
            {
                toast.error("something went wrong",{
                    position:"Top-center"
                });
                console.log(error);
                // console.log("hello2");
            }
        );
    };


    //loading func 
    useEffect(()=>{
        getAllLoansFromserver();
    }, []);

    const[Loans, setLoans] =useState([0]);

    const updateLoan=(id) => {
        setLoans(Loans.filter((l)=> l.id !==id));
    }

    return (
        <div>
            {/* <h1>All Loans</h1> */}

            {Loans.length>0 ? Loans.map((item)=>
                <AppliedLoans key={item.id} ApplyLoan={item} update={updateLoan} />)
                 : "No new loan Applications"}

        </div>
    );
};

export default AllLoans;