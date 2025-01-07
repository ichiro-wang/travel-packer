import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
    const [items, setItems] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (!localValue) return [];
        return JSON.parse(localValue);
    });

    const handleAddItems = (item) => {
        setItems((items) => [...items, item]);
    };

    const handleDeleteItems = (id) => {
        setItems((items) => items.filter((item) => item.id !== id));
    };

    const handleTogglePackItem = (id) => {
        setItems((items) =>
            items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
        );
    };

    const handleClearItems = () => {
        const confirmed = window.confirm("Are you sure you want to clear your list?");
        if (confirmed) {
            setItems([]);
        }
    };

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(items));
    }, [items]);

    return (
        <div className="app">
            <Logo />
            <Form setItems={setItems} onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItems={handleDeleteItems}
                onPackItem={handleTogglePackItem}
                onClearItems={handleClearItems}
            />
            <Stats items={items} />
        </div>
    );
};

export default App;
