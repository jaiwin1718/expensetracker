import React from "react";
import ExpenseForm from "../../expene form/expenseform";
import './new_expenses.css'
const NewExpense =(props)=> {
    const onSave=(value)=>{
        const expene_data={
            ...value,
            id: Math.random().toString()
        }
        console.log(expene_data)
       props.onAddExpense(expene_data)
    }
               return <div className="new-expense">
               <ExpenseForm onSave={onSave}/>
               </div>   
}
export default NewExpense