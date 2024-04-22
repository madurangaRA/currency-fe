import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailyCurrencyGraph = () => {
    // State to store daily like count data
    const [likeCountData, setLikeCountData] = useState([]);

    // Function to fetch daily like count data from Facebook API
    const fetchLikeCountData = async () => {
        try {
            const response = await fetch('https://910d8c3f-ba85-4197-803c-871a29817e06-dev.e1-us-east-azure.choreoapis.dev/currencywebapp/currencybe/currency-9a9/v1.0/getDailyCurrency');
            const data = await response.json();
            setLikeCountData(data);
            console.log("Fetched currncey data:", data);
        } catch (error) {
            console.error("Error fetching like count data:", error);
        }
    };

    // Fetch like count data on component mount
    useEffect(() => {
        fetchLikeCountData();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="facebook-daily-like-count-graph">
            <h3>Daily USD to LKR</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={likeCountData}
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
