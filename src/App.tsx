import React, { useEffect } from 'react';
import './App.css';

// import '../public/assets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routering from './router/Routering';
import NavBar from './components/NavBar';
import { useDispatch } from 'react-redux';
import ServicesApi from './services/get-api-address';
import { setServices } from './features/servicesSlice';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    ServicesApi.getServices().then((data) => {
        //   console.log(data);

        dispatch(setServices(data));
    });
    // console.log(services);
    // console.log(services.length);
}, []);
  return (
    <div className="App">
      {/* <CollapsibleExample /> */}

      <Routering />


      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
