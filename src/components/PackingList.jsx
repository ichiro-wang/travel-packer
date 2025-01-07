import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const PackingList = ({ items, onDeleteItems, onPackItem, onClearItems }) => {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    else if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => {
            return a.description.localeCompare(b.description);
        });
    } else if (sortBy === "packed")
        sortedItems = items.slice().sort((a, b) => {
            return Number(a.packed) - Number(b.packed);
        });

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItems={onDeleteItems}
                        onPackItem={onPackItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearItems}>Clear List</button>
            </div>
        </div>
    );
};

PackingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            packed: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteItems: PropTypes.func.isRequired,
    onPackItem: PropTypes.func.isRequired,
    onClearItems: PropTypes.func.isRequired,
};

export default PackingList;
