import React from 'react';
// import Intro from './component/Intro/Intro.jsx'
import Header from './component/Header/Header.jsx';
import Home from './component/Homep/Home.jsx';
// import ScrollDown from "./component/Homep/ScrollDown.jsx";
import About from './component/About/About.jsx';
import Skills from './component/Skills/Skills.jsx'
import Portfolio from "./component/Portfolio/Portfolio.jsx"
import Contact from "./component/Contanct/Contact.jsx"
import Servicess from "./component/Servicess/Servicess.jsx"
import Footer from "./component/Footer/Footer.jsx"


import './App.css'



    
function App() {
  return (
    <>
      {/* <Intro /> */}
      <Header />
      <main className="main">
        <Home />
        {/* <ScrollDown/> */}
        <About />
        <Skills />
        <Portfolio />
        <Servicess />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;
