import { TextField, Button } from "@material-ui/core";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <TextField 
                style={{ padding: 10, marginBottom: 20 }} 
                onChange={(e) => setUsername(e.target.value)} 
                label="Username" 
                variant="outlined" />
            <TextField 
                style={{ padding: 10, marginBottom: 20 }} 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                label="Password" 
                variant="outlined" />
            <Button 
                style={{ padding: 10, width: 100 }} 
                onClick={handleClick} 
                variant="outlined">
                Login
            </Button>
        </div>
    )
}

export default Login;