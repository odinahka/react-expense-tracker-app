import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const selectedYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectedYearHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </li>
  );
};
export default Expenses;
