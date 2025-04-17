import React from 'react';
import Card from './Card';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-500 to-white via-white via-[60%]">
      <div className="flex h-full">
        <div className="h-full">
          <Card />
        </div>
        
        <div 
          className="flex-1 overflow-auto"
          style={{
            marginLeft: '300px',       
            paddingTop: '140px',      
            paddingBottom: '50px',    
            paddingRight: '20px',    
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;