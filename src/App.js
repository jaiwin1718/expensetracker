
import { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';

import Expenses from './component/expenses/expenses';
import NewExpense from './component/expenses/new_expenses';
//import ExpenseItem from './Expense_item com/expenseitem';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'AIRPODES',
    amount: 94.12,
    date: new Date(2021, 4, 14),
  },
  { id: 'e2', title: 'LAPTOP', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'MOBILE',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenes]=useState(DUMMY_DATA)
  const onAddExpense=(newValue)=>{
    console.log(newValue)
    let expense = {};
    expense.title = newValue.title;
    expense.amount= newValue.amount;
    expense.desc =  newValue.date;
    console.log(expense)
    fetch(
      'http://localhost:8080/api/add_expense',
      {
        method:"POST",
        body:JSON.stringify(expense),
      }
    )
    setExpenes((prev)=>[newValue,...prev])
  } 
  
  const[isLoading,setLoading]=useState(true);
  useEffect(()=>{
    // fetch('http://localhost:8080/api/v1/expenses')
    // .then(response=>response.json())
    // .then(json=>{console.log(json);
    //   setExpenes(json)
    //   setLoading(false)})
  },[])

  return (
    <div className="App">
      <h1>WELCOME TO EXPENESE TRACKER</h1>
      {/* <Counter/> */}
      <NewExpense onAddExpense={onAddExpense} />
     <Expenses expenses={expenses}isLoading={isLoading}/>
      </div>
  );
}

export default App;
