import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelectedByUser, setYearSelectedByUser] = useState("");
  const onFilterYearSelected = (yearSelected) => {
    setYearSelectedByUser(yearSelected);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelectedByUser;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelectedByUser}
          onFilterYearHandler={onFilterYearSelected}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpensesList items={filteredExpenses} />}
      </Card>
    </div>
  );
};

export default Expenses;
