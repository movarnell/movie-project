import React from 'react';
import './App.css';
import Movies from "./Movies"
import ReviewForm from './ReviewForm';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './popcorn.png';


function App() {

  return (
    <>
    {/* makes the div containing the page and applies the CSS for the static background */}
    <div className='container-fluid backImage'>
      {/* Calling each component, Props for them are added in the Movies component*/}
    <Title />
    <Movies/>
    </div>
    </>
  );
}

export default App;
