import "./ExpenseItem.css"
export function ExpenseItem(props){
    return(
        <div className="expense-item">

        <div >{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>

        </div>
        <div className="expense-item_price">{props.amount}</div>
        </div>
    );
}
export default ExpenseItem;