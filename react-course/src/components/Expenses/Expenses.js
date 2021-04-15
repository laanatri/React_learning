import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {

  const allExpenses = (
    <div >
      {props.items.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
      })}
    </div>
  );

  return (
    <Card className="expenses">
      {allExpenses}
    </Card>
  )
}

export default Expenses;
