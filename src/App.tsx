import React from 'react';
import './App.css';

// import '../public/assets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routering from './router/Routering';
import NavBar from './components/NavBar';
import CollapsibleExample from './components/navemaple';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <CollapsibleExample /> */}

      <Routering />


      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
