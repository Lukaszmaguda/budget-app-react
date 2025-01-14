import { useState, useEffect } from "react"

function CurrencyCalc(){
    const [rates, setRates] = useState({
        PLN: 1,
        USD: 0,
        EUR: 0,
        GBP: 0,
    })
    useEffect (() => {
        fetch('https://open.er-api.com/v6/latest/PLN')
            .then(response => response.json())
            .then(data => {
                setRates({
                    USD: 1 / data.rates.USD,
                    EUR: 1 / data.rates.EUR,
                    GBP: 1 / data.rates.GBP,
                    PLN: 1,
                })
            })
    }, [])
    const convertToPLN = (amount, currency) => {
        const normalizedCurrency = currency.toUpperCase() || 'PLN';
        return amount * rates[normalizedCurrency]
    }
    return {convertToPLN, rates}
}

export default CurrencyCalc