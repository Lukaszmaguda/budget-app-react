import * as React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import CurrencyCalc from '../CurrencyCalc';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart ({ transactions }){
    const { convertToPLN } = CurrencyCalc();

    const income = transactions
        .filter((ts) => ts.type === "income")
        .reduce((sum, ts) => sum + convertToPLN(parseFloat(ts.amount), ts.currency), 0);

    const expense = transactions
        .filter((ts) => ts.type === "expense")
        .reduce((sum, ts) => sum + convertToPLN(parseFloat(ts.amount), ts.currency), 0);

    const data = {
        labels: ['Przychody', 'Wydatki'],
        datasets: [
            { 
                label: 'Wykres finansów',
                data: [income.toFixed(2), expense.toFixed(2)],
                backgroundColor: ['#00ff15', 'red'],
            }
        ]
    }

    return (
        <div className='chart-container'>
            <Pie data={data} />
        </div>
    )
}
export default Chart