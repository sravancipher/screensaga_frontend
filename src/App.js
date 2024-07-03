import Landing from './Landing';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import './App.css'
function App() {
  return(
    <>
    {
      <Landing />
    }
    </>
    
  )
}



















export default App;
// File: App.js
// import React, { useState } from 'react';

// const ReplacementComponent = () => {
//   return (
//     <div>
//       <h2>Replaced Component</h2>
//       <p>This component has replaced the original one.</p>
//     </div>
//   );
// };

// const ClickableComponent = () => {
//   const [isReplaced, setIsReplaced] = useState(false);

//   const handleClick = () => {
//     setIsReplaced(true);
//   };

//   if (isReplaced) {
//     return <ReplacementComponent />;
//   }

//   return (
//     <div onClick={handleClick}>
//       <h2>Original Component</h2>
//       <p>Click me to replace me with another component.</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <ClickableComponent />
//     </div>
//   );
// };

// export default App;
