
// Dynamic Styling with Inline Styles
// Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.

// If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style. If the "No" button is pressed, color: "red" should be applied.

// Initially, when no button has been clicked yet, the color should be set to "white".

// Important: You must use these specific colors ("green", "red", "white") - don't use any hex code or slight variations of these colors!

// In addition, this Udemy exercise workspace does not support the direct usage of React Hooks - instead, import React from 'react' and then use Hooks like this: React.useState().

// Dynamically style a heading depending on which button is pressed.

// Answer:
import React from 'react'
function App() {
     const [theColor , setTheColor] = React.useState("");
   
  return (
    <div id="app">
      <h1 className={
          theColor=="yes"? "highlight-green": theColor=="no"? "highlight-red":""
      }>CSS is great!</h1>
      <menu>
        <li>
          <button
           
            onClick={
              ()=> setTheColor("yes")
            }>Yes</button>
        </li>
        <li>
          <button
           
           onClick={
              ()=>setTheColor("no")
          }>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;