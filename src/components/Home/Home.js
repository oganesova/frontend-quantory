import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to My App</h1>
            <p>Quantory bootcamp project</p>
            <Link to="/login">
                <button className="login-button">Login</button>
            </Link>
        </div>
    );
};

export default Home;
