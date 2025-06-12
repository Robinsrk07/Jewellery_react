import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold







 
     
     const  List_item_Type = () => {
     
          
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
                    mx-auto overflow-auto  custom-scrollbar  "
                 style={{ fontFamily: 'Open Sans',overflow:'auto'}}
                   >
                                  <div
                              style={{
                              position: 'sticky',
                              left: 0,
                              top: 0,
                              zIndex: 10,
                              backgroundColor: 'white',
                              padding: '1.5rem',
                              boxSizing: 'border-box',
                              display: 'flex',
                              justifyContent: 'flex-end',
                              width: 'fit-content', // Changed from 100%
                              minWidth: '100%' // Ensures it matches table width
                              }}
                          >
                             <button
                              className="text-xs font-bold"
                              style={{
                                width: '160px',
                                height: '35px',
                                borderRadius: '8px',
                                background: isHovered
                                  ? 'linear-gradient(to right, #6170E4, #7F60E4)'
                                  : 'linear-gradient(to right, #7F60E4, #6170E4)',
                                color: 'white',
                                transition: 'background 0.3s ease',
                                cursor: 'pointer',
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              onClick={() => setModal(true)}
                            >
                              + New Item Type
                            </button>

                                  </div>
                 
                       <div className='text-gray-600' style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
                         <p className="text-xs font-semibold" style={{ marginLeft: '5px' }}>Items per page: {items}</p>
                         <select
                           className="border border-gray-300 rounded-lg w-[114px] h-[35px] px-2"
                           style={{
                             appearance: 'none',
                             WebkitAppearance: 'none',
                             MozAppearance: 'none',
                             backgroundColor: 'white',
                             backgroundImage: 'none',
                             paddingLeft: '5px',
                           }}
                           onChange={(e) => setItems(Number(e.target.value))}
                           value={items}
                         >
                           <option value={10}>10</option>
                           <option value={25}>25</option>
                           <option value={50}>50</option>
                         </select>
                       </div>
                 
                       
                 
                       <table className="table w-full text-sm  text-gray-500 border-collapse min-w-[1200px]  " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-[#A8B2C4] uppercase bg-white">
                           <tr>
                             <th  style={{width:'90px',paddingLeft:'20px'}} >SL NO</th>
                             <th  className='w-[150px] ' >CODE </th>
                             <th  className='w-[150px] ' >NAME </th>
                             <th  className='w-[150px] ' >DESCRIPTION </th>
                             <th  className='w-[150px] ' >STATUS</th>
                             <th className='w-[150px] '  >ACTION</th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white  hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="text-xs border-b border-gray-200 " style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> Gold</td>
                             
                              
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">
                               <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>ACTIVE</span>
                               </td> 
      
                                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                      <button
                                      type="button"
                                      className=" text-white font-bold text-xs  rounded-lg"
                                      style={{
                                          width: '120px',
                                          padding: '5px',
                                                background: 'linear-gradient(to right, #7F60E4,#6170E4)',
                                          height:'35px'
                                      }}                              
                                      onClick={()=>setEditModal(true)}
                                      >
                                      Edit
                                      </button>
              
                                      <button
                                      className=" text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '150px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                                          height:'35px'
                                      }}
                                      onClick={()=>document.getElementById('my_modal_8').showModal()}
      
                                      >
                                      Delete 
                                      </button>
                                  </div>
                                  </td>
                             </tr>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Diamond </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> Diamond </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> Diamond </td>
                             
                              
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">
                               <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>ACTIVE</span>
                               </td> 
      
                                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                      <button
                                      type="button"
                                      className=" text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '120px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #7F60E4,#6170E4)',
                                           height:'35px'

                                      }}                              
                                      onClick={()=>setEditModal(true)}
                                      >
                                      Edit
                                      </button>
              
                                      <button
                                      className=" text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '150px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                                          height:'35px'
                                      }}
                                      onClick={()=>document.getElementById('my_modal_8').showModal()}
      
                                      >
                                      Delete 
                                      </button>
                                  </div>
                                  </td>
                             </tr>
                           
                             
                             
                            
                            
                             
                             
                             
                             
                            
                          
                         </tbody>
                       </table>
                       
                 
                       {/* Pagination */}
                       <div
  className="flex justify-center gap-1 w-full sticky top-0 z-10 bg-white py-6"
