import './App.css';
import React from 'react';
import { Routes, Route  } from 'react-router-dom'
import Calculatrice from './Routes/TP1/Calculatrice';
import Slider from './Routes/TP2/Slider';
import Form from './Routes/TP3/Form';
import Api from './Routes/TP4/Api';
import Navbar from './Navbar';
import Contenu from "./Routes/home/Components/contenu/contenu";
import ToggleLangs from "./Routes/home/Components/toggle/toggle";
import ContextProvider from "./Routes/home/Context/langContext";
import ThemeContextProvider from './Routes/Theme/Context/themeContext';


function App() {

  return (
    <div className='App'>
    <ThemeContextProvider>
       <Navbar/>
      <Routes>
          <Route path="/" element={<ContextProvider><Contenu /><ToggleLangs /></ContextProvider>} />
         <Route path="/TP1" element={<Calculatrice/>} />
         <Route path='/TP2' element={<Slider/>}></Route>
         <Route path="/TP3" element={<Form/>}></Route>
         <Route path="/TP4" element={<Api/>}></Route>
        <Route path='*' element ={<><h4>404 page not found </h4></>}></Route>  
        
      </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
