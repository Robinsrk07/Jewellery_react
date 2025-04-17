import React from 'react';
import { Link } from 'react-router-dom'; 

const Card = () => {
  return (
    <div className="fixed top-4 left-4 bg-white  rounded-xl shadow-lg w-64 z-50 h-[500px] overflow-y-auto p-4 flex flex-col items-center">
      <div className="h-[60px] flex items-center justify-center">
        <h1 className="text-lg font-semibold text-gray-400">DashBoard</h1>
      </div>

      <hr className="border-t border-blue-500 my-4 w-3/5" />

      <ul className="flex flex-col gap-[20px] w-full pl-6">
        <li className='mt-3'>
          <details close>
          <summary className="list-none cursor-pointer  flex items-center gap-3 text-gray-500 font-normal transition-all duration-300 hover:text-gray-700" style={{paddingLeft: '60px'}}>          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
  <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" clipRule="evenodd"/>
</svg>
  Manage
</summary>
 
            {/* Added pl-4 to nested uls */}
            <ul className="flex flex-col gap-[20px] mt-2 text-gray-400   pl-9" style={{paddingLeft: '60px'}}>
              <li><Link to="/list_item_type">Item Type</Link></li>
              <li><Link to="/list_jewellery_type">Jewellery Type</Link></li>
              <li>
                <details>
                  <summary className="list-none cursor-pointer flex items-center gap-2 font-normal" style={{paddingLeft: '60px'}}>
                    Product Management
                  </summary>
                  <ul className="flex flex-col gap-[20px] mt-2 text-gray-400 pl-6" style={{paddingLeft: '60px'}}>
                    <li><Link to=''>Category</Link></li>
                    <li><Link to=''>Sub Category</Link></li>
                    <li><Link to=''>Brand</Link></li>
                    <li><Link to=''>Colour Code</Link></li>
                    <li><Link to=''>Return Type</Link></li>
                    <li><Link to=''>Size</Link></li>
                    <li><Link to=''>Gender</Link></li>
                    <li><Link to=''>Diamond Type</Link></li>
                    <li><Link to=''>Stone Type</Link></li>
                    <li><Link to=''>Occasion</Link></li>
                    <li><Link to=''>Stock Point</Link></li>
                    <li><Link to=''>Style</Link></li>
                    <li><Link to=''>Design</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details close>
                  <summary className="list-none cursor-pointer flex items-center gap-2 font-semibold" style={{paddingLeft: '60px'}}>
                    Location Management
                  </summary>
                  <ul className="flex flex-col gap-[20px] text-gray-400 mt-2 pl-6" style={{paddingLeft: '60px'}}>
                    <li><Link to=''>Country</Link></li>
                    <li><Link to=''>City</Link></li>
                    <li><Link to=''>Adress Type</Link></li>                        
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details close>
            <summary className="list-none cursor-pointer flex items-center gap-4 text-gray-500 font-normal" style={{paddingLeft: '60px'}}>
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
</svg>
              Branch
            </summary>
            <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li><Link to=''>Branch</Link></li>
            </ul>
          </details>
        </li>

        <li>
          <details close>
            <summary className="list-none cursor-pointer flex items-center text-gray-500 gap-3 font-normal" style={{paddingLeft: '60px'}}>
            <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  />
</svg>
              Supplier
            </summary>
            <ul className="flex flex-col gap-[20px] text-gray-400 mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li><Link to=''>Control Account</Link></li>
              <li><Link to=''>Group</Link></li>
              <li><Link to=''>Tax Category</Link></li>
              <li><Link to=''>List Supplier</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details close>
            <summary className="list-none cursor-pointer flex items-center text-gray-500 gap-2 font-normal" style={{paddingLeft: '60px'}}>
            <svg 
  className="w-6 h-6 text-gray-800" 
  fill="none" 
  stroke="currentColor" 
  viewBox="0 0 24 24"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth={2} 
    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  />
</svg>
              Employees
            </summary>
            <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li><Link to=''>Departments</Link></li>
              <li><Link to=''>Positions</Link></li>
              <li><Link to=''>Payment Methodes</Link></li>
              <li><Link to=''>Gender</Link></li>
              <li><Link to=''>Employee List</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details close>
            <summary className="list-none text-gray-500 cursor-pointer flex items-center gap-2 font-normal before:content-['👤'] before:mr-2" style={{paddingLeft: '60px'}}>
              Customers
            </summary>
            <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li><Link to=''>Customers List</Link></li>
            </ul>
          </details>
        </li>

        <li>
          <details close>
            <summary className="list-none text-gray-500 cursor-pointer flex items-center gap-2 font-normal" style={{paddingLeft: '60px'}}>
            <svg
  className="w-6 h-6 text-gray-800"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 2H15M9 2a2 2 0 00-2 2v2h10V4a2 2 0 00-2-2M9 2h6M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm3 4h8m-8 4h6"
  />
</svg>

              Inventory
            </summary>
            <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li>Items</li>
              <li>
                <details close>
                  <summary className="list-none text-gray-400 cursor-pointer flex items-center gap-2 font-semibold" style={{paddingLeft: '60px'}}>
                    Gold
                  </summary>
                  <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
                    <li>Purchase</li>
                    <li>Purchase fix</li>
                    <li>List Purchase Fix</li>
                  </ul>
                </details>
              </li>
              <li>
                <details close>
                  <summary className="list-none text-gray-400 cursor-pointer flex items-center gap-2 font-semibold" style={{paddingLeft: '60px'}}>
                    Diamond
                  </summary>
                  <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
                    <li>N/A</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
              
        <li>
          <details close>
            <summary className="list-none text-gray-500 cursor-pointer flex items-center gap-2 font-normal " style={{paddingLeft: '60px'}}>
              <svg
  className="w-6 h-6 text-gray-800"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M11.25 2.25h1.5a.75.75 0 01.75.75v1.548a6.731 6.731 0 011.5.564l1.091-1.09a.75.75 0 011.06 0l1.06 1.06a.75.75 0 010 1.06l-1.09 1.091a6.731 6.731 0 01.564 1.5h1.548a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-1.548a6.731 6.731 0 01-.564 1.5l1.09 1.091a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06 0l-1.091-1.09a6.731 6.731 0 01-1.5.564v1.548a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-1.548a6.731 6.731 0 01-1.5-.564l-1.091 1.09a.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 010-1.06l1.09-1.091a6.731 6.731 0 01-.564-1.5H2.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h1.548a6.731 6.731 0 01.564-1.5L3.272 7.143a.75.75 0 010-1.06l1.06-1.06a.75.75 0 011.06 0l1.091 1.09a6.731 6.731 0 011.5-.564V3a.75.75 0 01.75-.75zm.75 7.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
  />
</svg>

              Settings
            </summary>
            <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
              <li>
                <details close>
                  <summary className="list-none text-gray-400 cursor-pointer flex items-center gap-2 font-semibold" style={{paddingLeft: '60px'}}>
                    Trade Settings
                  </summary>
                  <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
                    <li>Tax</li>
                    <li>Currency</li>
                    <li>UMO</li>
                    <li>Terms Of Payment</li>
                  </ul>
                </details>
              </li>
              <li>
                <details close>
                  <summary className="list-none text-gray-400 cursor-pointer flex items-center gap-2 font-semibold" style={{paddingLeft: '60px'}}>
                    Group & Permissions
                  </summary>
                  <ul className="flex flex-col text-gray-400 gap-[20px] mt-2 pl-6" style={{paddingLeft: '60px'}}>
                    <li>Groups</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default Card;