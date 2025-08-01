// // Dynamic Styling with CSS Classes
// // Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.

// // Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.

// // If not button was clicked yet, no CSS class should be added to the h1 element.

// // Therefore, initially, if no button was clicked, the app should look like this:


// // If the "Yes" button is clicked, it should look like this:


// // And if the "No" button is clicked, the following look should be the result:


// // Important: In this Udemy exercise environment, React hooks must be used directly on the imported React object (import React from 'react'). For example, useState would then be called like this: React.useState().

// // Dynamically style a heading with CSS classes, based on which button was clicked.

// function App() {
//   return (
//     <div id="app">
//       <h1>CSS is great!</h1>
//       <menu>
//         <li>
//           <button>Yes</button>
//         </li>
//         <li>
//           <button>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

// export default App;

// Answer:
function App() {
  return (
    <div id="app">
      <h1>CSS is great!</h1>
      <menu>
        <li>
          <button>Yes</button>
        </li>
        <li>
          <button>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
