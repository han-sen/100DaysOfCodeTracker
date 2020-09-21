import React from "react";

export default function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={props.formInputs.name}
                onChange={props.handleChange}
            />
            <label htmlFor="gener">Star Sign</label>
            <input
                type="text"
                id="starsign"
                value={props.formInputs.starsign}
                onChange={props.handleChange}
            />
            <label htmlFor="gener">Age</label>
            <input
                type="text"
                id="age"
                value={props.formInputs.age}
                onChange={props.handleChange}
            />
            <label htmlFor="gener">Img</label>
            <input
                type="text"
                id="img"
                value={props.formInputs.img}
                onChange={props.handleChange}
            />
            <input type="submit" className="submit" />
        </form>
    );
}
