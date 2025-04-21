 import { Link } from 'react-router-dom'; 


import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import Logo from '../assets/images/logo-ct-dark.png';

const Card = () => {
  return (
    <div className="bg-white rounded-2xl w-[250px] h-[575px]" style={{fontFamily:'Open Sans' ,overflow:'auto'}}>
          <div className="pt-[25px] pl-[65px] flex items-center gap-2 font-semibold text-[14px] text-gray-500" style={{paddingLeft:'30px', paddingTop:'25px'}}>
            <img src={Logo} alt="Logo" className="w-[30px] h-[30px]" />
            <span>Dashboard</span>
          </div>

          <div  style={{padding:'20px',paddingLeft:'35px' }}>
              <hr className=" border-gray-200 " style={{width:'95%'}} />
          </div>
          <div>
          <details className="group mt-4 pl-[35px] text-sm text-gray-400" style={{ fontFamily: 'Open Sans' }}>
         <summary className="list-none cursor-pointer flex items-center gap-3 text-gray-500 text-sm transition-all duration-300 hover:text-gray-700" style={{ paddingTop: '20px', paddingLeft: '36px' }}>
          <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
         <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
         <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" clipRule="evenodd" />
         </svg>

        <span>Manage</span>

        {/* Arrow that changes depending on open state */}
        <span className=" text-xs text-gray-900 group-open:hidden" style={{paddingLeft:'70px',fontSize:'7px',width:'9px'}}>▼</span>
        <span className=" text-gray-900 hidden group-open:inline" style={{paddingLeft:'70px',fontSize:'7px',width:'9px'}}>▲</span>
      </summary>

      {/* Menu items shown only when expanded */}
      <ul>
        <li style={{ paddingLeft: '63px', paddingTop: '23px' }}><Link to='/dashboard/list_item_type'>Item Type</Link></li>
        <li style={{ paddingLeft: '63px', paddingTop: '20px' }}> <Link to="/dashboard/list_jewellery_type">Jewellery Type </Link></li>
        
                 <details  className='group' style={{ paddingLeft: '31px', paddingTop: '20px', }} >
                   <summary className="list-none cursor-pointer flex items-center gap-2 text-sm" style={{paddingLeft: '30px'}} >
                     Product Management
                     <span className=" text-xs text-gray-900 group-open:hidden" style={{paddingLeft:'10px',fontSize:'7px',width:'9px'}}>▼</span>
                     <span className=" text-gray-900 hidden group-open:inline" style={{paddingLeft:'10px',fontSize:'7px',width:'9px'}}>▲</span>
                   </summary>
                   <ul className="flex flex-col gap-[20px] mt-2 text-gray-400 pl-6" >
                   <li className="text-xs hover:text-blue-500 " style={{paddingLeft: '30px',marginTop:'10px'}} > <Link to='/dashboard/category'>Category</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to='/dashboard/subcategory'>Sub Category</Link></li>
                     <li className="text-xs hover:text-blue-500"  style={{paddingLeft: '30px'}} ><Link to='/dashboard/brand'>Brand</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to='/dashboard/color'>Colour Code</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Return Type</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Size</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Gender</Link></li>
                     <li  className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Diamond Type</Link></li>
                     <li  className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Stone Type</Link></li>
                     <li  className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Occasion</Link></li>
                     <li  cclassName="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Stock Point</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Style</Link></li>
                     <li  className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to=''>Design</Link></li>
                   </ul>
                 </details>
              
                 <details  className='group' style={{ paddingLeft: '31px', paddingTop: '20px', }} >
                   <summary className="list-none cursor-pointer flex items-center gap-2 text-sm" style={{paddingLeft: '30px'}} >
                     Location Management
                     <span className=" text-xs text-gray-900 group-open:hidden" style={{paddingLeft:'10px',fontSize:'7px',width:'9px'}}>▼</span>
                     <span className=" text-gray-900 hidden group-open:inline" style={{paddingLeft:'10px',fontSize:'7px',width:'9px'}}>▲</span>
                   </summary>
                   <ul className="flex flex-col gap-[20px] mt-2 text-gray-400 pl-6" >
                    <li className="text-xs hover:text-blue-500 " style={{paddingLeft: '30px',marginTop:'10px'}} > <Link to='/dashboard/category'>Country</Link></li>
                     <li className="text-xs hover:text-blue-500" style={{paddingLeft: '30px'}}><Link to='/dashboard/subcategory'>City</Link></li>
                     <li className="text-xs hover:text-blue-500"  style={{paddingLeft: '30px'}} ><Link to='/dashboard/brand'>Adress Type</Link></li>
                     
                   </ul>
                 </details>
               
                 </ul>
                </details>


          <details className="group mt-4 pl-[35px] text-sm text-gray-400" style={{ fontFamily: 'Open Sans' }}>
         <summary className="list-none cursor-pointer flex items-center gap-3 text-gray-500 text-sm transition-all duration-300 hover:text-gray-700" style={{ paddingTop: '40px', paddingLeft: '36px' }}>
          <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
         <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
         <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" clipRule="evenodd" />
         </svg>

        <span>Branch</span>

        {/* Arrow that changes depending on open state */}
        <span className=" text-xs text-gray-900 group-open:hidden" style={{paddingLeft:'76px',fontSize:'7px',width:'9px'}}>▼</span>
        <span className=" text-gray-900 hidden group-open:inline" style={{paddingLeft:'70px',fontSize:'7px',width:'9px'}}>▲</span>
      </summary>

      {/* Menu items shown only when expanded */}
      <ul>
        <li style={{ paddingLeft: '63px', paddingTop: '23px' }}>Branch</li>
      </ul>
    </details>


          </div>
      

    </div>
  );
};

export default Card;

