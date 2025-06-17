


import { useState } from "react";
import CustomScrollbar from "../../components/CustomScrollbar";
import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import CreateButton from '../../components/CreateButton';
import Pagination from '../../components/Pagination';
import ItemsPerPageSelector from '../../components/ItemsPerPageSelector';

const Group=()=>{

    
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
             };
             const handleEditCloseModal = () => {
               setEditModal(false)
             };
           
           const tableData = [
  {
    id: 1,
    name: "Raw Material Suppliers",
    description: "Suppliers providing gold, diamonds, gemstones, and other materials used in jewellery manufacturing.",
    status: "ACTIVE"
  },
  {
    id: 2,
    name: "Finished Jewellery Suppliers",
    description: "Wholesalers or manufacturers supplying ready-made jewellery pieces for retail sale.",
    status: "ACTIVE"
  },
  {
    id: 3,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 4,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 5,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 6,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 7,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 8,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 9,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 10,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 11,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  },
  {
    id: 12,
    name: "Warehouse Address",
    description: "The location where jewellery stock is stored before being distributed to stores or customers.",
    status: "ACTIVE"
  }
];
           
           
           
             return (
               
           <>
           <CustomScrollbar/>
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
            buttoncontent="+ New Group"
            onClick={() => setModal(true)}  // This will now work!
             />                 
         <ItemsPerPageSelector items={items} setItems={setItems} />
           
                 
           
                 <table className="table w-full text-sm text-left text-gray-500 border-collapse" style={{ borderSpacing: '0 12px', borderCollapse: 'separate', minWidth: '1200px' }}>
                  <thead className="text-xs text-gray-400 uppercase bg-white">
                    <tr>
                      <th className="px-6 py-3" style={{width:'90px',paddingLeft:'20px'}}>SL NO</th>
                      <th className="px-6 py-3" style={{width:'300px'}}>NAME</th>
                      <th className="px-6 py-3" style={{width:'900px'}}>DESCRIPTION</th>
                      <th className="px-6 py-3" style={{width:'90px'}}>STATUS</th>
                      <th className="px-6 py-3" style={{width:'90px'}}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item) => (
                      <tr key={item.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                        <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>{item.id}</td>
                        <td className="px-6 py-5 border-b border-gray-200 text-xs">{item.name}</td>
                        <td className="px-6 py-5 border-b border-gray-200 text-xs">{item.description}</td>
                        <td className="px-6 py-5 border-b border-gray-200 text-xs">
                          <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <EditButton
                            onClick={()=>setEditModal(true)}
                              />
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
                      <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Item Type is safe</p>
                      <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
                  </div>
                  </dialog>
                </div>

                {modal && (
                           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[500px] flex flex-col gap-4 overflow-y-auto" style={{padding:'20px'}}>                                                 
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                       >
                                         Create  Group          </h3>
                                    <hr className=" border-gray-300"/>
      
                                    <div className="flex flex-col flex-grow gap-4"> {/* Added flex-grow */}
                                   
                                      
                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[80%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg focus:outline-none bg-white text-gray-300 border-gray-300 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[100%] bg-white border-gray-300 text-gray-200 rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        style={{paddingLeft:'12px',color: '#374151',}}
                                       // onChange={(e)=>handleChange(e)}
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                                
                                                className="font-semibold text-xs text-[#344767] w-[80%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] bg-white border-gray-300 focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                                style={{paddingLeft:'12px'}}
                                                //value={formData.status}
                                                name=''
                                               // onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600">Select </option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                                >
                                            <button
                                                type="button"
                                                className="btn w-[100px] h-[35px] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                               // onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-[100px] h-[35px]  rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                         )}
       
                       {editModal &&(
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[500px] flex flex-col gap-4 overflow-y-auto" style={{padding:'20px'}}>                                                 
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                       >
                                        Edit   Group      
                                                     </h3>
                                    <hr className=" border-gray-300"/>
      
                                    <div className="flex flex-col flex-grow gap-4"> {/* Added flex-grow */}
                                   
                                      
                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[80%]"
                                      >
                                       Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg focus:outline-none bg-white text-gray-300 border-gray-300 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px'}}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[100%] bg-white border-gray-300 text-gray-300 rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        style={{paddingLeft:'12px',color: '#374151',}}
                                       // onChange={(e)=>handleChange(e)}
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                                
                                                className="font-semibold text-xs text-[#344767] w-[80%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] bg-white border-gray-300 focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                                style={{paddingLeft:'12px'}}
                                                //value={formData.status}
                                                name=''
                                               // onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600">Select </option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col sm:flex-row justify-end items-end gap-4  " 
                                                >
                                            <button
                                                type="button"
                                                className="btn w-[100px] h-[35px] rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }}
                                               // onClick={(e) => handleSubmit(e)}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-[100px] h-[35px]  rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#5E72e4' }}
                                                onClick={handleEditCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                        </div>)}

                   
              </>)
              }

export default  Group