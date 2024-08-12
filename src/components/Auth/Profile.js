import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Auth.css';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                navigate('/login');
                return;
            }

            setToken(token);

            try {
                const response = await axios.get('https://dummyjson.com/auth/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                setUserData(response.data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                alert('Session expired or invalid token.');
                localStorage.removeItem('authToken');
                localStorage.removeItem('refreshToken');
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    };

    return (
        <div className="auth-container">
            <Navbar />
            <h1>Profile</h1>
            {userData ? (
                <div className="auth-form">
                    <img src={userData.image} alt="Profile"/>
                    <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Token:</strong> <span style={{wordBreak: 'break-all'}}>{token}</span></p>
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
