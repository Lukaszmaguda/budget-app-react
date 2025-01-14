import Card from "./Card/Card"
import { useState } from "react"

function AddTransaction({ onAddTransaction }){
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("pln");
    const [type, setType] = useState("income");
    const [category, setCategory] = useState("others");
    const [date, setDate] =useState("");
    
    function handleSubmit(event){
        event.preventDefault();

        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            alert("Podaj prawidłową kwotę.");
            return;
        }

        onAddTransaction({amount, currency, type, category, date})
        setAmount("");
        setCurrency("pln");
        setCategory("others");
        setDate("");
        setType("income")
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Kwota" value={amount} onChange={(event) => setAmount(event.target.value)} />
                <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    <option value="pln">PLN</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
                <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="income">Przychód</option>
                    <option value="expense">Wydatek</option>
                </select>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="others">Inne</option>
                    <option value="food">Jedzenie</option>
                    <option value="fun">Rozrywka</option>
                    <option value="bills">Rachunki</option>
                    <option value="salary">Pensja</option>
                </select>
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                <button type="submit">Dodaj transakcję</button>
            </form>
        </Card>
    )
}

export default AddTransaction