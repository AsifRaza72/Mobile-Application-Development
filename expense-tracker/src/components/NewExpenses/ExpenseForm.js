import "./ExpenseForm.css"

const ExpenseForm =()=>{
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-09-18" />
                </div>
            </div>
           
                <div >
                    <button className="new-expense__actions">Add Expense</button>
                </div>
           
        </form>
    );
}
export default ExpenseForm;