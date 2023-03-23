import React from 'react';
import { useState } from 'react';
import './App.css';
import Movies from "./Movies"
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <>
    <div className='container-fluid backImage'>
    <Title />
    <Movies />
    </div>
    </>
  );
}

export default App;
