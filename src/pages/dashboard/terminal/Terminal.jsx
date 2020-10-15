import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Terminal.css";


const Terminal = () => {

    const [terminal, setTerminal] = useState({
        name: "",
        description: "",
    });
    const [terminalList, setTerminalList] = useState([]);

    const handleInput = (e) => {
        const { id, value } = e.target;
        setTerminal((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTerminal = {
            id: uuidv4(),
            name: terminal.name,
            description: terminal.description,
        }
        setTerminalList((prevState) => ({
            ...prevState,
            newTerminal
        }));

        setTerminal({
            name: "",
            description: ""
        })
    }

    return (
        <section>
            <h2>Добавьте терминал</h2>
            <form className="terminal-form">
                <label className="terminal-form__item">Название терминала</label>
                <input
                    className="terminal-form__item input "
                    type="text"
                    id="name"
                    name="name"
                    value={terminal.name}
                    onChange={handleInput}
                />

                <label className="terminal-form__item">Описание</label>
                <input
                    className="terminal-form__item input input_textarea"
                    id="description"
                    name="description"
                    reguired={true}
                    value={terminal.description}
                    onChange={handleInput}
                />

                <button className="button" type="button" onClick={handleSubmit}>
                    +
        </button>
            </form>
            <h2>Список терминалов</h2>
            <div className="terminal-list">
                <dl className="terminal-list__el">
                    <dt>Milk </dt>
                    <dd> white cold drink</dd>
                    <button className="button terminal-list__button"> X </button>
                </dl>

            </div>
        </section>
    );

};

export default Terminal;