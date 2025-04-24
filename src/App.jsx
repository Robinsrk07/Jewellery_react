import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard';
import Body from './components/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List_item_Type from './components/Manage/List_item_Type';
import Jewellery_Type from './components/Manage/Jewellery_Type';
import Category from './components/Manage/Product-Management/Category';
import SubCategory from './components/Manage/Product-Management/SubCategory';
import Brand from './components/Manage/Product-Management/Brand';
import Color from './components/Manage/Product-Management/Color';
import Login from './components/LoginPage';
import List_return_Type from './components/Manage/Product-Management/List_return_Type';
import Product_Size from './components/Manage/Product-Management/Product_size';
import Gender from './components/Manage/Product-Management/Gender';
import Diamond_Type from './components/Manage/Product-Management/Diamond_Type';
import StoneType from './components/Manage/Product-Management/StoneType';
import Occasion from './components/Manage/Product-Management/Occasion';
import Stock_point from './components/Manage/Product-Management/Stock_point';
import Style from './components/Manage/Product-Management/Style';
import Design from './components/Manage/Product-Management/Design';
import Country from './components/Manage/Location-Management/Country';
import City from './components/Manage/Location-Management/City';
import Adress_Type from './components/Manage/Location-Management/AdressType';

function App() {
  return (
    <div className="w-full h-full m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Body />} >
          <Route path='manage'>
              <Route path='item_type' element={<List_item_Type />} />
              <Route path='jewellery_type' element={<Jewellery_Type />} />
              <Route path='category' element={<Category />} />
              <Route path='subcategory' element={<SubCategory />} />
              <Route path='brand' element={<Brand />} />
              <Route path='color' element={<Color />} />
              <Route path='list_return_Type' element={<List_return_Type />} />
              <Route path='product_size' element={<Product_Size />} />
              <Route path='gender' element={<Gender/>} />
              <Route path='diamond_type' element={<Diamond_Type/>} />
              <Route path='stonetype' element={<StoneType/>} />
              <Route path='occasion' element={<Occasion/>} />
              <Route path='stock-point' element={<Stock_point/>} />
              <Route path='style' element={<Style/>} />
              <Route path='design' element={<Design/>} />
              <Route path='country' element={<Country/>} />
              <Route path='city' element={<City/>} />
              <Route path='adresstype' element={<Adress_Type/>} />
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
