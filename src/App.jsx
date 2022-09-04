import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Write from './components/Home/Write';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
   
  return (
    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route to='/' />
        <Route path='/create' element={<Write />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
