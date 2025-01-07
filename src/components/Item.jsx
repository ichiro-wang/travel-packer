import "react";
import PropTypes from "prop-types";

const Item = ({ item, onDeleteItems, onPackItem }) => {
    return (
        <li>
            <input type="checkbox" checked={item.packed} onChange={() => onPackItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItems(item.id)}>
                <span>❌</span>
            </button>
        </li>
    );
};

Item.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            quantity: PropTypes.string.isRequired,
            packed: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    onDeleteItems: PropTypes.func.isRequired,
    onPackItem: PropTypes.func.isRequired,
};

export default Item;
