import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content';
function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
