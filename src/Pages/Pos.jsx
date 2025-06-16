import React, { useState } from "react";
import {useDispatch} from 'react-redux'

import { addCustomer } from "../StateManagement/CustomerSlice";
import Loader from "./../components/Loader";

const Pos = () => {
  const [mobileSearch, setMobileSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);
  const [isNewCustomer, setNewCustomer] = useState(false);
  const [Loading,setLoading] =useState(false)
      const [customerDetails, setCustomerDetails] = useState({
      name: '',
      phoneNumber: '',
      email: '',
      address: ''
    });
 const dispatch = useDispatch()

    const handleChange = (e) => {
    const { name, value } = e.target;
     setCustomerDetails(prev => ({
     ...prev,
     [name]: value
    }));
    };

   const handleSaveCustomer = () => {
      dispatch(addCustomer(customerDetails));
      setLoading(true);

      setTimeout(() => {
        setCustomerDetails({
          name: '',
          phoneNumber: '',
          email: '',
          address: ''
        });
        setNewCustomer(false);
        setLoading(false);
      }, 3000);
    };



  const handleViewMoreClick = () => {
    setIsViewMoreOpen(!isViewMoreOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalsData = [
    { label: "Totals", value: "Value" },
    { label: "Sales", value: "Value" },
    { label: "Gross Wt.", value: "Value" },
    { label: "Pcs", value: "Value" },
    { label: "Amount", value: "Value" },
    { label: "Discount", value: "Value" },
    { label: "Rounding", value: "Value" },
    { label: "Total Discount", value: "Value" },
    { label: "Collection", value: "Value" },
    { label: "Currency", value: "Value" },
    { label: "FC", value: "Value" },
    { label: "Amount", value: "Value" },
    { label: "Tax", value: "Value" },
    { label: "Net Amount", value: "Value" },
    { label: "Active Windows", value: "Value" },
  ];

  return (
    <div className="bg-[#F8F9FA] w-full h-full flex">
      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="w-[20%] h-full bg-[#5E72E4] transition-all overflow-auto duration-300" >
          <div className="p-4">
            <h2 className="text-xs text-white font-bold mb-4" style={{padding:'30px'}}>Manage</h2>
            <h2 className="text-xs font-semibold text-white font-bold mb-4" style={{padding:'30px'}}>Customers</h2>
           <button className="bg-white w-[80%] text-sm font-semibold text-blue-500 rounded-xs" style={{marginLeft:'30px'}} >Add  Customer</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${isMenuOpen ? 'w-[80%]' : 'w-full' }  bg-[#F8F9FA]`} style={{fontFamily: 'Open Sans'}} >
        <div className="w-full min-h-[100px] bg-[#F8F9FA]" style={{ padding: '20px', fontFamily: 'Open Sans' }}>
          {/* Top Navigation Bar */}
          <div className="flex justify-between items-center w-full h-[80px] bg-[#F8F9FA] flex-nowrap max-w-full">
            <button
              className="flex items-center w-[80px] h-[30px] bg-gray-800 text-white text-sm rounded-sm shadow hover:bg-gray-700"
              style={{ padding: '5px 10px' }}
              onClick={toggleMenu}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            <div className="flex items-center gap-2 flex-nowrap max-w-[60%] sm:max-w-[400px]">
              <label
                htmlFor="search-mobile"
                className="font-semibold text-sm text-gray-900 whitespace-nowrap"
              >
                Search Mobile:
              </label>
              <input
                type="text"
                id="search-mobile"
                placeholder=" Enter Mobile No"
                className="border input input-sm bg-white text-black border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full max-w-[150px] sm:w-[200px]"
                value={mobileSearch}
                onChange={(e) => setMobileSearch(e.target.value)}
              />
              <button
                className="text-white w-[90px] sm:w-[130px] h-[30px] text-[12px] bg-[#5E72E4] rounded hover:bg-blue-700"
                onClick={() => setNewCustomer(true)} // Open Add New Customer modal
              >
                + New Customer
              </button>
            </div>
            <button
              className="text-white w-[100px] sm:w-[120px] h-[30px] text-[12px] bg-[#5E72E4] rounded hover:bg-blue-700"
              onClick={() => setIsAddNewOpen(true)} // Open Item Details modal
            >
              Add New +
            </button>
          </div>

          {/* Blue Header Bar */}
          <div className="bg-[#5E72E4] w-full h-auto sm:h-[40px] rounded-lg mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0" style={{ padding: '10px' }}>
              <h3 className="text-[12px] font-bold text-white" style={{ paddingLeft: '200px' }}>
                Salesman & Customer Details
              </h3>
              <h3
                onClick={handleViewMoreClick}
                className="text-[12px] font-bold text-white flex items-center gap-1 cursor-pointer mt-2 sm:mt-0"
                style={{ paddingRight: '200px' }}
              >
                View More
                {isViewMoreOpen ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </h3>
            </div>
          </div>

          {/* Form Fields - Only visible when View More is expanded */}
          {isViewMoreOpen && (
            <div className="w-full min-h-[150px] bg-[#FFFFFF] border border-gray-300 rounded-lg mt-4 p-4">
              <div className="flex flex-col md:flex-row gap-4 items-center text-gray-700" style={{ padding: '30px' }}>
                <div className="flex flex-col w-full md:w-1/4">
                  <label className="text-sm font-medium text-gray-700 mb-1">Salesman name</label>
                  <input
                    type="text"
                    className="border input input-sm border-gray-300 bg-white  rounded w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/4">
                  <label className="text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                  <input
                    type="text"
                    className="border input  input-sm bg-white border-gray-300 rounded w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-2/4" style={{ marginTop: '10px' }}>
                  <label className="text-sm font-medium text-gray-700 mb-1">Description/Notes</label>
                  <textarea
                  className="w-full border border-gray-300 rounded-xs bg-white h-[50px] min-h-0 p-2 resize-none"
                />

                </div>
              </div>
            </div>
          )}

          {/* Products Table */}
          <div className="w-full min-h-[150px] border border-gray-300 bg-[#FFFFFF] rounded-lg overflow-auto" style={{ marginTop: '30px', padding: '30px' }}>
  <table className="table w-full text-sm border border-collapse bg-[#FFFFFF]" style={{ minWidth: '1200px' }}>
    <thead className="h-[30px]">
      <tr className="bg-gray-800 text-white">
        <th className="px-4 py-2 border text-center">#</th>
        <th className="px-4 py-2 border text-center">Item Type</th>
        <th className="px-4 py-2 border text-center">Code</th>
        <th className="px-4 py-2 border text-center">Description</th>
        <th className="px-4 py-2 border text-center">Gross Weight</th>
        <th className="px-4 py-2 border text-center">UOM</th>
        <th className="px-4 py-2 border text-center">Rate</th>
        <th className="px-4 py-2 border text-center">Amount</th>
      </tr>
    </thead>
    <tbody className="bg-white text-gray-700 text-xs ">
      <tr className="border-t h-[30px]">
        <td className="px-4 py-2 border text-center">1</td>
        <td className="px-4 py-2 border text-center">Gold Chain</td>
        <td className="px-4 py-2 border text-center">GR183</td>
        <td className="px-4 py-2 border text-center">22K Gold Chain</td>
        <td className="px-4 py-2 border text-center">8.5</td>
        <td className="px-4 py-2 border text-center">g</td>
        <td className="px-4 py-2 border text-center">300</td>
        <td className="px-4 py-2 border text-center">3100</td>
      </tr>
      <tr className="border-t h-[30px]">
        <td className="px-4 py-2 border text-center">2</td>
        <td className="px-4 py-2 border text-center">Gold Ring</td>
        <td className="px-4 py-2 border text-center">GR123</td>
        <td className="px-4 py-2 border text-center">22K Gold Ring</td>
        <td className="px-4 py-2 border text-center">10.5</td>
        <td className="px-4 py-2 border text-center">g</td>
        <td className="px-4 py-2 border text-center">200</td>
        <td className="px-4 py-2 border text-center">2100</td>
      </tr>
      
    </tbody>
  </table>
</div>

          {/* Totals Section */}
          <div className="w-full bg-[#FFFFFF] min-h-[150px] border border-gray-300 rounded-lg" style={{ marginTop: '30px', padding: '30px' }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {totalsData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-white">
                  <span className="text-sm font-medium text-gray-700">{item.label}:</span>
                  <span className="text-sm text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add New Customer Modal */}
      {isNewCustomer && !Loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto" onClick={()=>setIsAddNewOpen(false)}>
          <div className="bg-white rounded-xl shadow-md w-[90%] max-h-[95vh]
                        sm:w-[85vw] sm:h-[55vh] sm:p-6
                        md:w-[65vw] md:h-[65vh] md:p-8
                        lg:w-[55vw] lg:h-[65vh] lg:p-10
                        xl:w-[35vw] xl:h-[65vh] xl:p-12
                        2xl:w-[25vw] 2xl:h-[60vh] 2xl:p-14
                        p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto"
                          onClick={(e) => e.stopPropagation()} >
            <h3 className="font-bold text-[15px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                style={{ paddingLeft: '20px', paddingTop: "20px" }}>
              Add New Customer
            </h3>
            <hr className="my-4 border-gray-300" style={{ marginTop: '10px' }} />

           <div className="flex flex-col flex-grow gap-4 text-gray-400" style={{ padding: '10px' }}>
            <input
              type="text"
              name="name"
              value={customerDetails.name}
              onChange={handleChange}
              placeholder="  Customer Name"
              className="input w-[90%] rounded-xs focus:outline-none input-sm bg-white border-gray-300 focus:border-b-2 focus:border-blue-500"
              style={{ marginLeft: '25px' }}
            />

            <input
              type="text"
              name="phoneNumber"
              value={customerDetails.phoneNumber}
              onChange={handleChange}
              placeholder="   Mobile Number"
              className="input w-[90%] rounded-xs focus:outline-none input-sm bg-white border-gray-300 focus:border-b-2 focus:border-blue-500"
              style={{ marginLeft: '25px' }}
            />

            <input
              type="text"
              name="email"
              value={customerDetails.email}
              onChange={handleChange}
              placeholder="  Email"
              className="input w-[90%] rounded-xs focus:outline-none input-sm bg-white border-gray-300 focus:border-b-2 focus:border-blue-500"
              style={{ marginLeft: '25px' }}
            />

            <textarea
              name="address"
              value={customerDetails.address}
              onChange={handleChange}
              placeholder="Address"
              className="textarea w-[90%] bg-gray-100 rounded-xs input-sm bg-white border-gray-300 focus:outline-none focus:border-b-2 focus:border-blue-500"
              style={{ marginLeft: '25px' }}
            ></textarea>
          </div>


            <div className="flex flex-col sm:flex-row justify-center items-center gap-4"
                style={{ marginTop: '20px', marginBottom: '10px' }}>
              <button
                type="button"
                className="btn w-[80%] rounded-lg text-white border-none"
                style={{ backgroundColor: '#5E72E4' }}
                 onClick={handleSaveCustomer}
               >
                Save Customer
              </button>
            </div>
          </div>
        </div>
      )}
      {Loading && (<Loader></Loader>)}

      {/* Add New Item Modal (Matching the Image) */}
      {isAddNewOpen && (
       <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto" style={{fontFamily:'Open Sans '}}>
          <div className="bg-white rounded-lg shadow-md w-[90%] max-h-[100vh]
                        sm:w-[85vw] sm:h-[55vh] sm:p-6
                        md:w-[65vw] md:h-[65vh] md:p-8
                        lg:w-[55vw] lg:h-[65vh] lg:p-10
                        xl:w-[65vw] xl:h-[100vh] xl:p-12
                        2xl:w-[25vw] 2xl:h-[60vh] 2xl:p-14
                        p-4 sm:p-6 md:p-8 flex flex-col overflow-auto">
            <h3 className="font-semibold text-[13px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                style={{ paddingLeft: '20px', paddingTop: "20px" }}>
              Item Detials
            </h3>
            <hr className="my-4 border-gray-300" style={{ marginTop: '10px' }} />

            <div className="flex flex-col flex-grow gap-4 text-gray-400" style={{ padding: '10px' }}>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h3 className="text-black text-[13px] mt-2" style={{marginTop:'10px'}}>Barcode:</h3>
              <div className="flex flex-col md:flex-row w-[80%]  justify-between gap-2">
            <input 
              className="input input-sm border-gray-300 bg-white text-black w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="   BRD-NKL00002" 
            />    <button className="bg-blue-500 w-[50%] md:w-[25%] text-white text-xs rounded-xs">Search</button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h3 className="text-black text-[13px] mt-2" style={{marginTop:'10px'}}>Price:</h3>
              <div className="flex flex-col md:flex-row w-[80%]  justify-between gap-2">
            <input 
              className="input input-sm border-gray-500 bg-white text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="   GOLD PRICE PER GRAM"
            />   
            <input 
              className="input input-sm border-gray-500 bg-white text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="   GOLD PRICE PER GRAM" 
            />   
            <input 
              className="input input-sm border-gray-500 bg-white text-gray-400  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="   GOLD PRICE PER GRAM" 
            />   
              </div>
            </div>

             <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h3 className="text-black text-[13px] mt-2" style={{marginTop:'10px'}}>Item Type:</h3>
              <div className="flex flex-col md:flex-row w-[80%]  justify-between gap-2">
              <select className="select select-bordered w-full bg-white border-gray-400 " style={{paddingLeft:"10px"}}>
                <option disabled selected>Gold</option>
                <option>Gold</option>
                <option>Gold</option>
              </select>   
              </div>
            </div>
             <div className="flex flex-col md:flex-row gap-4 justify-between">
              <h3 className="text-black text-[13px] mt-2" style={{marginTop:'10px'}}>Type:</h3>
              <div className="flex flex-col md:flex-row w-[80%]  justify-between gap-2">

            <input 
              className="input input-sm border-gray-300 bg-gray-300 text-black w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="   Serilaized" 
            />   
                          <h3 className="text-black text-[13px] mt-2" style={{marginTop:'10px'}}>Item:</h3>
 
            <input 
              className="input input-sm border-gray-300 bg-white text-black w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300" 
              value="  " 
            />    
              </div>
            </div>

           

             </div>




           <div className="overflow-auto" style={{margin:'10px'}}>
         <table className="w-full bg-white overflow-auto border-collapse border border-gray-300 my-5" style={{minWidth:'900px' ,minHeight:'250px'}}>
          <thead>
          <tr className="bg-white"style={{height:"30px"}} >
            <th className="border border-gray-300  bg-white text-black text-sm text-center font-semibold"  >Weight / Quantity</th>
            <th className="border border-gray-300  bg-white text-black text-sm text-center font-semibold"  >Rate</th>
            <th className="border border-gray-300  bg-white text-black text-sm text-center font-semibold"  >Amount</th>
            <th className="border border-gray-300  bg-white text-black text-sm text-center font-semibold"  >Tax</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          <td className="border border-gray-300 p-4 text-black " style={{padding:'3px'}}>
            <h3 className="text-[12px] bg-w flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Gross Weight (GMS)
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Stone Weight (GMS):
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
             <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Net Weight (GMS):
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            /> 
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             No of Pieces:
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
          </td>
             <td className="border border-gray-300 p-4 text-black " style={{padding:'3px'}}>
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Rate :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Stone Rate :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
             <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Making Rate :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            /> 
          </td>


             <td className="border border-gray-300 p-4 text-black " style={{padding:'3px'}}>
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Total Amount :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Stone Value :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
             <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Making Value :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
               style={{height:"30px",marginBottom:'5px'}}
            /> 
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Metal Value :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
               style={{height:"30px",marginBottom:'5px'}}
            />
          </td>
             <td className="border border-gray-300 p-4 text-black " style={{padding:'3px'}}>
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Stone Tax :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
             Making Tax :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
             <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Default Tax :
            </h3>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            /> 
            <h3 className="text-[12px] bg-gray-100 flex justify-center items-center p-2 " style={{height:"20px",marginBottom:'5px'}}>
              Net Amount :
            </h3>
            <input 
              type="text" 
              placeholder="" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              style={{height:"30px",marginBottom:'5px'}}
            />
          </td>
          </tr>
        </tbody>
      </table>
    </div>
            
 
            <div  style={{padding:"20px"}}>
              <hr className="my-4 border-gray-300" style={{ marginTop: '10px' }} />

              <div className="flex flex-col md:flex-row  justify-between">
              <div className="flex flex-col md:flex-row ">
              <button className="text-white text-sm rounded-sm w-[100px] md:w-[180px] h-[30px] bg-blue-600 text-[13px]" style={{ marginTop: '10px' }}>Consider Buffer :Yes</button>
              <button className="text-white text-sm rounded-sm w-[150px] md:w-[200px] h-[30px] bg-blue-600 text-[13px]" style={{ marginTop: '10px' ,marginLeft:'10px' }}>Making Calculations:netWeight</button>
              </div>
              <div className="flex flex-col md:flex-row ">
              <button className="text-white text-sm rounded-sm w-[80px] h-[30px] bg-gray-600 text-[13px]" onClick={()=>setIsAddNewOpen(false)} style={{ marginTop: '10px' }}>close</button>
              <button className="text-white text-sm rounded-sm w-[80px] h-[30px] bg-blue-600 text-[13px]" style={{ marginTop: '10px' ,marginLeft:'10px' }}>Add</button>
              </div>
              </div>
         
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pos;