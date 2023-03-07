import React,{ useState } from "react";
import './expenseitem.css';
import ExpenseDate from "../expensedate/expensedate";
const ExpenseItem=(props)=>{
//    const {date=new Date(),title = '',amount = 0} = props;
   //console.log(date);
   const[title,setTitle]=useState(props.title)
    const[date,setDate]=useState(props.date)
    const[amount,setAmount]=useState(props.amount)
   
    // function onchangeClick(event){
    //    setTitle('updated');
    //    setAmount(0);
    //    setDate(new Date());
    //    console.log(title)
    // }
    
   return(
    <div className="expense-item ">
        
        <ExpenseDate date={date}/>
        <div className="expense-item__description "><h2>{title}</h2></div>
        <div className="expense-item__price">₹{amount}</div>
        {/* <button onClick={onchangeClick}>Change</button> */}
    </div>
   )
}
export default ExpenseItem