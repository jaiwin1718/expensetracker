import React from "react";
import ExpenseItem from "./expenseitem/expenseitem";
import './expenses.css';
const Expenses =(props)=>{
    const expenses=props.expenses;
    return(
        <div className="expenses ">
            {expenses.map((exp) =>
            (
                <ExpenseItem 
                key={exp.id}
                title={exp.title}
                amount={exp.amount}
                date={exp.date}         
                />
            
           
       )) }
       </div>
    )
}
export default Expenses;
