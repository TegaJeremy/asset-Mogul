import React, { useEffect, useState } from 'react';
import "./pendingWithdrawal.css";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PendingWithdrawal = () => {
    const nav = useNavigate();
    const [allPendingWithdrawals, setAllPendingWithdrawals] = useState([]);
    const [acceptloadingId, setAcceptLoadingId] = useState();
    const [rejectloadingId, setRejectloadingId] = useState();

    const getAllpendingWithdrawals = async ()=>{
        try{
            const response = await axios.get("https://asset-mogul-back.onrender.com/getWithdrawalRequests")
            console.log(response)
            setAllPendingWithdrawals(response.data.users)
        } catch(error){
            console.log(error);
            toast.error(error.response.data.message)
        }
    }

    useEffect(()=>{
        getAllpendingWithdrawals();
    },[])

    const acceptWithdrawal = async (id)=>{
        const url = "https://asset-mogul-back.onrender.com/acceptWithdrawal"
        const body = {userId: id}
        try{
            setAcceptLoadingId(id)
            const response = await axios.post(url, body)
            console.log(response)
            nav("/dashboard");
            toast.success("withdraw accepted successfully");
        } catch(error){
            console.log(error);
            setAcceptLoadingId("")
            toast.error("network error");
        }
    }

    const rejectWithdrawal = async (id)=>{
        const url = "https://asset-mogul-back.onrender.com/rejectWithdrawal"
        const body = {userId: id}
        try{
            setRejectloadingId(id)
            const response = await axios.post(url, body)
            console.log(response)
            nav("/dashboard");
            toast.success("withdraw rejected successfully");
        } catch(error){
            console.log(error);
            setRejectloadingId("")
            toast.error("network error");
        }
    }

  return (
    <>
        <div className='pending_withdrawal_body'>
            <h3>All pending withdrawals</h3>
            <div className='transaction_history_container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Accept</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPendingWithdrawals.map((e)=>(
                                <tr key={e._id}>
                                    <td>{e.userName}</td>
                                    <td>{e.email}</td>
                                    <td>${e.pendingWithdraw}</td>
                                    <td>
                                        <button className='status_btn accept_btn' onClick={()=>acceptWithdrawal(e._id)}>{acceptloadingId == e._id ? "loading..." : "accept"}</button>
                                    </td>
                                    <td>
                                        <button className='status_btn reject_btn' onClick={()=>rejectWithdrawal(e._id)}>{rejectloadingId == e._id ? "loading..." : "reject"}</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default PendingWithdrawal
