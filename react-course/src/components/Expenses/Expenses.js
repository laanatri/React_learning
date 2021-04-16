import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {

  const allExpenses = (
    <div >
      {props.items.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      })}
    </div>
  );

  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {allExpenses}
    </Card>
  )
}

export default Expenses;
