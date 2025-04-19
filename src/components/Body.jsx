import React, { useEffect, useRef, useState } from 'react';
import Card from './Card';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Body = () => {
  const [showSettings, setShowSettings] = useState(false);
  const panelRef = useRef();
 const navigate = useNavigate()
 const handleLogout = () =>{
  navigate('/')
 }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettings]);

  return (
    <div className="h-screen w-full bg-[linear-gradient(to_bottom,#5e72e4_45%,#EFF2F3_45%)]">
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
        <div className="relative">
          {/* Floating Button */}
          {!showSettings && (<div
            className="w-[60px] h-[60px] bg-white rounded-full absolute bottom-12 right-10 flex items-center justify-center text-gray-500 text-xl hover:bg-gray-100 cursor-pointer z-50"
            style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
            onClick={() => setShowSettings(true)}
          >
            <i className="fas fa-cog"></i>
          </div>)}
          

          {/* Slide-in Panel - Always render but transform based on state */}
          <div
  ref={panelRef}
  className={`fixed top-0 right-0 h-full w-90 bg-white shadow-xl transition-transform duration-500 ease-in-out pointer-events-auto ${
    showSettings ? 'translate-x-0 z-[100]' : 'translate-x-full z-[100]'
  }`}
>



            <div className='flex flex-col gap-4  items-center' style={{paddingTop:'90px'}}>
            <Link to="/test-print" className="w-[80%]">
               <button className="btn btn-primary rounded-lg bg-[#5e72e4] w-full">
               TEST PRINT
               </button>
            </Link>
            <Link to="/pos" className="w-[80%]">
              <button className="btn btn-primary rounded-lg bg-[#5e72e4] w-full">
                POS
              </button>
            </Link>

            <Link to="/profile" className="w-[80%]">
              <button className="btn btn-primary rounded-lg bg-[#344767] w-full">
                Profile
              </button>
            </Link>

              <div style={{marginTop:'250px', width:'250px'}} >  <button 
              className="btn btn-primary border border-blue-900 text-blue-900 rounded-lg w-full"
              onClick={handleLogout}
              >Logout</button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;