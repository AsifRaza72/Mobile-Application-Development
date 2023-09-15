import "./ExpenseItem.css"
import ExpenseDate from "./ExpensesDate";

export function ExpenseItem(props){
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        <div className="expense-item_price">Rs. {props.amount}/-</div>
        </div>
        </div>
    );
}
export default ExpenseItem;