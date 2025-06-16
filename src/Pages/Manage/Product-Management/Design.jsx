import { useState } from "react";
import CustomScrollbar from "../../../components/CustomScrollbar";
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import CreateButton from '../../../components/CreateButton';
import Pagination from '../../../components/Pagination';
import ItemsPerPageSelector from '../../../components/ItemsPerPageSelector';
const Design= ()=>{
    
const designs = [
    {
      id: 1,
      name: "Filigree Design",
      description: "Delicate and intricate metalwork, often seen in vintage and traditional jewellery.",
      status: "ACTIVE"
    },
    {
      id: 2,
      name: "Halo Design",
      description: "A central gemstone surrounded by smaller stones, commonly used in engagement rings.",
      status: "ACTIVE"
    },
    {
      id: 3,
      name: "Floral Design",
      description: "Inspired by nature, featuring floral patterns in rings, necklaces, and earrings.",
      status: "ACTIVE"
    }
  ];                    const [items, setItems] = useState(10);
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
                  
                  
                  
                  
                  
                    return (
                      
                  <>
                  <CustomScrollbar/>
                 <div className="bg-white w-full
                  max-w-[95vw] 
                  xl:max-w-[90vw] 
                  2xl:max-w-[95vw] 
                  h-auto max-h-[70vh] 
                  rounded-xl px-4 md:px-8 lg:px-12
                  mx-auto overflow-auto  custom-scrollbar"
                  style={{ fontFamily: 'Open Sans',overflow:'auto'}}
             >
                   <CreateButton
                    buttoncontent="+ New Design"
                    onClick={() => setModal(true)}  // This will now work!
                    />                 
                  <ItemsPerPageSelector items={items} setItems={setItems} />

                  
                        
                  
                        
                  
                        <table className="w-full text-sm text-left text-gray-500 border-collapse overflow-x-auto"
                style={{ borderSpacing: '0 12px', borderCollapse: 'separate', minWidth: '1200px' }}>
                <thead className="text-xs text-gray-400 uppercase bg-white">
                  <tr>
                    <th className="px-6 py-3" style={{ width: '70px', paddingLeft: '20px' }}>SL NO</th>
                    <th className="px-6 py-3" style={{ width: '130px' }}>NAME</th>
                    <th className="px-6 py-3" style={{ width: '500px' }}>DESCRIPTION</th>
                    <th className="px-6 py-3" style={{ width: '90px' }}>STATUS</th>
                    <th className="px-6 py-3" style={{ width: '90px' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {designs.map((design) => (
                    <tr key={design.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                      <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '20px' }}>
                        {design.id}
                      </td>
                      <td className="px-6 py-5 border-b border-gray-200 text-xs">{design.name}</td>
                      <td className="px-6 py-5 border-b border-gray-200 text-xs">{design.description}</td>
                      <td className="px-6 py-5 border-b border-gray-200">
                        <span 
                          className="bg-green-200 text-green-800 font-bold text-[8px] rounded" 
                          style={{ padding: '4px 6px' }}
                        >
                          {design.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                         <EditButton
                         onClick={()=>setEditModal(true)}
                         />
                          <DeleteButton 
                           buttonText="Delete" 
                           modalId="my_modal_8" 
                           />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                        
                  
                        {/* Pagination */}
                        <Pagination/>
                  
                        {/* Modal */}
       
       
                        <dialog id="my_modal_8" className="modal">
       
       
                        <div className="modal-box bg-white text-center py-8 px-6 relative font-[Open_Sans]
                           
                            max-w-[90vw] aspect-[3/3]      /* Mobile: 4:3 ratio */
                            sm:max-w-[70vw] sm:aspect-[3/3] 
                            md:max-w-[50vw] md:aspect-[16/12]
                            lg:max-w-[35vw] lg:aspect-[1/1]
                            xl:max-w-[30vw] xl:aspect-[4/3]
                            2xl:max-w-[25vw] 2xl:aspect-[21/9]
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
                             className="btn text-xs border-none bg-green-500 font-bold text-white hover:bg-green-600 px-6"
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
       
       
         <div className="modal-box bg-white text-center py-10 px-8 relative font-[Open Sans]  max-w-[90vw] aspect-[3/3]      /* Mobile: 4:3 ratio */
                            sm:max-w-[70vw] sm:aspect-[3/3] 
                            md:max-w-[50vw] md:aspect-[16/12]
                            lg:max-w-[35vw] lg:aspect-[1/1]
                            xl:max-w-[30vw] xl:aspect-[4/3]
                            2xl:max-w-[25vw] 2xl:aspect-[21/9] "
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
           <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
       
           
         </div>
       </dialog>      
                       </div>
       
                       {modal && (
                           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[500px] flex flex-col gap-4 overflow-y-auto" style={{padding:'20px'}}>                                                 
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                       >
                                         Create Design                     </h3>
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
                                        Edit Design      
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

export default Design