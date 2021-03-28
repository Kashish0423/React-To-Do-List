import React from "react";

function App() {

  const [inputText, setInputText]= React.useState("") ;
  const [items, setItems]= React.useState([]) ;



function addItem() {
  setItems(prevItems => {
    return [...prevItems, inputText];
  });
  setInputText("");
}

    function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>

      {items.map(function(item){
         return (<li>{item}</li>)
       })}
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from "react";

// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems(prevItems => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map(todoItem => (
//             <li>{todoItem}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