>
  <button className="btn border-gray-200 bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
    {'<'}
  </button>
  <button className="btn border-none rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
    1
  </button>
  <button className="btn border-gray-200 bg-white shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
    {'>'}
  </button>
</div>
>
                 
                       {/* Modal */}
      
      
                       <dialog id="my_modal_8" className="modal">
      
      
                       <div className="modal-box text-center py-8 px-6 rounded-xl relative font-[Open_Sans]
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
                        <h3 className="text-lg font-semibold " style={{margin:'20px'}}>Are you sure?</h3>
                        <p className="text-sm text-gray-500 " style={{margin:'20px'}}>You won't be able to revert this!</p>
      
                        {/* Actions */}
                        <div className="flex justify-center gap-4">
                          <button
                            className="btn text-xs bg-red-500 font-bold text-white hover:bg-red-600 px-6"
                            onClick={() => document.getElementById('my_modal_cancel').showModal()}
                            style={{width:'100px'}}
                          >
                            No, cancel!
                          </button>
                          <button
                            className="btn text-xs bg-green-500 font-bold text-white hover:bg-green-600 px-6"
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
                  <div className="modal-box text-center py-10 px-8 relative font-[Open Sans] "
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
                      <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Jewellery Type is safe</p>
                      <button className="btn bg-blue-500 w-[50px] rounded-lg" > ok</button>
                  </div>
                  </dialog>
                      </div>
      
                      {modal && (
                                <div className="fixed text-black inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                   <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[400px] h-[90vh] max-h-[500px] p-6 overflow-auto">

                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767]  "
                                    style={{padding:'20px'}}
                                        >
                                         Create Type                        </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col gap-2 bg-white  items-center flex-grow text-gray-600"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="block font-bold text-xs text-left  w-[90%] text-[#344767] w-[80%]"
                                      >
                                       Code:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] text-gray-300 rounded-lg focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-bold text-xs text-[#344767] w-[90%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg border-gray-300 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                       
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[90%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[90%] border-gray-300 bg-white rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                       
                                        onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[90%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[90%] h-[35px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
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
                                            <div className="flex flex-col h-[10vh] md:flex-row gap-2 items-center justify-center bg-white " 
                                               style={{margin:'10px'}} >
                                            <button
                                                type="button"
                                                className="w-[120px] h-[30px] font-bold text-xs rounded-sm text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className=" w-[120px] h-[30px] font-bold text-xs rounded-sm text-white border-none"
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
                                                                     <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[400px] h-[90vh] max-h-[500px] p-6 overflow-auto">

                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767]  "
                                    style={{padding:'20px'}}
                                        >
                                        Edit Type                        </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col gap-2 bg-white  items-center flex-grow text-gray-600"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="block font-bold text-xs text-left  w-[90%] text-[#344767] w-[80%]"
                                      >
                                       Code:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] text-gray-300 rounded-lg focus:outline-none border-gray-300 bg-white  focus:border-b-2 focus:border-blue-500"
                
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-bold text-xs text-[#344767] w-[90%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg border-gray-300 bg-white focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                       
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      

                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[90%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[90%] border-gray-300 bg-white rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                       
                                        onChange={(e)=>handleChange(e)}
                                        
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[90%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[90%] h-[35px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
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
                                            <div className="flex flex-col h-[10vh] md:flex-row gap-2 items-center justify-center bg-white " 
                                               style={{margin:'10px'}} >
                                            <button
                                                type="button"
                                                className="w-[120px] h-[30px] font-bold text-xs rounded-sm text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className=" w-[120px] h-[30px] font-bold text-xs rounded-sm text-white border-none"
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
     
     export default List_item_Type;