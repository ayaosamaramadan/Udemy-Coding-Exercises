
// // Two-Way-Binding
// // Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

// // In addition, you should pass the collected values via the appropriate props to the already existing Review component.

// // Important: In this Udemy workspace, you must use React.useState() instead of just useState()!

// // The final app should allow users to enter values and then see those entered values in the Review component which is output below the input components. It should look like this:


// // The "Save" button is just there for decoration purposes - you don't need to do anything with that!

// // Use two-way-binding to collect user input and output the entered text in a "preview area" of the example web app.

// import React from 'react';

// const [Feedback , setisfed]=React.useState("");

// function App() {
//   return (
//     <>
//       <section id="feedback">
//         <h2>Please share some feedback</h2>
//         <p>
//           <label>Your Feedback</label>
//           <textarea value={Feedback} Onchange={(e)=>setisfed(e.target.value)}/>
//         </p>
//         <p>
//           <label>Your Name</label>
//           <input type="text" />
//         </p>
//       </section>
//       <section id="draft">
//         <h2>Your feedback</h2>

//         <Review />

//         <p>
//           <button Onclick={handlesave}>Save</button>
//         </p>
//       </section>
//     </>
//   );
// }

// export default App;


// Answer:

import React from 'react';
import Review from './Review';

function App() {
  const [feedback, setisfed] = React.useState("");
  const [student, setName] = React.useState("");

  function handlesave() {}
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={(e)=>setisfed(e.target.value)}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={student} onChange={(e)=>setName(e.target.value)} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={student}/>

        <p>
          <button onClick={handlesave}>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;