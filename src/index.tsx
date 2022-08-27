import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: Create ref to every input to clean the values when click in the reset button - DONE 
// TODO: Change all the useStates (bill, tip,  numberOfPeople) to a unique useState that is a object with this keys - DONE
// TODO: Fix the bug that when set a custom value and after select a default value, the custom value stay with the number - DONE
// TODO: Add a red border when the number of people's input is equal to zero - DONE
// TODO: Fix the icon in input component (I believe the best way is using the same idea from the ant desing input component) - DONE
// TODO: Fix the types for components with ANY
// TODO: Fix the layout for size bigger than 1440px