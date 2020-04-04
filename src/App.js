import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Banner from './Component/Banner/Banner';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
