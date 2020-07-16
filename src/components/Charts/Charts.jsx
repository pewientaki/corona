import React, { useEffect, useState } from 'react';
import styles from './Charts.module.css'
import { fetchDailySummary } from '../../api'
import { Line, Bar } from 'react-chartjs-2'


const Charts = ({ data: { cases, deaths, recovered }, country }) => {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailySummary()
            setSummary(dailyData);
        }
        fetchAPI();
    }, []);
    const lineChart = (
        summary[1] ? (
            <Line
                data={{
                    labels: summary.map(({ date }) => date),
                    datasets: [{
                        data: summary.map(({ cases }) => cases),
                        label: 'Confirmed cases',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: summary.map(({ deaths }) => deaths),
                        label: 'Confirmed deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    }]
                }}
            />) : null
    );

    const barChart = (
        cases ? (
            <Bar
                data={{
                    labels: ['Cases', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                        ],
                        data: [cases, recovered, deaths]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current country ${country}` }
                }} />
        ) : null
    );


    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;