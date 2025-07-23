import ExpItem from "./ExpItem";

const App = () => {
    const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  
    return ( <>
    {expenses.map((expense) => (
      <ExpItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ))}

{/* i map them */}
    {/* <ExpItem 
      title="New Chair (Wooden)"
      amount={250}
      date={new Date(2021, 5, 12)}
    />
    <ExpItem 
      title="New Laptop"
      amount={1500}
      date={new Date(2021, 5, 12)}
    />
    <ExpItem 
      title="New Phone"
      amount={800}
      date={new Date(2021, 5, 12)}
    /> */}
    </> );
}
 
export default App;