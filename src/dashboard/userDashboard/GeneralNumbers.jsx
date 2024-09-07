import React, { useEffect, useState } from 'react'
import './GeneralNumbers.css'
import { FaUserGroup } from "react-icons/fa6";
import { MdTrendingUp } from 'react-icons/md';
import { RiBankLine } from 'react-icons/ri';

const GeneralNumbers = () => {

    const [allUsers, setAllUsers] = useState(0)
    const [kycCount, setKycCount] = useState(0)
    const [totalDeposit, setTotalDeposit] = useState(0)

    const getAllUsers = ()=>{

        fetch('https://asset-mogul-back.onrender.com/getAllUsersCount', { method: 'GET' })
            .then(response => response.json())
            .then(data => setAllUsers(data.totalUsers))
            .catch(error => console.error('Error:', error));

    }

    const getKycCount = ()=>{

        fetch('https://asset-mogul-back.onrender.com/unverifiedCount', { method: 'GET' })
            .then(response => response.json())
            .then(data => setKycCount(data.count))
            .catch(error => console.error('Error:', error));

    }

    const getTotalDeposit = ()=>{

        fetch('https://asset-mogul-back.onrender.com/unverifiedCount', { method: 'GET' })
            .then(response => response.json())
            .then(data => setTotalDeposit(data.count))
            .catch(error => console.error('Error:', error));

    }
      
    useEffect(()=>{

        getAllUsers();
        getKycCount()
        getTotalDeposit()

    },[])

  return (

    <>
    
        <div className='general_numbers_body'>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <FaUserGroup/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total Users</p>
                    <h3>{ allUsers }</h3>
                </div>
            </div>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <RiBankLine/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total Deposit</p>
                    <h3>${ totalDeposit }</h3>
                </div>
            </div>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <MdTrendingUp/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total kyc count</p>
                    <h3>{ kycCount }</h3>
                </div>
            </div>
        </div>
    
    </>

  )
}

export default GeneralNumbers
