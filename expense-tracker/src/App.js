import Expenses from "../src/components/Expenses/Expenses"
 import ExpenseForm from "./components/NewExpenses/ExpenseForm";


function App() {
  const expenses = [
    { title: "Car Insurance", amount: 6000, date: new Date(2023, 9, 13) },
    { title: "Car Seat", amount: 8000, date: new Date(2023, 9, 12) },
    { title: "Car Tyres", amount: 9000, date: new Date(2023, 9, 11) },
    { title: "Car Lights", amount: 10000, date: new Date(2023, 9, 10) },
  ];
  return (
    <div>
      {<ExpenseForm/> }
     <Expenses items = {expenses}></Expenses>
    </div>
  );
}
export default App;