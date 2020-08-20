import React, { useState } from "react";
import "./Terminal.css";


const Terminal = () => {

    const [state, setState] = useState({
        terminalName: "",
        terminalDescr: "",
    });

    const handleInput = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        return (<dl>
            <dt>{state.terminalName}</dt>
            <dd>{state.terminalDescr}</dd>
            <dt>Milk</dt>
            <dd>- white cold drink</dd>
        </dl>)
    }

    return (
        <div>
            <form className="terminal-form">
                <label>Название терминала</label>
                <input
                    className="input"
                    type="text"
                    id="terminalName"
                    name="terminalName"
                    value={state.terminalName}
                    onChange={handleInput}
                />

                <label>Описание</label>
                <input
                    className="input"
                    id="terminalDescr"
                    name="terminalDescr"
                    reguired={true}
                    value={state.terminalDescr}
                    onChange={handleInput}

                />

                <button className="terminal-form__button" type="button" onClick={handleSubmit} >
                    +
      </button>
            </form>
            <h2>Список терминалов</h2>


        </div>
    )
};

export default Terminal;