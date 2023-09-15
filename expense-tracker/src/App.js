// import ExpenseItem from "./components/ExpenseItem";
//  import ExpenseDate from "./components/ExpensesDate";
 import Expenses from "./components/Expenses"
function App() {
  const expenses=[
    {title:"Car Insurance", date:new Date(2023,9,1), amount:6000},
    {title:"Car seat", date:new Date(2023,9,11), amount:7000},
    {title:"Car tyres",date:new Date(2023,9,12), amount:8000},
    
  ]
  return (
    <div>
    <Expenses items={expenses} />
    </div>
    
  
  );
}

export default App;