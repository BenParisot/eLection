import React from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard hoory</h1>
            <ul>
                <li><Link to={`/new-election`}>Set-Up a New Election</Link></li>
                <li><Link to={`/score`}>Score Candidates</Link></li>
            </ul>
        </>
    )
}

export default Dashboard;