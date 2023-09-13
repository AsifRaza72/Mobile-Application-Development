import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses=[
    {title:"Car Insurance", date:new Date(2023,9,1), amount:6000},
    {title:"Car seat", date:new Date(2023,9,11), amount:7000},
    {title:"Car tyres",date:new Date(2023,9,12), amount:8000},
    
  ]
  return (
    <div>
    <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
    <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} ></ExpenseItem>
    <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} ></ExpenseItem>
    </div>
    
  
  );
}

export default App;