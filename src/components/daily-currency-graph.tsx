import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailyCurrencyGraph = () => {
    // State to store daily USD rate data
    const [currencyData, setCurrencyData] = useState([]);

    // Function to fetch daily USD rate from the API
    const fetchCurrencyData = async () => {
        try {
            const apiUrl = (window as any).configs.apiUrl;
            const response = await fetch({apiUrl}+'/getDailyCurrency');
            const data = await response.json();
            setCurrencyData(data);
            console.log("Fetched currency data:", data);
        } catch (error) {
            console.error("Error fetching like count data:", error);
        }
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []); 

    return (
        <div className="facebook-daily-like-count-graph">
            <h3>Daily USD to LKR</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={currencyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="USD_rate" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyCurrencyGraph;
