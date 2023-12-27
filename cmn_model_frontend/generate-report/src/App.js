// File: App.js

import React from 'react';
import './App.css'
import ImageUploadForm from './Generate_report';
import Header from './header';
import Footer from './footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <ImageUploadForm />
      
      <Footer/>
    </div>
  );
};

export default App;
