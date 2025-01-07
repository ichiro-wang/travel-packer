import PropTypes from "prop-types";
import { useState } from "react";

const Form = ({ onAddItems }) => {
    const [desc, setDesc] = useState("");
    const [qty, setQty] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!desc) return;

        const newItem = {
            description: desc,
            quantity: qty,
            packed: false,
            id: crypto.randomUUID(),
        };
        onAddItems(newItem);

        setDesc("");
        setQty(1);
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <h3>What do you need for your trip?</h3>
            <select onChange={(e) => setQty(Number(e.target.value))} value={qty}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
            />
            <button>Add</button>
        </form>
    );
};

Form.propTypes = {
    onAddItems: PropTypes.func.isRequired,
};

export default Form;
