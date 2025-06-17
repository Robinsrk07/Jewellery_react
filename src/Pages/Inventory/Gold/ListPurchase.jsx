
   
    
    
     import { useState } from "react";
import { Link } from "react-router";
import CustomScrollbar from "../../../components/CustomScrollbar";
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import CreateButton from '../../../components/CreateButton';
import Pagination from '../../../components/Pagination';
import ItemsPerPageSelector from '../../../components/ItemsPerPageSelector';
     
     const  ListPurchase = () => {
     
          
      const  [isHovered, setIsHovered] = useState(false);
                   const [items, setItems] = useState(10);
                   const [formData, setFormData] = useState({
                     name: '',
                     email:'',
                     status:'',
                     phone:'',
                     address:'',
                     gender:''
                   });
                   const [errors, setErrors] = useState({});
                    // handle change 
                 
                       const handleChange = (e) => {
                         const { name, value } = e.target;
                         setFormData((prev) => ({ ...prev, [name]: value }));
                         setErrors((prev) => ({ ...prev, [name]: '' })); 
                       };
      
                   
                 
                   //validation 
                   
                   const validate = () => {
                     const newErrors = {};
                     if (!formData.gender.trim()) newErrors.gender = 'Please Enter Name';
                     if (!formData.phone.trim()) newErrors.phone = 'Please Enter Name';
                     if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
                     if (!formData.address.trim()) newErrors.address = 'Please Enter Name';
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
                      email:'',
                      status:'',
                      phone:'',
                      address:'',
                      gender:''
                     });
                     setErrors({});
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
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            width: '100%'
                        }}
                        >
                     <div className=" w-1/2" style={{    justifyContent: 'space-between', 
                         display: 'flex',
}}>
                                <div className="w-[90%] bg-white">
                                <select className="select select-bordered select-sm w-[90%] bg-white text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
                                <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;Tanishq</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;cartier</option>
                                <option>&nbsp;&nbsp;&nbsp;&nbsp;Harry Wintston</option>
                                </select>
                            </div>

                            <button
                            className="text-xs font-bold"
                            style={{
                                width: '100px',
                                height: '30px',
                                borderRadius: '8px',
                                backgroundColor: isHovered ? 'rgb(97, 113, 228)' : 'rgb(126, 96, 228)',
                                color: 'white',
                                transition: 'background-color 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                                Search
                            </button>
                        </div>

                        <div style={{ width: 'fit-content' }}>
                            <Link to='/dashboard/inventory/gold/purchaseFix'>
                            <button
                            className="text-xs font-bold"
                            style={{
                                width: '20vw',
                                height: '30px',
                                borderRadius: '8px',
                                backgroundColor: isHovered ? 'rgb(97, 113, 228)' : 'rgb(126, 96, 228)',
                                color: 'white',
                                transition: 'background-color 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            Create New Purchase Fix
                            </button></Link>
                        </div>
                        </div>
                 
                      <ItemsPerPageSelector items={items} setItems={setItems} />
                 
                       
                 
                       <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[1000px]
                       " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-gray-400 uppercase bg-white">
                           <tr>
                             <th className="px-6 py-3" style={{paddingLeft:'20px'}} >SL NO</th>
                             <th className="px-6 py-3 "  >PAYMENT TYPE </th>
                             <th className="px-6 py-3 "  >SETTLED WEIGHT </th>
                             <th className="px-6 py-3   "  >UOM USED</th>
                             <th className="px-6 py-3 "  >METAL RATE(USD)</th>
                             <th className="px-6 py-3 "  >NOTES</th>
                             <th className="px-6 py-3 "  >REFERENCE NUMBER</th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>2</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>3</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>4</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>5</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>6</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>7</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>8</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>9</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">COD</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">1 GRAM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">USED </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $ 23 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NEED TO CLRIFY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">#000737 </td>
                               
      
                               
                             </tr>
                            
                            
                             
                             
                             
                             
                            
                          
                         </tbody>
                       </table>
                       
                 
                       {/* Pagination */}
                      <Pagination/>
                 
                       {/* Modal */}
      
      
                      
                      </div>
      
                     
      
                         
                    </>)
     }
     
     export default ListPurchase;