import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        // TODO: Envoyer les informations d'identification à l'API pour la validation
        
        // Exemple d'action de connexion réussie
        const user = {
            username,
            token: '1234abcd',
        };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
