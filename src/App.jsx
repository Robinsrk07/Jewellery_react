import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard';
import Body from './components/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List_item_Type from './components/Manage/List_item_Type';
import Jewellery_Type from './components/Manage/Jewellery_Type';

function App() {
  return (
    <div className="w-full h-full m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} >
          <Route path='/list_item_type' element={<List_item_Type/>}/>
          <Route path='/list_jewellery_type' element={<Jewellery_Type/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;