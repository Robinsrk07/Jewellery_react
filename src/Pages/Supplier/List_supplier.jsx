


import { useState } from "react";
import CreateSupplier from "./CreateSupplier";
import { Link } from "react-router-dom";
import '@fontsource/open-sans'; // Default weight 400
import CustomScrollbar from "../../components/CustomScrollbar";
import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import CreateButton from '../../components/CreateButton';
import Pagination from '../../components/Pagination';
import ItemsPerPageSelector from '../../components/ItemsPerPageSelector';
const List_supplier=()=>{

    
const  [isHovered, setIsHovered] = useState(false);
             const [items, setItems] = useState(10);
             const [formData, setFormData] = useState({
               name: '',
               description: '',
               status:'',
             });
             const [errors, setErrors] = useState({});
              // handle change 
           
                 const handleChange = (e) => {
                   const { name, value } = e.target;
                   setFormData((prev) => ({ ...prev, [name]: value }));
                   setErrors((prev) => ({ ...prev, [name]: '' })); 
                 };

              const [editModal,setEditModal]= useState(false)
           

              const supplierData = [
                {
                  id: 1,
                  code: "GOLD_SUPPLIER_DUBAI_001",
                  name: "GOLD_SUPPLIER_DUBAI",
                  currency: "AED",
                  controlAccount: "Raw Material Suppliers",
                  eun: "AE-1234567890",
                  language: "English",
                  country: "United Arab Emirates",
                  city: "None",
                  createdTime: "Feb. 20, 2025, 5:18 a.m.",
                  status: "ACTIVE"
                },
                // Add more supplier objects as needed
                {
                  id: 2,
                  code: "DIAMOND_SUPPLIER_DUBAI_002",
                  name: "DIAMOND_SUPPLIER_DUBAI",
                  currency: "AED",
                  controlAccount: "Raw Material Suppliers",
                  eun: "AE-9876543210",
                  language: "English",
                  country: "United Arab Emirates",
                  city: "Dubai",
                  createdTime: "Mar. 15, 2025, 10:30 a.m.",
                  status: "ACTIVE"
                },
                {
                  id: 3,
                  code: "GEMSTONE_SUPPLIER_ABU_003",
                  name: "GEMSTONE_SUPPLIER_ABU",
                  currency: "AED",
                  controlAccount: "Raw Material Suppliers",
                  eun: "AE-4567891230",
                  language: "Arabic",
                  country: "United Arab Emirates",
                  city: "Abu Dhabi",
                  createdTime: "Jan. 5, 2025, 2:45 p.m.",
                  status: "ACTIVE"
                }
              ];
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
             };
            
             // Handle close modal
             const handleCloseModal = () => {
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
                        width: 'fit-content', 
                        minWidth: '100%' 
                        }}
                    >

                      <Link to="/dashboard/supplier/Create_supplier">
                         <CreateButton
                         buttoncontent=" + Create New Supplier "
             /> 
                      </Link>
                    </div>
           
                 <div className="text-gray-500" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
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
           
                 
           
                 <table 
                    className="table w-full text-sm text-left text-gray-500 border-collapse" 
                    style={{ 
                      borderSpacing: '0 12px', 
                      borderCollapse: 'separate',
                      minWidth: '1200px',
                      tableLayout: 'fixed'
                    }}
                  >
                    <thead className="text-xs text-gray-400 uppercase bg-white">
                      <tr>
                        <th className="px-4 py-3" style={{ paddingLeft: '20px', width: '100px' }}>SL NO</th>
                        <th className="px-4 py-3" style={{ width: '200px' }}>CODE</th>
                        <th className="px-4 py-3" style={{ width: '200px' }}>NAME</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>CURRENCY</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>CONTROLL ACCOUNT</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>EUN</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>LANGUAGE</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>COUNTRY</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>CITY</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>CREATED TIME</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>STATUS</th>
                        <th className="px-4 py-3" style={{ width: '150px' }}>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierData.map((supplier) => (
                        <tr key={supplier.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                          <td className="px-4 py-4 border-b border-gray-200 text-xs" style={{ paddingLeft: '20px' }}>{supplier.id}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.code}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.name}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.currency}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.controlAccount}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.eun}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.language}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.country}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.city}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">{supplier.createdTime}</td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs">
                            <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{ padding: '2px 6px' }}>
                              {supplier.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 border-b border-gray-200 text-xs" style={{ width: '200px', paddingLeft: '10px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                           
                            <Link to="/dashboard/supplier/Create_supplier">
                              <EditButton
                              />
                              </Link>
                               <DeleteButton 
                                buttonText="Delete " 
                                modalId="my_modal_8" 
                                    />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                              
           
                 <Pagination/>
           


                 <dialog id="my_modal_8" className="modal">
                       <div className="modal-box text-center py-8 px-6 rounded-xl bg-white relative font-[Open_Sans]
                          w-[90vw] max-w-[400px] h-[90vh] max-h-[300px]
                         
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
                            className="btn text-xs border-none bg-red-500 font-bold text-white hover:bg-red-600 px-6"
                            onClick={() => document.getElementById('my_modal_cancel').showModal()}
                            style={{width:'100px'}}
                          >
                            No, cancel!
                          </button>
                          <button
                            className="btn text-xs bg-green-500 border-none font-bold text-white hover:bg-green-600 px-6"
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
                  <div className="modal-box text-center bg-white py-10 px-8 w-[90vw] max-w-[400px] h-[90vh] max-h-[300px] relative font-[Open Sans] "
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
                      <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Supplier is safe</p>
                      <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
                  </div>
                  </dialog>
                </div>



                {editModal &&(
                     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                     <div className="bg-white rounded-xl shadow-md w-[90%] h-[95vh]
                                   sm:w-[85vw] sm:h-[75vh] sm:p-6
                                   md:w-[45vw] md:h-[75vh] md:p-8
                                   lg:w-[45vw] lg:h-[75vh] lg:p-10
                                   xl:w-[35vw] xl:h-[85vh] xl:p-12
                                   2xl:w-[25vw] 2xl:h-[30vh] 2xl:p-14
                                   p-4 sm:p-6 md:p-8 flex flex-col"> {/* Added flex-col */}
                       <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                           style={{paddingLeft:'20px', paddingTop:"20px"}}>
                         Edit  Tax Category
                       </h3>
                       <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>

                       <div className="flex flex-col flex-grow"> {/* Added flex-grow */}
                         <label 
                           style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                           className="font-semibold text-sm text-[#344767] w-[80%]"
                         >
                           Name:
                         </label>
                         <input type="text" 
                           placeholder="Type here" 
                           className="input w-[90%] rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500"
                           style={{marginLeft:'25px'}}
                           value={formData.name}
                           onChange={(e)=>handleChange(e)}
                           name="name"
                         />
                         {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>}

                         <label 
                           style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                           className="font-semibold text-sm text-[#344767] w-[80%]"
                         >
                           Description:
                         </label>

                         <textarea className="textarea w-[90%] rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                           placeholder="Bio" 
                           style={{marginLeft:'25px'}}
                           value={formData.description}
                           onChange={(e)=>handleChange(e)}
                           
                           name="description"
                         ></textarea>
                         {errors.description && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.description}</span>}
                         <label 
                           style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                           className="font-semibold text-sm text-[#344767] w-[80%]"
                         >
                           Tax:
                         </label>
                         <input type="text" 
                           placeholder="Type here" 
                           className="input w-[90%] rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500"
                           style={{marginLeft:'25px'}}
                           value={formData.name}
                           onChange={(e)=>handleChange(e)}
                           name="tax"
                         />
                         {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>}
                         <label 
                           style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                           className="font-semibold text-sm text-[#344767] w-[80%]"
                         >
                           Status:
                         </label>
                         <select defaultValue="select Status"
                           className="select w-[90%] focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                           style={{marginLeft:'25px'}}
                           value={formData.status}
                           name='status'
                           onChange={(e)=>handleChange(e)}
                         >
                           <option disabled={true}>select Status</option>
                           <option>Active</option>
                           <option>Inactive</option>
                         </select>
                         {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>}
                       </div> {/* End of flex-grow container */}

                       {/* Button container positioned 10px above bottom */}
                       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                           style={{marginTop: 'auto', marginBottom: '10px', paddingLeft: '200px'}}>
                         <button
                           type="button"
                           className="btn w-2/3 sm:w-[30%] rounded-lg text-white"
                           style={{ backgroundColor: '#8392ab' }}
                           onClick={(e) => handleSubmit(e)}
                         >
                           Submit
                         </button>
                         <button
                           type="button"
                           className="btn w-2/3 sm:w-[30%] rounded-lg text-white"
                           style={{ backgroundColor: '#5E72e4' }}
                           onClick={handleCloseModal}
                         >
                           Close
                         </button>
                       </div>
                     </div>
                   </div>)}

        
              </>)}

export default  List_supplier