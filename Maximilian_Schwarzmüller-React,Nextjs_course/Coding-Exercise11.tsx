
// Dynamic Styling
// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// Here's how the finished app should look like BEFORE the button was clicked:



// Here's how it should look like AFTER the button was clicked:





// Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code environment.

// Apply CSS styles dynamically to HTML elements.

// Answer:

import React from 'react';
import { useState } from 'react';
// don't change the Component name "App"
export default function App() {
    const [ isActive, setActive] = useState(false);
    return (
        <div>
            <p className={isActive ? "active" : ""}>Style me!</p>
            <button onClick={() => setActive(!isActive)}>Toggle style</button>
        </div>
    );
}