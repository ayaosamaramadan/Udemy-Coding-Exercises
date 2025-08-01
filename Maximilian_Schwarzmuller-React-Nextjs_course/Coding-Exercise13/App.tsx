
// Using Fragments
// Your task is to edit the existing Summary component such that it outputs the following content:

// <h1>Summary</h1>
// <p>{text}</p>
// Inside the Summary component, this content must not be wrapped by any other HTML element!

// For example, this code would be wrong:

// <div>
//   <h1>Summary</h1>
//   <p>{text}</p>
// </div>
// Build a component that outputs multiple sibling elements without any wrapping parent element.

// function Summary({ text }) {
//   return null;
// }

// function App() {
//   return (
//     <div id="app" data-testid="app">
//       <Summary text="Fragments help you avoid unnecessary HTML elements." />
//     </div>
//   );
// }

// export default App;

// Answer:

function App() {
    function Summary({ text }) {
        return (
        <><h1>Summary</h1>
            <p>{text}</p>
        </>
        );
    }
    
    return (
 <div id="app" data-testid="app">
        <Summary 
        text="Fragments help you avoid unnecessary HTML elements." />
        </div>
    );
}

export default App;
