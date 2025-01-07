import "react";
import PropTypes from "prop-types";

const Stats = ({ items }) => {
    if (!items.length)
        return (
            <footer className="stats">
                <em>Start adding some items to your packing list 🚀.</em>
            </footer>
        );

    const itemCount = items.length;
    const itemsPacked = items.reduce((acc, item) => {
        return acc + (item.packed ? 1 : 0);
    }, 0);
    const packedPercent = Math.round((itemsPacked / itemCount) * 100);

    return (
        <footer className="stats">
            <em>
                {packedPercent === 100
                    ? "Ready to go."
                    : `You have ${itemCount} items on your list, 
                    and you have packed ${itemsPacked} (${packedPercent}%).`}
            </em>
        </footer>
    );
};

Stats.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            packed: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Stats;
