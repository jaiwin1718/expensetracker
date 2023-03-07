import React,{useState} from "react"; 
import './expensefrom.css';
const ExpenseForm =(props)=>{
      
        const [enteredTitle,setEnteredTitle]=useState('');
        const [enteredAmt,setEnteredAmt]=useState('0');
        const [enteredDate,setEnteredDate]=useState('');
    
    
    
    const onTitleChange =(event)=>{
        setEnteredTitle(event.target.value)
        //console.log(event.target.value)
    }
    const onAmtChange =(event)=>{
        setEnteredAmt(event.target.value)
        //console.log(event.target.value)
    }
    const onDateChange=(event)=>{
        setEnteredDate(event.target.value)
        //console.log(event.target.value)
    }
    const onExpenseSubmit =(event)=>{
        event.preventDefault();
        //console.log('call from form')
        const new_object={
            title:enteredTitle,
            amount:enteredAmt,
            date: new Date(enteredDate),
        }
        props.onSave(new_object);
    };
    return(
        <form onSubmit={ onExpenseSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                {/* {title} */}
                <label htmlFor="title">TITLE</label>
                <input type="text" name="title" id="title" onChange={onTitleChange} value={enteredTitle}></input>
            </div>
            {/* amount */}
            <div className="new-expense__control">
                <label htmlFor="amount">AMOUNT</label>
                <input 
                type="number"
                name="amount"
                id="amount"
                onChange={onAmtChange}
                value={enteredAmt}
                min="0"
                />
            </div>
            {/* DATE */}
            <div className="new-expense__control">
                <label htmlFor="date">DATE</label>
                <input type="date"name="date"id="date"onChange={onDateChange}   value={enteredDate}/>
            </div>
            </div>
           {/* BUTTON */}
           <div className="new-expense__control">
            <button>Cancel</button>
            <button type="submit">Add Expenses</button>
           </div>
       
    </form>
    )
}
export default ExpenseForm