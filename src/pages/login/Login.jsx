import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/gitlogo-gradient.png";
import "./Login.css";

const Login = () => {
    const [user, setUser] = useState({
        name: "olgaaleshina",
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
        setUser((prevState) => ({
            ...prevState,
            [id]: value
        }));


    };
    const validateForm = () => {
        const password = user.password;
        const isPasswordValid = password.match(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
        );

        if (isPasswordValid) {
            setUser((prevState) => ({
                ...prevState,
                isFormValid: true
            }));
        }
    };

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(`https://api.github.com/users/${user.name}`);
            setAvatarUrl(result.data.avatar_url);
        };
        fetchData();
    }, []);

    /*async function fetchUserData(username) {
      const res = await fetch(`https://api.github.com/users/${username}`);
      res
        .json()
        .then((res) => setAvatarUrl(res.avatar_url))
        .catch((err) => setError(err));
    }*/

    console.log("result of fetching", avatarUrl);





    const handleLogin = (e) => {
        //e.preventDefault();
        setUser((prevState) => ({
            ...prevState,
            isAuthentificated: true
        }));
        //fetchUserData(state.username);
        validateForm();
        history.push({ pathname: "/dashboard", state: { avatarUrl } });
        //if (user.isFormValid) {
        //    return history.push("/dashboard");
        //} else {
        //    return console.log("there is an error");
        //}

    };

    return (
        <div className="login">
            <img src={logo} className="App-logo login-logo" alt="logo" />
            <form className="login-form">
                <label>Username:</label>
                <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    required={true}
                    value={user.username}
                    onChange={handleInput}
                />

                <label>Password</label>
                <input
                    className="input"
                    id="password"
                    name="password"
                    reguired={true}
                    value={user.password}
                    onChange={handleInput}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />

                <button className="button" type="button" onClick={handleLogin}>
                    Login
      </button>
            </form>
        </div>
    );
};

export default Login;
