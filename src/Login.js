import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Login(props) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        try {
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            });
            const data = await response.json();
        
            // Stockage du jeton d'accès dans un cookie sécurisé
            document.cookie = `access_token=${data.access_token}; Secure; SameSite=Strict`;
        
            // Exemple d'action de connexion réussie
            const user = {
              username,
              token: data.access_token,
            };
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
            
            history.push('/');
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
