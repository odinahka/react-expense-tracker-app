import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Vehicle Insurance",
    amount: 250000,
    date: new Date(2022, 3, 25),
  },
  {
    id: "e2",
    title: "School Fees",
    amount: 2050000,
    date: new Date(2022, 1, 25),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 200000,
    date: new Date(2022, 2, 25),
  },
  {
    id: "e4",
    title: "House Maintenance",
    amount: 100000,
    date: new Date(2022, 3, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMYEXPENSES);
  const addExpenseHandler = (expense) => { 
    setExpenses((prevExpenses) => { 
    return [expense, ...prevExpenses];
  }
  ); };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
