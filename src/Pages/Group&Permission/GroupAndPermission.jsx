
 
     import { useState } from "react";
     import { Link } from "react-router";
     
     const  GroupAndPermission = () => {
     
          
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
                    mx-auto overflow-auto  custom-scrollbar"
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
                                  height: '30px',
                                  borderRadius: '8px',
                                  backgroundColor: isHovered ? 'rgb(97, 113, 228)' : 'rgb(126, 96, 228)',
                                  color: 'white',
                                  transition: 'background-color 0.3s ease',
                                  cursor: 'pointer',
                              }}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                              onClick={() => setModal(true)}
                              >
                              + New Group
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
                 
                       
                 
                       <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[2800px]  " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-gray-400 uppercase bg-white">
                           <tr>
                             <th className="px-6 py-3" style={{width:'90px',paddingLeft:'20px'}} >SL NO</th>
                             <th className="px-6 py-3"  style={{width:'150px'}} >GROUP </th>
                             <th className="px-6 py-3"  >PERMISSIONS </th>
                             <th className="px-6 py-3" style={{width:'250px'}} >ACTION</th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Admin </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">Can add log entry , Can change log entry , Can delete log entry , Can view log entry , Can add permission , Can change permission , Can delete permission , Can view permission , Can add group , Can change group ,
Can delete group , Can view group , Can add content type , Can change content type , Can delete content type , Can view content type , Can add session , Can change session , Can delete session , Can view session ,
Can add Accounts , Can change Accounts , Can delete Accounts , Can view Accounts , Can add Users , Can change Users , Can delete Users , Can view Users , Can add currency , Can change currency ,
Can delete currency , Can view currency , Can add unit of measurement , Can change unit of measurement , Can delete unit of measurement , Can view unit of measurement , Can add terms of payment , Can change terms of payment , Can delete terms of payment , Can view terms of payment ,
Can add tax , Can change tax , Can delete tax , Can view tax , Can add metal rate , Can change metal rate , Can delete metal rate , Can view metal rate , Can add category , Can change category ,
Can delete category , Can view category , Can add sub category , Can change sub category , Can delete sub category , Can view sub category , Can add stone type , Can change stone type , Can delete stone type , Can view stone type ,
Can add stock point , Can change stock point , Can delete stock point , Can view stock point , Can add return type , Can change return type , Can delete return type , Can view return type , Can add product style , Can change product style ,
Can delete product style , Can view product style , Can add product size , Can change product size , Can delete product size , Can view product size , Can add product gender , Can change product gender , Can delete product gender , Can view product gender ,
Can add product design , Can change product design , Can delete product design , Can view product design , Can add occasion , Can change occasion , Can delete occasion , Can view occasion , Can add jewellery type , Can change jewellery type ,
Can delete jewellery type , Can view jewellery type , Can add item type , Can change item type , Can delete item type , Can view item type , Can add diamond type , Can change diamond type , Can delete diamond type , Can view diamond type ,
Can add design , Can change design , Can delete design , Can view design , Can add country , Can change country , Can delete country , Can view country , Can add colors , Can change colors ,
Can delete colors , Can view colors , Can add city , Can change city , Can delete city , Can view city , Can add brand , Can change brand , Can delete brand , Can view brand ,
Can add address type , Can change address type , Can delete address type , Can view address type , Can add control account , Can change control account , Can delete control account , Can view control account , Can add tax category , Can change tax category ,
Can delete tax category , Can view tax category , Can add supplier group , Can change supplier group , Can delete supplier group , Can view supplier group , Can add supplier , Can change supplier , Can delete supplier , Can view supplier ,
Can add department , Can change department , Can delete department , Can view department , Can add gender , Can change gender , Can delete gender , Can view gender , Can add paymentmethod , Can change paymentmethod ,
Can delete paymentmethod , Can view paymentmethod , Can add position , Can change position , Can delete position , Can view position , Can add employee , Can change employee , Can delete employee , Can view employee ,
Can add customers , Can change customers , Can delete customers , Can view customers , Can add gold purchase , Can change gold purchase , Can delete gold purchase , Can view gold purchase , Can add inventory items , Can change inventory items ,
Can delete inventory items , Can view inventory items , Can add purchase master , Can change purchase master , Can delete purchase master , Can view purchase master , Can add purchase fix , Can change purchase fix , Can delete purchase fix , Can view purchase fix ,
Can add main stock , Can change main stock , Can delete main stock , Can view main stock , Can add futures contract , Can change futures contract , Can delete futures contract , Can view futures contract , Can view gold pos ,</td>
                             
                              
                               
      
                                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                      <button
                                      type="button"
                                      className="btn border-none text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '100px',
                                          padding: '5px',
                                          backgroundColor: '#696BE4',
                                      }}                              
                                      onClick={()=>setEditModal(true)}
                                      >
                                      Edit
                                      </button>
                                      <Link to='/dashboard/settings/groupandpermissions/managepermissions'>
                                      <button
                                      type="button"
                                      className="btn border-none text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '200px',
                                          padding: '5px',
                                          backgroundColor: '#696BE4',
                                      }}                              
                                      >
                                      manage permission
                                      </button></Link>
              
                                      <button
                                      className="btn border-none text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '150px',
                                          padding: '5px',
                                          background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
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
                       <div className="flex gap-1 justify-center">
                         <button className="btn rounded-full bg-white shadow-xl border-gray-100 w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
                           {'<'}
                         </button>
                         <button className="btn rounded-full border-none w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
                           1
                         </button>
                         <button className="btn rounded-full bg-white shadow-xl border-gray-100  w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
                           {'>'}
                         </button>
                       </div>
                 
                       {/* Modal */}
      
      
                       <dialog id="my_modal_8" className="modal">
      
      
                       <div className="modal-box text-center py-8 px-6 rounded-xl relative font-[Open_Sans]
                          w-[90vw] h-[50vh]             /* base (mobile) */
                          sm:w-[70vw] sm:h-[30vh]       /* ≥ 640px */
                          md:w-[50vw] md:h-[30vh]       /* ≥ 768px */
                          lg:w-[35vw] lg:h-[30vh]       /* ≥ 1024px */
                          xl:w-[30vw] xl:h-[50vh]       /* ≥ 1280px */
                          2xl:w-[25vw] 2xl:h-[20vh]     /* ≥ 1536px */
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
                                <div className="fixed inset-0 text-black  border-gray-400  bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[90vh] max-h-[300px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767]"
                                        >
                                         Create UOM                          </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col flex-grow gap-3"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Group:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] text-xs rounded-lg bg-white border-gray-300 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                     


            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                                >
                                            <button
                                                type="button"
                                                className="btn border-none w-[100px] h-[33px] rounded-lg text-white"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn border-none w-[100px] h-[33px] rounded-lg text-white"
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
                                 <div className="fixed inset-0 text-black  border-gray-400  bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[90vh] max-h-[300px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767]"
                                        >
                                        Edit UOM                          </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col flex-grow gap-3"> {/* Added flex-grow */}
                                   
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Group:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] text-xs rounded-lg bg-white border-gray-300 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                     


            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                                >
                                            <button
                                                type="button"
                                                className="btn border-none w-[100px] h-[33px] rounded-lg text-white"
                                                style={{ backgroundColor: '#8392ab' }}
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn border-none w-[100px] h-[33px] rounded-lg text-white"
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
     
     export default GroupAndPermission;

