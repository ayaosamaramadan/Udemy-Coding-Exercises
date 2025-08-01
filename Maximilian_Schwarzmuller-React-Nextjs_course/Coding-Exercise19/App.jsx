
// // Exercise: Dynamic Styles
// // Your task is to dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.

// // The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.

// // Make sure that the button toggles between these two styles (color: white <=> color: red).

// // Here's how the finished app should look like BEFORE the button was clicked:


// // Here's how it should look like AFTER the button was clicked:


// // And here's how it should look like when the button was clicked again:


// // Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code environment.

// // Apply CSS styles dynamically to HTML elements.

// import React from 'react';

// // don't change the Component name "App"
// export default function App() {
//     return (
//         <div>
//             <p>Style me!</p>
//             <button>Toggle style</button>
//         </div>
//     );
// }

// Answer:

import React from 'react';

// don't change the Component name "App"


export default function App() {
    const [isRed, setIsRed] = React.useState(false);

    return (
      <>
        <div>
            <p style={{color: isRed ? 'red' : 'white'}}>Style me!</p>
            <button onClick={()=>setIsRed(!isRed)}>Toggle style</button>
        </div>
      </>
    );
}


