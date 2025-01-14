import Card from "./Card/Card"
import TransactionList from "./TransactionList"
import CurrencyCalc from "./CurrencyCalc"
// import { useCurrencyCalc } from './useCurrencyCalc';

function Balance({ transactions = [] }){

    const { convertToPLN } = CurrencyCalc();

    const income = transactions
        .filter((ts) => ts.type === "income")
        .reduce((sum, ts) => sum + convertToPLN(parseFloat(ts.amount), ts.currency), 0);

    const expense = transactions
        .filter((ts) => ts.type === "expense")
        .reduce((sum, ts) => sum + convertToPLN(parseFloat(ts.amount), ts.currency), 0);

    const balance = income - expense; 

    let textColor = '';
    if(balance < 0) {
        textColor = 'balance-red'
    }else if(balance > 0){
        textColor = 'balance-green'
    }

    return(
        <Card>
            <div>
                <h1>Saldo</h1>
                <h2  className={textColor}>{balance.toFixed(2)}zł</h2>
            </div>
            <div className="flex-row">
                <div>
                    <h2>Przychody</h2>
                    <h3>{income.toFixed(2)}</h3>
                </div>
                <div>
                    <h2>Wydatki</h2>
                    <h3>{expense.toFixed(2)}</h3>
                </div>
            </div>
        </Card>
    )
}
export default Balance