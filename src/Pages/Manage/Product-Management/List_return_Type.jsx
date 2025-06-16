import { useState } from "react";
import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import CreateButton from '../../../components/CreateButton';
import Pagination from '../../../components/Pagination';
import ItemsPerPageSelector from '../../../components/ItemsPerPageSelector';
const List_return_Type =()=>{
    const [isHovered, setIsHovered] = useState(false);
    const [items, setItems] = useState(10);
     const [modal, setModal] = useState(false)   
    const [editModal,setEditModal]= useState(false)
     const returnPolicies = [
    {
      id: 1,
      name: "Full refund",
      description: "The customer receives a complete refund if the jewellery is returned within the return period (e.g., 7-30 days) and meets the return conditions.",
      status: "ACTIVE"
    },
    {
      id: 2,
      name: "Exchange",
      description: "The customer can exchange the jewellery for another item of equal or higher value, sometimes with an additional payment.",
      status: "ACTIVE"
    },
    {
      id: 3,
      name: "Store Credit",
      description: "Instead of a refund, the customer receives store credit or a gift voucher that can be used for future purchases.",
      status: "ACTIVE"
    }
  ];

  const handleCloseModal =()=>{
    setModal(false)
  }
  const handleEditCloseModal =()=>{
    setEditModal(false)
  }

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
<div className="bg-white text-gray-500 w-full max-w-6xl h-auto max-h-[65vh] rounded-xl px-4 md:px-8 lg:px-12 mx-auto overflow-auto  custom-scrollbar" style={{ fontFamily: 'Open Sans',overflow:'auto'}}>
            <CreateButton
            buttoncontent="+ New Return Type"
            onClick={() => setModal(true)}  // This will now work!
             />

           <ItemsPerPageSelector items={items} setItems={setItems} />

       <table className="table w-full text-sm text-left text-gray-500" 
      style={{ borderSpacing: '0 12px', borderCollapse: 'separate', minWidth: '1300px' }}>
      <thead className="text-xs text-gray-400 uppercase bg-white">
        <tr>
          <th style={{ width: '100px', paddingLeft: '30px' }}>SL NO</th>
          <th style={{ width: '200px' }}>NAME</th>
          <th style={{ width: '2500px' }}>DESCRIPTION</th>
          <th style={{ width: '130px' }}>STATUS</th>
          <th style={{ width: '170px' }}>ACTION</th>
          <th style={{ width: '200px' }}></th>
        </tr>
      </thead>
      <tbody>
        {returnPolicies.map((policy) => (
          <tr key={policy.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
            <td className="border-b border-gray-200 text-xs" style={{ paddingLeft: '40px' }}>{policy.id}</td>
            <td className="border-b border-gray-200 text-xs">{policy.name}</td>
            <td className="border-b border-gray-200 text-xs">{policy.description}</td>
            <td className="border-b border-gray-200">
              <span 
                className="font-bold text-[8px] rounded" 
                style={{ 
                  padding: '4px 6px',
                  backgroundColor: policy.status === "ACTIVE" ? '#DCFCE7' : '#FEE2E2',
                  color: policy.status === "ACTIVE" ? '#166534' : '#991B1B'
                }}
              >
                {policy.status}
              </span>
            </td>
            <td className="border-b border-gray-200 text-blue-600">
              <button 
                className="border-none text-white font-bold text-xs rounded-lg" 
                style={{ width: '100px', height: '35px', padding: '5px', backgroundColor: '#696BE4' }}
                onClick={() => setEditModal(true)}
              >
                Edit
              </button>
            </td>
            <td className="border-b border-gray-200 text-blue-600">
              <DeleteButton 
              buttonText="Delete Type" 
              modalId="my_modal_8" 
             />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

      {/* Pagination */}
           <Pagination/>

      {/* Modal */}

      
    </div>
     <dialog id="my_modal_8" className="modal">
       
       
                        <div className="modal-box text-center bg-white py-8 px-6 relative font-[Open_Sans]
                           
                            max-w-[90vw] aspect-[3/3]      /* Mobile: 4:3 ratio */
                            sm:max-w-[70vw] sm:aspect-[3/3] 
                            md:max-w-[50vw] md:aspect-[16/12]
                            lg:max-w-[35vw] lg:aspect-[1/1]
                            xl:max-w-[30vw] xl:aspect-[4/3]
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
                         <h3 className="text-lg font-semibold  text-gray-500" style={{margin:'20px'}}>Are you sure?</h3>
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
       
       
         <div className="modal-box text-center bg-white py-10 px-8 relative font-[Open Sans] max-w-[90vw] aspect-[3/3]      /* Mobile: 4:3 ratio */
                            sm:max-w-[70vw] sm:aspect-[3/3] 
                            md:max-w-[50vw] md:aspect-[16/12]
                            lg:max-w-[35vw] lg:aspect-[1/1]
                            xl:max-w-[30vw] xl:aspect-[4/3] "
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
           <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your  Type is safe</p>
           <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
       
           
         </div>
       </dialog>      
                      
       
                       {modal && (
                           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[400px] h-[95vh] max-h-[500px] flex flex-col gap-3 overflow-y-auto" style={{padding:'20px'}}>                                                 
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                       >
                                         Create Return Type                       </h3>
                                    <hr className=" border-gray-300"/>
      
                                    <div className="flex flex-col flex-grow gap-2"> {/* Added flex-grow */}
                                   
                                      
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
                                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[400px] h-[95vh] max-h-[500px] flex flex-col gap-3 overflow-y-auto" style={{padding:'20px'}}>                                                 
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                       >
                                        Edit Return Type                       </h3>
                                    <hr className=" border-gray-300"/>
      
                                    <div className="flex flex-col flex-grow gap-2"> {/* Added flex-grow */}
                                   
                                      
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

    
    </>


  );

}
export default List_return_Type