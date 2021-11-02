import { React, useState } from 'react';
import './App.css';

function App() {

  const [amount, getamount] = useState(0)
  const [Source, gerSource] = useState("")
  const [balance, gerbalance] = useState(0)
  const [show, setshow] = useState("Income")
  const [database, getdatabase] = useState([])
  const [transation, gettransation] = useState([{ "balance": balance, "amount": amount, "Source": Source, "type": "none" }])

  const Displaybtn = () => {
    return (<center><table><tr><th>Source</th><th>Type</th><th>Amount</th><th>Balance</th></tr>
      {database.map(x => {
        return (<tr><td>{x.Source}</td>
          <td>{x.type}</td>
          <td>{x.amount}</td>
          <td>{x.balance}</td></tr>)
      })}

    </table></center>)
  }
  const Incomebtn = () => {
    return (<div>
      <h2>Income</h2>
      Source<input onChange={(e) => gerSource(e.target.value)} type="text" />
      Amount<input onChange={(e) => getamount(Number(e.target.value))} type="number" />
      <button onClick={() => {

        gerbalance(prev => Number(prev + amount));
        gettransation({ "balance": balance, "amount": amount, "Source": Source, "type": "Credit" });
        getdatabase([...database, transation]);
        console.log(database);
      }}>Add</button>
    </div>)
  }
  const Expensebtn = () => {
    return (<div>
      <h2>Expense</h2>
      Source<input onChange={(e) => gerSource(e.target.value)} type="text" />
      Amount<input onChange={(e) => getamount(Number(e.target.value))} type="number" />
      <button onClick={() => {
        gerbalance(prev => Number(prev - amount));
        gettransation({ "balance": balance, "amount": amount, "Source": Source, "type": "Debit" });
        getdatabase([...database, transation]);
        console.log(database[2].balance);
      }}>Withdraw</button>
    </div>)
  }
  const Showing = () => {
    if (show === "Income")
      return (Incomebtn())
    if (show === "Expense")
      return (Expensebtn())
    if (show === "Dispaly")
      return (Displaybtn())
  }
  return (
    <div>
      <center><h1>Wallet balance: {balance > -1 ? balance : "Inadequate"}<br /></h1>
        <button onClick={() => { setshow("Income") }}>Income </button>
        <button onClick={() => { setshow("Expense") }}>Expense </button>
        <button onClick={() => { setshow("Dispaly") }}>Dispaly </button>
        {Showing()}</center>
    </div>
  )
}

export default App;
