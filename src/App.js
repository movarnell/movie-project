import React from 'react';
import { useState } from 'react';
import './App.css';
import Movies from "./Movies"
import ReviewForm from './ReviewForm';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import './popcorn.png';


function App() {

  return (
    <>
    <div className='container-fluid backImage'>
    <Title />
    <Movies>
    <ReviewForm />
    </Movies>
    </div>
    </>
  );
}

export default App;
