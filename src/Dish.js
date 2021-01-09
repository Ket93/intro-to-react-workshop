import React, {useState} from "react"

export const Dish = (props) => {
    const [counter, setCounter] = useState(0);

    const addDish = () => {
        setCounter(counter+1);
    };

    return (
        <div className="Dish">
            <h2>{props.name}</h2>
            <p>Amount: {counter}</p>
            <button onClick={addDish}>Add dish ➕</button>
        </div>
    );
};
