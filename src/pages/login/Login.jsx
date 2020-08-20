import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        isAuthentificated: false,
        isFormValid: false,
        //avatarUrl: '',
        //error: null
    });

    let history = useHistory();

    const [avatarUrl, setAvatarUrl] = useState('');
    const [error, setError] = useState(false);

    const handleInput = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    async function fetchUserData() {
        const username = state.username;
        const res = await fetch(`https://api.github.com/users/${username}`);
        res
            .json()
            .then(res => setAvatarUrl(res.avatar_url))
            .catch(err => setError(err));
    }


    console.log("result of fetching", avatarUrl)
    const validateForm = () => {
        const { password } = state;
        const isPasswordValid = password.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
        );

        if (isPasswordValid) {
            setState((prevState) => ({
                ...prevState,
                isFormValid: true
            }));
        }
    };
    const handleLogin = (e) => {
        //e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            isAuthentificated: true
        }));
        fetchUserData();
        validateForm();
        if (state.isFormValid) {
            return history.push("/dashboard");
        } else {
            return alert("there is an error");
        }

    };

    return (
        <form className="login-form">
            <label>Username:</label>
            <input
                className="input"
                type="text"
                id="username"
                name="username"
                required={true}
                value={state.username}
                onChange={handleInput}
            />

            <label>Password</label>
            <input
                className="input"
                id="password"
                name="password"
                reguired={true}
                value={state.password}
                onChange={handleInput}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />

            <button className="form__button" type="button" onClick={handleLogin}>
                Login
      </button>
        </form>
    );
};

export default Login;
