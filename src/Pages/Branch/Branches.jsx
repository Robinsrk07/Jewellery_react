
import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import CreateButton from '../../components/CreateButton';
import Pagination from '../../components/Pagination';
import ItemsPerPageSelector from '../../components/ItemsPerPageSelector';
import { Link } from 'react-router';
    
     const  Branches = () => {
     
          
      const  [isHovered, setIsHovered] = useState(false);
                   const [items, setItems] = useState(10);
                   const [formData, setFormData] = useState({
                     name: '',
                     gender:'',
                     department:'',
                     status:'',
                     position:'',
                     bankaccountnumber:''
                   });
                   const [errors, setErrors] = useState({});
                    // handle change 
                 
                       const handleChange = (e) => {
                         const { name, value } = e.target;
                         setFormData((prev) => ({ ...prev, [name]: value }));
                         setErrors((prev) => ({ ...prev, [name]: '' })); 
                       };
      
                    const [modal, setModal] = useState(false)   
                    const [editModal,setEditModal]= useState(false)
                    const [isActive, setIsActive] =useState(false)
                 
                   //validation 
                   
                   const validate = () => {
                     const newErrors = {};
                     if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
                     if (!formData.description.trim()) newErrors.description = 'Enter the Description';
                     if (!formData.status.trim()) newErrors.status = 'Enter Status';
                     return newErrors;
                   };    
                 
                   //handle submit
                 
                   const handleSubmit = (e) => {
                     e.preventDefault();
                     const validationErrors = validate();
                     if (Object.keys(validationErrors).length > 0) {
                       setErrors(validationErrors);
                       return;
                     }
                 
                     // Submit form
                     console.log('Form submitted:', formData);
                 
                     // Reset form and close modal - Fixed to include all fields
                     setFormData({
                       name: '',
                       description: '',
                       status: '',
                     });
                     setErrors({});
                     setModal(false);
                   };
                  
                   // Handle close modal
                   const handleCloseModal = () => {
                     setModal(false);
                     setEditModal(false)
                   };
                 
                 
                 
                 
                 
                   return (
                     
                 <>
                 <style jsx global>{`
                   .custom-scrollbar::-webkit-scrollbar {
                     width: 6px;  /* Slightly wider for better visibility */
                     height: 6px; /* For horizontal scroll */
                   }
                   
                   .custom-scrollbar::-webkit-scrollbar-track {
                     background: #f1f1f1; /* Light gray track */
                     border-radius: 3px;
                   }
                   
                   .custom-scrollbar::-webkit-scrollbar-thumb {
                     background:rgb(218, 216, 216); /* Rich red color */
                     border-radius: 3px;
                     border: 1px solidrgb(206, 198, 198); /* Darker red border */
                   }
                   
                   .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                     background:rgb(202, 190, 190); /* Darker red on hover */
                   }
                   
                   /* For Firefox */
                   .custom-scrollbar {
                     scrollbar-width: thin;
                     scrollbar-color:rgb(226, 215, 215) #f1f1f1; /* red thumb on gray track */
                   }
                 `}</style>
                <div className="bg-white w-full
                    max-w-[99vw] 
                    xl:max-w-[90vw] 
                    2xl:max-w-[95vw] 
                    h-auto max-h-[70vh] 
                    rounded-xl px-4 md:px-8 lg:px-12
                    mx-auto overflow-auto  custom-scrollbar"
                 style={{ fontFamily: 'Open Sans',overflow:'auto'}}
                   >
                      <CreateButton
                         buttoncontent="+ New Branch"
                         onClick={() => setModal(true)}  // This will now work!
                      />                 
                      <ItemsPerPageSelector items={items} setItems={setItems} />
                       
                 
                       
                 
                       <table className="table w-full text-sm  text-[#A8B2C4] border-collapse min-w-[1300px]  " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-[#A8B2C4]  uppercase bg-white">
                           <tr>
                             <th className='min-w-[100px]'  style={{paddingLeft:'20px'}} >SL NO</th>
                             <th  className='min-w-[150px] ' >Branch Code </th>
                             <th  className='min-w-[150px] ' >Location/City </th>
                             <th  className='min-w-[200px] ' >Address </th>
                             <th  className='min-w-[150px] ' >Phone</th>
                             <th className='min-w-[150px] '  >Email</th>
                             <th className='min-w-[150px] '  >Country</th>
                             <th className='min-w-[150px] '  >State/Province</th>
                             <th className='min-w-[150px] '  >Status </th>
                             <th className='min-w-[150px] '  >Actions </th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-sm" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">BCR23#</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Dubai</td>
                                <td className="border-b border-gray-200 text-xs text-gray-400">
                                <div className="max-w-[200px]  break-words">
                                    Street 232, SH-202-855 Road, Business Bay
                                </div>
                                </td>               
                               <td className="px-6 py-5 border-b border-gray-200 text-xs ">7788994455</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs ">r@gmail.com</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs ">UAE</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs ">ABHUDHABI</td>
                             
                              <td className="px-6 py-5 border-b border-gray-200 text-xs">
                               <span className="bg-green-200 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>ACTIVE</span>
                               </td> 
                             
      
                                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                      <button
                                      type="button"
                                      className=" text-white font-bold text-xs  rounded-lg"
                                      style={{
                                          width: '120px',
                                          padding: '5px',
                                          backgroundColor: '#696BE4',
                                          height:'35px'
                                      }}                              
                                      onClick={()=>setEditModal(true)}
                                      >
                                      Edit
                                      </button>
              
                                      <button
                                      className=" text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '120px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                                          height:'35px'
                                      }}
                                      onClick={()=>document.getElementById('my_modal_8').showModal()}
      
                                      >
                                      Delete 
                                      </button>
                                      <Link to="/dashboard/branch/branchwiseemployee">
                                      <button
                                      className=" text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '120px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                                          height:'35px'
                                      }}
      
                                      >
                                  View Employees                                     
                                   </button></Link>
                                  </div>
                                  </td>
                             </tr>
                           
                            
                           
                             
                             
                            
                            
                             
                             
                             
                             
                            
                          
                         </tbody>
                       </table>
                       
                 
                       {/* Pagination */}
                       <Pagination/>
                 
                       {/* Modal */}
      
      
                       <dialog id="my_modal_8" className="modal">
      
      
                       <div className="modal-box text-center py-8 px-6 bg-white text-gray-700 rounded-xl relative font-[Open_Sans]
                          w-[90vw] h-[50vh]             /* base (mobile) */
                          sm:w-[70vw] sm:h-[30vh]       /* ≥ 640px */
                          md:w-[50vw] md:h-[30vh]       /* ≥ 768px */
                          lg:w-[35vw] lg:h-[30vh]       /* ≥ 1024px */
                          xl:w-[30vw] xl:h-[50vh]       /* ≥ 1280px */
                         
                        "
      
                       onClick={()=>document.getElementById('my_modal_8').close()}
                       >
                       
                        {/* Icon */}
                        <div className="flex justify-center mb-4" style={{opacity:'.5'}}>
                          <div className="text-orange-400 text-6xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth=".7"
                              stroke="currentColor"
                              className="w-30 h-30"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM12 3.75c4.556 0 8.25 3.694 8.25 8.25s-3.694 8.25-8.25 8.25S3.75 16.556 3.75 12 7.444 3.75 12 3.75z" />
                            </svg>
                          </div>
                        </div>
      
                        {/* Title & Message */}
                        <h3 className="text-lg font-semibold text-gray-500 " style={{margin:'20px'}}>Are you sure?</h3>
                        <p className="text-sm text-gray-500 " style={{margin:'20px'}}>You won't be able to revert this!</p>
      
                        {/* Actions */}
                        <div className="flex justify-center gap-4">
                          <button
                            className="btn border-none text-xs bg-red-500 font-bold text-white hover:bg-red-600 px-6"
                            onClick={() => document.getElementById('my_modal_cancel').showModal()}
                            style={{width:'100px'}}
                          >
                            No, cancel!
                          </button>
                          <button
                            className="btn border-none text-xs bg-green-500 font-bold text-white hover:bg-green-600 px-6"
                            onClick={() => {
                              document.getElementById('my_modal_8').close();
                            }}
                            style={{width:'100px'}}
                          >
                            Yes, delete it!
                          </button>
                        </div>
                      </div>
                    </dialog>
      
      
                  <dialog id="my_modal_cancel" className="modal">
                  <div className="modal-box text-center bg-white py-10 px-8 relative font-[Open Sans] w-[90vw] h-[50vh]             /* base (mobile) */
                          sm:w-[70vw] sm:h-[30vh]       /* ≥ 640px */
                          md:w-[50vw] md:h-[30vh]       /* ≥ 768px */
                          lg:w-[35vw] lg:h-[30vh]       /* ≥ 1024px */
                          xl:w-[30vw] xl:h-[50vh]       /* ≥ 1280px */ "
                      onClick={() => {
                      document.getElementById('my_modal_cancel').close();
                      }}>
                      <div className="flex justify-center mb-4" style={{opacity:'.5'}}>
                      <div className="text-blue-400 text-6xl">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth=".7"
                          stroke="currentColor"
                          className="w-30 h-30"
                          >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM12 3.75c4.556 0 8.25 3.694 8.25 8.25s-3.694 8.25-8.25 8.25S3.75 16.556 3.75 12 7.444 3.75 12 3.75z" />
                          </svg>
                      </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-500 " style={{margin:'20px'}}>Cancelled</h3>
                      <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Branch is safe</p>
                      <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
                  </div>
                  </dialog>
                      </div>
      
                      {modal && (
                                <div className="fixed text-black inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[550px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                        >
                                         Create New Branch                        </h3>
                                    <hr className="my-4 border-gray-200" />
      
                                    <div className="flex flex-col flex-grow text-gray-600 gap-2 justify-center items-center"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                      Branch Name :<span className="text-red-500 font-bold ml-1">*</span>                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-sm focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Branch Code<span className="text-red-500 font-bold ml-1">*</span>                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-sm focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Location/City:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                                                                style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Address:
                                      </label>

                                      <textarea className="textarea w-[100%] border-gray-200 bg-white rounded-sm focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                           style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                      ></textarea>


                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Phone:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Email:
                                      </label>
                                      <input type="email" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Country:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                          style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       State / Province:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                          style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[100%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] border-gray-200 bg-white focus:outline-none text-gray-400 rounded-sm focus:border-b-2 focus:border-blue-500" 
                                               
                                                value={formData.status}
                                                name=''
                                                onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                               >
                                            <button
                                                type="button"
                                                className="w-[120px] h-[35px] font-bold text-xs rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className=" w-[120px] h-[35px] rounded-lg text-white  font-bold text-xs border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}      
      
      
                      {editModal &&  (
                             <div className="fixed text-black inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[550px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                        >
                                         Edit Branch                        </h3>
                                    <hr className="my-4 border-gray-200" />
      
                                    <div className="flex flex-col flex-grow text-gray-600 gap-2 justify-center items-center"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                      Branch Name :<span className="text-red-500 font-bold ml-1">*</span>                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-sm focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Branch Code<span className="text-red-500 font-bold ml-1">*</span>                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-sm focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Location/City:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                                                                style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Address:
                                      </label>

                                      <textarea className="textarea w-[100%] border-gray-200 bg-white rounded-sm focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                           style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                      ></textarea>


                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Phone:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Email:
                                      </label>
                                      <input type="email" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Country:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                          style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                       <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       State / Province:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-sm border-gray-200 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                          style={{paddingLeft:'12px'}}

                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[100%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] border-gray-200 bg-white focus:outline-none text-gray-400 rounded-sm focus:border-b-2 focus:border-blue-500" 
                                               
                                                value={formData.status}
                                                name=''
                                                onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                               >
                                            <button
                                                type="button"
                                                className="w-[120px] h-[35px] font-bold text-xs rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className=" w-[120px] h-[35px] rounded-lg text-white  font-bold text-xs border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}
      
                         
                    </>)
     }
     
     export default Branches;