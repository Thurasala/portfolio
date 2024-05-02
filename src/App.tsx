import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import TechPage from './components/Technologies/Tech';
import Pricing from './components/Pricing/Pricing';
import Client from './components/Client/Client';
import Blog from './components/Blog/Blog';
import Questions from './components/Questions/Questions';
import SharingStorage from './components/SharingStorage/SharingStorage';

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Home />
      <TechPage />
      <Pricing />
      <Client />
      <Blog />
      <Questions />
      <SharingStorage />
    </Box>
  );
}

export default App;
