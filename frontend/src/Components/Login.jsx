import React, { useState } from 'react';
import axios from 'axios';
import './HomePage.css';
import './Login.css';
import Header from './Header'; 

const Login = () => {
    // Estados para inicio de sesión
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [loginError, setLoginError] = useState(null);

    // Estados para registro
    const [signupName, setSignupName] = useState('');
    const [signupLastName, setSignupLastName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [signupError, setSignupError] = useState(null);
    const [signupSuccess, setSignupSuccess] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                email,
                password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token); 
                alert("Inicio de sesión exitoso");
            }
        } catch (error) {
            setLoginError("Error en el inicio de sesión. Verifica tus credenciales.");
            console.error("Error en el inicio de sesión:", error);
        }
    };

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:3000/users/', {
                username: signupName,
                lastname: signupLastName,
                email: signupEmail,
                password: signupPassword
            });

            setSignupSuccess("Cuenta creada exitosamente. Ahora puedes iniciar sesión.");
            setSignupError(null);
        } catch (error) {
            setSignupError("Error al crear la cuenta. Verifica los datos ingresados.");
            console.error("Error en el registro:", error);
        }
    };

    return (
        <div>
            <div className="form-container">
                <div className="form">
                    {/* Sección de inicio de sesión */}
                    <div className="login_item">
                        <h2>Sign in to your account</h2>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input-field" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type={showLoginPassword ? 'text' : 'password'} 
                            placeholder="Password" 
                            className="input-field" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <div className="checkbox-container">
                            <input 
                                type="checkbox" 
                                id="showLoginPassword" 
                                checked={showLoginPassword}
                                onChange={() => setShowLoginPassword(!showLoginPassword)} 
                            />
                            <label htmlFor="showLoginPassword">Show password</label>
                        </div>
                        {loginError && <p className="error-message">{loginError}</p>}
                        <button className="btn-login" onClick={handleLogin}>Login</button>
                    </div>

                    {/* Sección de registro */}
                    <div className="login_item">
                        <h2>Create a new account</h2>
                        <input 
                            type='text' 
                            placeholder='Name' 
                            className="input-field" 
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                        />
                        <input 
                            type='text' 
                            placeholder='LastName' 
                            className="input-field" 
                            value={signupLastName}
                            onChange={(e) => setSignupLastName(e.target.value)}
                        />
                        <input 
                            type='text' 
                            placeholder='Email' 
                            className="input-field" 
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                        />
                        <input 
                            type={showSignupPassword ? 'text' : 'password'} 
                            placeholder='Password' 
                            className="input-field" 
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                        <div className="checkbox-container">
                            <input 
                                type="checkbox" 
                                id="showSignupPassword" 
                                checked={showSignupPassword}
                                onChange={() => setShowSignupPassword(!showSignupPassword)} 
                            />
                            <label htmlFor="showSignupPassword">Show password</label>
                        </div>
                        {signupError && <p className="error-message">{signupError}</p>}
                        {signupSuccess && <p className="success-message">{signupSuccess}</p>}
                        <button className="btn-signup" onClick={handleSignup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;