import React from "react"
import './Bank.css'
import { useSelector, useDispatch } from 'react-redux'
import { checkBalance,setBalance } from '../balanceSlice'
 import { useState } from 'react'
const Bank=()=>{
    
    const[username,setUserName]=useState('');
    const[withdraw,setWithdraw]=useState('');
    const[flag,setFlag]=useState(false);


    const balanceHandler=(event)=>{
     setUserName(event.target.value);
        
    }

    const btnHandler1=()=>{
        dispatch(checkBalance(username))
        setFlag(true);
    }

    const withdrawHandler=(event)=>{
    setWithdraw(event.target.value)
        
    }

    const btnHandler2=()=>{
        dispatch(setBalance((+bal)-(+withdraw)));
    }



    const bal = useSelector((state) => state.balance.amount)
    const name= useSelector((state) => state.balance.name)
    const dispatch = useDispatch()
    return(
        <>
        <h1 className="bank"><b>HDFC BANK</b></h1>
        <input type="text" value={username} onChange={balanceHandler}/>

        <button onClick={btnHandler1}>CHECK BALANCE</button><br/><br/>

        {flag?
        <h3 className="heading">{name}:Your a/c balance is{bal}</h3>
        :null}

        <input type="number" value={withdraw} onChange={withdrawHandler}/>

        <button onClick={btnHandler2}>WITHDRAW Amt</button>
        </>
    )

}
export default Bank;