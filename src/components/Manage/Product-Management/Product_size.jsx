import { useState } from "react";

const Product_Size =()=>{

    //state managment
    const  [isHovered, setIsHovered] = useState(false);
     const [items, setItems] = useState(10);
     const [formData, setFormData] = useState({
       code: '',
       hex_code: '',
       name: '',
       color: '',
       description: '',
       status:'',
       action:''
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

  const handleCloseModal =()=>{
    setModal(false)
  }
  const handleEditCloseModal =()=>{
    setEditModal(false)
  }
   
     //validation 
     
     const validate = () => {
       const newErrors = {};
       if (!formData.code.trim()) newErrors.code = 'Please Enter Code';
       if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
       if (!formData.description.trim()) newErrors.description = 'Enter the Description';
       if (!formData.itemType.trim()) newErrors.itemType = 'Please Select Item Type'; // Added this validation
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
         code: '',
         hex_code: '',
         name: '',
         color: '', // Adding this field which was missing in reset
         description: '',
         status: '',
         action: ''
       });
       setErrors({});
       document.getElementById('my_modal_color').close();
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
   <div className="bg-white w-full max-w-6xl h-auto max-h-[65vh] rounded-xl px-4 md:px-8 lg:px-12 mx-auto overflow-auto  custom-scrollbar" style={{ fontFamily: 'Open Sans',overflow:'auto'}}>
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
                                  width: '180px',
                                  height: '40px',
                                  borderRadius: '8px',
                                  backgroundColor: isHovered ? 'rgb(97, 113, 228)' : 'rgb(126, 96, 228)',
                                  color: 'white',
                                  transition: 'background-color 0.3s ease',
                                  cursor: 'pointer',
                              }}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={() =>setModal(true) }
           >
             + New Size
           </button>
         </div>
   
         <div className="text-gray-400" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
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
   
         
   
         <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate',minWidth:'1200px' }}>
           <thead className="text-xs text-gray-400 uppercase bg-white">
             <tr>
               <th className="px-6 py-3" style={{ width: '86px', paddingLeft: '30px' }}>SL NO</th>
               <th className="px-6 py-3" style={{ width: '130px' }}>NAME</th>
               <th className="px-6 py-3" style={{ width: '565px' }}>DESCRIPTION</th>
               <th className="px-6 py-3" style={{ width: '94px' }}>STATUS</th>
               <th className="px-6 py-3" style={{ width: '245px' }}>ACTION</th>
             </tr>
           </thead>
           <tbody>
             
               <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '35px' }}>1</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Ring Size</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Measured in numbers (e.g., US Size 6, 7, 8 or Indian Size 12, 14, 16)</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded" style={{ padding: '4px 6px' }}>
                  ACTIVE
                </span>
              </td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            backgroundColor: '#696BE4',
                             height:'35px'
                        }}
                        onClick={() => setEditModal(true)}
                        >
                        Edit
                        </button>

                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                            height:'35px'
                        }}
                        onClick={() => document.getElementById('my_modal_8').showModal()}
                        >
                        Delete 
                        </button>
                    </div>
                    </td>
               </tr>
               <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '35px' }}>2</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Bangle Size</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Typically measured in diameter (e.g., 2.4, 2.6, 2.8 inches in India).</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded" style={{ padding: '4px 6px' }}>
                  ACTIVE
                </span>
              </td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            backgroundColor: '#696BE4',
                             height:'35px'
                        }}
                        onClick={() => setEditModal(true)}
                        >
                        Edit
                        </button>

                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                             height:'35px'
                        }}
                        onClick={() => document.getElementById('my_modal_8').showModal()}
                        >
                        Delete 
                        </button>
                    </div>
                    </td>
               </tr>
               <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '35px' }}>3</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Necklace Length</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">Measured in inches or cm (e.g., 16-inch choker, 18-inch princess length, 24-inch opera length).</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded" style={{ padding: '4px 6px' }}>
                  ACTIVE
                </span>
              </td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            backgroundColor: '#696BE4',
                             height:'35px'
                        }}
                        onClick={() => setEditModal(true)}
                        >
                        Edit
                        </button>

                        <button
                        className="btn border-none text-white font-bold text-xs rounded-lg"
                        style={{
                            width: '100px',
                            padding: '5px',
                            background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                             height:'35px'
                        }}
                        onClick={() => document.getElementById('my_modal_8').showModal()}
                        >
                        Delete 
                        </button>
                    </div>
                    </td>
               </tr>
            
           </tbody>
         </table>
         
   
         {/* Pagination */}
         <div className="flex gap-1 justify-center" style={{marginBottom:'20px'}}>
           <button className="btn bg-white border-gray-100 rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
             {'<'}
           </button>
           <button className="btn rounded-full border-none w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
             1
           </button>
           <button className="btn  bg-white border-gray-100 rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
             {'>'}
           </button>
         </div>
   
         {/* Modal */}
   
       
        </div>
        <dialog id="my_modal_8" className="modal">
       
       
                        <div className="modal-box text-center py-8 px-6 relative font-[Open_Sans]
                           
                            w-[90vw]   h-[45vh]      /* Mobile: 4:3 ratio */
                            sm:-w-[70vw] sm:h-[35vh]
                            md:w-[50vw] md:h-[35vh]
                            lg:w-[35vw] lg:h-[35vh]
                            xl:w-[30vw] xl:h-[50vh]
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
       
       
         <div className="modal-box text-center py-10 px-8 relative font-[Open Sans]  w-[90vw]   h-[45vh]      /* Mobile: 4:3 ratio */
                            sm:-w-[70vw] sm:h-[35vh]
                            md:w-[50vw] md:h-[35vh]
                            lg:w-[35vw] lg:h-[35vh]
                            xl:w-[30vw] xl:h-[50vh]"
         onClick={() => {
           
             document.getElementById('my_modal_cancel').close();
           
         }}>
           {/* Icon */}
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
       
           {/* Title & Message */}
           <h3 className="text-3xl font-bold text-gray-500 " style={{margin:'20px'}}>Cancelled</h3>
           <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Jewellery Type is safe</p>
           <button className="btn bg-blue-500 w-[50px] rounded-lg" > ok</button>
       
           
         </div>
       </dialog>      
                      
       
                       {modal && (
                           <div className="fixed  text-gray-400 inset-0 bg-black/50 flex items-center justify-center z-50">
                              <div className="bg-white rounded-xl shadow-md w-[90%] h-[85vh]
                                          sm:w-[85vw] sm:h-[100vh] sm:p-6
                                          md:w-[65vw] md:h-[60vh] md:p-8
                                          lg:w-[55vw] lg:h-[95vh] lg:p-10
                                          xl:w-[32vw] xl:h-[85vh] xl:p-12
                                          p-4 sm:p-6 md:p-8 flex flex-col"> 
                                <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                style={{paddingLeft:'20px',
                                paddingTop:"20px"}}>
                                 Create Product Size
                               </h3>
                               <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
       
                               <div className="flex flex-col "> {/* Added this container */}
                                 <label 
                                   style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                   className="font-semibold text-sm text-[#344767] w-[80%]"
                                 >
                                   Name:
                                 </label>
                                 <input type="text" 
                                 placeholder="Type here" 
                                 className="input w-[90%] bg-white  border-gray-300 rounded-lg "
                                 style={{marginLeft:'25px'}}
                             //    value={formData.name}
                             ///    onChange={(e)=>handleChange(e)}
                                 name="name"
                                 />
                                 {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
       
                                 <label 
                                      style={{ paddingLeft:'25px',
                                      marginTop: '20px',
                                      marginBottom:'10px', 
                                      display: 'block' }}
                                      className="font-semibold text-sm text-[#344767] w-[80%]"
                                 >
                                   Description:
                                   </label>
       
       
                                    <textarea className="textarea w-[90%] bg-white  border-gray-300 rounded-lg" 
                                    placeholder="Bio" 
                                    style={{marginLeft:'25px'}}
                              //      value={formData.description}
                              //      onChange={(e)=>handleChange(e)}
                                    name="description"
                                    >
                                    </textarea>
                                    {/* {errors.description && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.description}</span>} */}
       
                                    {/* label */}
                                    <label 
                                    style={{ paddingLeft:'25px', marginTop: '20px',
                                    marginBottom:'10px',
                                    display: 'block' }}
                                    className="font-semibold text-sm text-[#344767] w-[80%]"
                                    >
                                   Status:
                                 </label>
                                  <select defaultValue="select Status"
                                    className="select w-[90%] bg-white  border-gray-300" 
                                    style={{marginLeft:'25px'}}
                               //     value={formData.status}
                                    name='status'
                              //      onChange={(e)=>handleChange(e)}
                                    >
                                  <option disabled={true}>select Status</option>
                                  <option>Active</option>
                                  <option>Inactive</option>
                                  
                                  </select>
                                  {/* {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                  
                                <hr className="my-4 border-gray-300" style={{marginTop:'40px'}}/>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                                      style={{ marginTop:'20px', paddingLeft: '200px'}}>
                                    <button
                                      type="button"
                                      className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                      style={{ backgroundColor: '#8392ab' }}
                                 //     onClick={(e) => handleSubmit(e)}
                                    >
                                      Submit
                                    </button>
                                    <button
                                      type="button"
                                      className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                      style={{ backgroundColor: '#5E72e4' }}
                                      onClick={handleCloseModal}
                                    >
                                      Close
                                    </button>
                              </div>
                               </div>
                             </div>
                           </div>
                         )}
       
                       {editModal &&(
                           <div className="fixed text-gray-300 inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl shadow-md w-[90%] h-[85vh]
                                          sm:w-[85vw] sm:h-[100vh] sm:p-6
                                          md:w-[65vw] md:h-[60vh] md:p-8
                                          lg:w-[55vw] lg:h-[95vh] lg:p-10
                                          xl:w-[32vw] xl:h-[85vh] xl:p-12
                                          p-4 sm:p-6 md:p-8 flex flex-col"> 
                                <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                style={{paddingLeft:'20px',
                                paddingTop:"20px"}}>
                                Edit Product Size
                               </h3>
                               <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
       
                               <div className="flex flex-col "> {/* Added this container */}
                                 <label 
                                   style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                   className="font-semibold text-sm text-[#344767] w-[80%]"
                                 >
                                   Name:
                                 </label>
                                 <input type="text" 
                                 placeholder="Type here" 
                                 className="input bg-white border border-gray-300 w-[90%] rounded-lg "
                                 style={{marginLeft:'25px'}}
                               //  value={formData.name}
                               //  onChange={(e)=>handleChange(e)}
                                 name="name"
                                 />
                                 {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
       
                                 <label 
                                      style={{ paddingLeft:'25px',
                                      marginTop: '20px',
                                      marginBottom:'10px', 
                                      display: 'block' }}
                                      className="font-semibold text-sm text-[#344767] w-[80%]"
                                 >
                                   Description:
                                   </label>
       
       
                                    <textarea className="textarea w-[90%] bg-white border border-gray-300 rounded-lg" 
                                    placeholder="Bio" 
                                    style={{marginLeft:'25px'}}
                               //     value={formData.description}
                                  //  onChange={(e)=>handleChange(e)}
                                    name="description"
                                    >
                                    </textarea>
                                    {/* {errors.description && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.description}</span>} */}
       
                                    {/* label */}
                                    <label 
                                    style={{ paddingLeft:'25px', marginTop: '20px',
                                    marginBottom:'10px',
                                    display: 'block' }}
                                    className="font-semibold text-sm text-[#344767] w-[80%]"
                                    >
                                   Status:
                                 </label>
                                  <select defaultValue="select     Status"
                                    className="select bg-white border border-gray-300 w-[90%]" 
                                    style={{marginLeft:'25px'}}
                                 //   value={formData.status}
                                    name='status'
                                //    onChange={(e)=>handleChange(e)}
                                    >
                                  <option disabled={true}>select Status</option>
                                  <option>Active</option>
                                  <option>Inactive</option>
                                  
                                  </select>
                                  {/* {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                  
                                <hr className="my-4 border-gray-300" style={{marginTop:'40px'}}/>
                                <div className="flex flex-col sm:flex-row justify-center  items-center gap-4" 
                                    style={{ marginTop:'20px' }}>
                                    <button
                                      type="button"
                                      className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                      style={{ backgroundColor: '#8392ab' }}
                                    //  onClick={(e) => handleSubmit(e)}
                                    >
                                      Submit
                                    </button>
                                    <button
                                      type="button"
                                      className="btn  border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                      style={{ backgroundColor: '#5E72e4' }}
                                      onClick={handleEditCloseModal}
                                    >
                                      Close
                                    </button>
                              </div>
                               </div>
                             </div>
                           </div>)}
        </>)
}

export default Product_Size 