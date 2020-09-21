import React, { useState, useEffect } from "react";
import Daters from "./components/Daters";
import "./App.css";

function App() {
    const [daters, setDaters] = useState([]);
    const [formInputs, updateFormInputs] = useState({
        author: "",
        content: "",
        title: "",
    });

    const handleChange = (event) => {
        const updateInput = Object.assign({}, formInputs, {
            [event.target.id]: event.target.value,
        });
        updateFormInputs(updateInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/users", {
                body: JSON.stringify(formInputs),
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            updateFormInputs({
                author: "",
                content: "",
                title: "",
            });
            setDaters([data, ...daters]);
        } catch (error) {
            console.error(error);
        }
    };

    const getDaters = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            const data = await response.json();
            setDaters(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        (async function () {
            await getDaters();
        })();
    }, []);
    return (
        <div className="App">
            <header>
                <h1>React on Rails Dating App</h1>
            </header>
            <Daters daters={daters} />
            <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default App;
