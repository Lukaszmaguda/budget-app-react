
import AddTransaction from "./AddTransaction";

function TransactionList({ transactions, onAddTransaction }){
    const categoryNames = {
        others: "Inne",
        food: "Jedzenie",
        fun: "Rozrywka",
        bills: "Rachunki",
        salary: "Pensja"
    };
    const currencyNames = {
        usd: "$",
        pln: "zł",
        eur: "€",
        gbp: "£"
    }

    return (
        <>
            <AddTransaction onAddTransaction={onAddTransaction}/>
            <h2>Lista Transakcji</h2>
            <ul>
                {transactions.map((tr, index) =>
                <li key={index}>
                {tr.type === "income" ? "Przychód" : "Wydatek"} | {categoryNames[tr.category]} | {tr.amount} {currencyNames[tr.currency]} | {tr.date}
                </li>
            )}
            </ul>
        </>
    )
}

export default TransactionList