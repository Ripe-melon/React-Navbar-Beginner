import { useState } from "react";
import "./NavbarStyles.css";

function Navbar() {
    // Initialize the count state variable with 0
    const [count, setCount] = useState(0);

    // Function to increment the count
    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="home">
                <h1>React Navbar</h1>
                <h3>Button count = {count}</h3>
                <button onClick={handleIncrement}>Increment</button>
            </div>
        </>
    );
}

export default Navbar;
