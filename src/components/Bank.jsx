import './Bank.css'
import { useSelector, useDispatch } from 'react-redux'
import { checkBalance } from '../balanceSlice'
import { useState } from 'react'
const Bank=()=>{
    
    const[amount,setAmount]=useState('');


    const balanceHandler=(event)=>{
        setAmount(event.target.value)
    }

    const btnHandler1=()=>{
        dispatch(checkBalance(bala))
    }



    const bal = useSelector((state) => state.balance.amount)
    const dispatch = useDispatch()
    return(
        <>
        <h1 className="bank"><b>HDFC BANK</b></h1>
        <input type="text" onChange="balanceHandler"/>
        <button onClick="btnHandler1">CHECK BALANCE</button>
        <span>{bal}</span>
        <input type="number" onChange="withdrawHandler"/>
        <button onClick="btnHandler2">WITHDRAW Amt</button>
        </>
    )

}
export default Bank;