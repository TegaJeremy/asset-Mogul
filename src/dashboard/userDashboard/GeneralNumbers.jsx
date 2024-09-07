import React from 'react'
import './GeneralNumbers.css'
import { FaUserGroup } from "react-icons/fa6";
import { MdTrendingUp } from 'react-icons/md';
import { RiBankLine } from 'react-icons/ri';

const GeneralNumbers = () => {

  return (

    <>
    
        <div className='general_numbers_body'>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <FaUserGroup/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total Users</p>
                    <h3>10</h3>
                </div>
            </div>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <MdTrendingUp/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total Profit</p>
                    <h3>$20,000</h3>
                </div>
            </div>
            <div className='general_numbers_container'>
                <div className='general_numbers_icon_container'>
                    <RiBankLine/>
                </div>
                <div className='general_numbers_text'>
                    <p>Total Deposit</p>
                    <h3>$20,000</h3>
                </div>
            </div>
        </div>
    
    </>

  )
}

export default GeneralNumbers
