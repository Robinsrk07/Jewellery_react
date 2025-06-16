import { useState } from "react";

import EditButton from '../../../components/EditButton';
import DeleteButton from '../../../components/DeleteButton';
import CreateButton from '../../../components/CreateButton';
import Pagination from '../../../components/Pagination';
import ItemsPerPageSelector from '../../../components/ItemsPerPageSelector';

const Color = ()=>{

  // state's for data
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  
 
  const [modal, setModal] = useState(false)   
  const [editModal,setEditModal]= useState(false)

  const handleCloseModal =()=>{
    setModal(false)
  }
  const handleEditCloseModal =()=>{
    setEditModal(false)
  }

  const data = [
    {
      id: 1,
      code: "Sas",
      hexCode: "#ff0000",
      name: "Red",
      description: "Primary red color",
      status: "Active"
    },
    {
      id: 2,
      code: "Sbs",
      hexCode: "#00ff00",
      name: "Green",
      description: "Primary green color",
      status: "Active"
    },
    {
      id: 3,
      code: "Scs",
      hexCode: "#0000ff",
      name: "Blue",
      description: "Primary blue color",
      status: "Inactive"
    }
  ];

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
<div className="bg-white w-full text-gray-500 max-w-6xl h-auto max-h-[65vh] rounded-xl px-4 md:px-8 lg:px-12 mx-auto overflow-auto  custom-scrollbar" style={{ fontFamily: 'Open Sans',overflow:'auto'}}>
           <CreateButton
            buttoncontent="+ New Color"
            onClick={() => setModal(true)}  // This will now work!
             />                 
            <ItemsPerPageSelector items={items} setItems={setItems} />

      

      

              <table className="table w-full text-sm text-left text-gray-500" 
              style={{ borderSpacing: '0 12px', borderCollapse: 'separate', minWidth: '1200px' }}>
              <thead className="text-xs text-gray-400 uppercase bg-white">
                <tr>
                  <th style={{ width: '70px', paddingLeft: '20px' }}>SL NO</th>
                  <th style={{ width: '100px' }}>CODE</th>
                  <th style={{ width: '70px' }}>HEX CODE</th>
                  <th style={{ width: '80px' }}>NAME</th>
                  <th style={{ width: '100px' }}>COLOR</th>
                  <th style={{ width: '150px' }}>DESCRIPTION</th>
                  <th style={{ width: '100px' }}>STATUS</th>
                  <th style={{ width: '140px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                    <td className="border-b border-gray-200 text-xs" style={{ paddingLeft: '40px' }}>{item.id}</td>
                    <td className="border-b border-gray-200 text-xs">{item.code}</td>
                    <td className="border-b border-gray-200 text-xs">{item.hexCode}</td>
                    <td className="border-b border-gray-200 text-xs">{item.name}</td>
                    <td className="border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                      <div 
                        style={{ 
                          width: '20px', 
                          height: '20px', 
                          backgroundColor: item.hexCode, 
                          borderRadius: '4px',
                          display: 'inline-block'
                        }}
                      ></div>
                    </td>
                    <td className="border-b border-gray-200">{item.description}</td>
                    <td className="border-b border-gray-200">
                      <span 
                        className={`font-bold text-[10px] rounded`} 
                        style={{ 
                          padding: '4px 6px',
                          backgroundColor: item.status === "Active" ? '#DCFCE7' : '#FEE2E2',
                          color: item.status === "Active" ? '#166534' : '#991B1B'
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="border-b border-gray-200 text-blue-600">
                    <div className="flex flex-row  gap-2"> <EditButton
                onClick={()=>setEditModal(true)}
                  />

                  <DeleteButton 
                    buttonText="Delete color" 
                      modalId="my_modal_8" 
                  /></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> 
            

     <Pagination/>

  {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
               <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[650px] flex flex-col gap-3 overflow-y-auto" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                    >
                    Create Color                        </h3>
                    <hr className="my-4 border-gray-300" />
      
                    <div className="flex flex-col gap-2 flex-grow"> {/* Added flex-grow */}
                                   
                    <label 
                      
                        className="font-semibold text-xs text-[#344767] w-[100%]"
                         >
                          Name:
                          </label>
                          <input type="text" 
                            placeholder="Type here" 
                            className="input input-sm w-[100%] border-gray-300 bg-white rounded-lg focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                            name=""
                            style={{paddingLeft:'12px',
                            color: '#374151'                            }}
                          />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Code:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input input-sm w-[100%] rounded-lg border-gray-300 bg-white focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px',
                                        color: '#374151'  }}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Hex code:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] border-gray-300 text-xs bg-white rounded-lg focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px',
                                        color: '#374151'  }}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label className="font-semibold text-xs text-[#344767] w-[100%]">
                                              Color:
                                            </label>
                                            <div className="flex items-center gap-2 w-full">
                                              <input 
                                                type="color"
                                                className="h-5 w-full cursor-pointer rounded border border-gray-300"
                                                // onChange={(e) => handleChange(e)}
                                                name="color"
                                                value="#ff0000" // Set your default color here
                                              />
                                              
                                            </div>
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[100%] text-xs  border-gray-300 bg-white rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        
                                        //onChange={(e)=>handleChange(e)}
                                        style={{padding:'12px',
                                        color: '#374151'  }}
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[100%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                               
                                                //value={formData.status}
                                                name=''
                                              //  onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col gap-2 sm:flex-row justify-end items-end " 
                                                >
                                            <button
                                                type="button"
                                                className="btn w-[100px] rounded-lg text-white border-none"
                                               
                                                 style={{ backgroundColor: '#5E72e4' }}

                                               // onClick={(e) => handleSubmit(e)}
                                            >
                                                Create
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-[100px]  rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }} 
                                                 onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}      
      
      
                      {editModal &&  (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                  <div className="bg-white rounded-xl shadow-md w-[90vw] max-w-[500px] h-[95vh] max-h-[650px] flex flex-col gap-3 overflow-y-auto" style={{padding:'20px'}}> 
                  
                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                    >
                   Edit Color                        </h3>
                    <hr className="my-4 border-gray-300" />
      
                    <div className="flex flex-col gap-2 flex-grow"> 
                                   
                    <label 
                      
                        className="font-semibold text-xs text-[#344767] w-[100%]"
                         >
                          Name:
                          </label>
                          <input type="text" 
                            placeholder="Type here" 
                            className="input input-sm w-[100%] border-gray-300 bg-white rounded-lg focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                            name=""
                            style={{paddingLeft:'12px',
                            color: '#374151'                            }}
                          />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Code:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input input-sm w-[100%] rounded-lg border-gray-300 bg-white focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px',
                                        color: '#374151'  }}
                                        name=""
                                      />
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Hex code:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] border-gray-300 text-xs bg-white rounded-lg focus:outline-none bg-gray-100 focus:border-b-2 focus:border-blue-500"                                       
                                        style={{paddingLeft:'12px',
                                        color: '#374151'  }}
                                        //onChange={(e)=>handleChange(e)}
                                        name=""
                                      />
                                      <label className="font-semibold text-xs text-[#344767] w-[100%]">
                                              Color:
                                            </label>
                                            <div className="flex items-center gap-2 w-full">
                                              <input 
                                                type="color"
                                                className="h-5 w-full cursor-pointer rounded border border-gray-300"
                                                // onChange={(e) => handleChange(e)}
                                                name="color"
                                                value="#ff0000" // Set your default color here
                                              />
                                              
                                            </div>
                                      

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Description:
                                      </label>

                                      <textarea className="textarea w-[100%] text-xs  border-gray-300 bg-white rounded-lg focus:outline-none  focus:border-b-2 focus:border-blue-500" 
                                        placeholder="Description" 
                                        
                                        //onChange={(e)=>handleChange(e)}
                                        style={{padding:'12px',
                                        color: '#374151'  }}
                                        name=""
                                      ></textarea>
                            
                                           
                                            <label 
                                               
                                                className="font-semibold text-xs text-[#344767] w-[100%]"
                                            >
                                                Status:
                                            </label>
                                            <select defaultValue=""
                                                className="select w-[100%] h-[35px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                                               
                                                //value={formData.status}
                                                name=''
                                              //  onChange={(e)=>handleChange(e)}
                                            >
                                                <option className=" text-gray-600"></option>
                                                <option className=" text-gray-600"> Active</option>
                                                <option className=" text-gray-600"> InActive</option>
                                            </select>
            
                                            </div> 
                                            {/* Button container positioned 10px above bottom */}
                                            <div className="flex flex-col gap-2 sm:flex-row justify-end items-end " 
                                                >
                                            <button
                                                type="button"
                                                className="btn w-[100px] rounded-lg text-white border-none"
                                               
                                                 style={{ backgroundColor: '#5E72e4' }}

                                               // onClick={(e) => handleSubmit(e)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                type="button"
                                                className="btn w-[100px]  rounded-lg text-white border-none"
                                                style={{ backgroundColor: '#8392ab' }} 
                                                 onClick={handleEditCloseModal}
                                            >
                                                Close
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                )}

                   <dialog id="my_modal_8" className="modal">
   
   
                    <div className="modal-box bg-white text-center py-8 px-6 relative font-[Open_Sans]
                       w-[90vw] h-[50vh]             /* base (mobile) */
                       sm:w-[70vw] sm:h-[50vh]       /* ≥ 640px */
                       md:w-[50vw] md:h-[40vh]       /* ≥ 768px */
                       lg:w-[35vw] lg:h-[50vh]       /* ≥ 1024px */
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
                         className="btn text-xs border-none bg-red-500 font-bold text-white hover:bg-red-600 px-6"
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
   
   
          <div className="modal-box text-center bg-white py-10 px-8 relative font-[Open Sans] w-[90vw] h-[50vh]             /* base (mobile) */
                       sm:w-[70vw] sm:h-[50vh]       /* ≥ 640px */
                       md:w-[50vw] md:h-[50vh]       /* ≥ 768px */
                       lg:w-[35vw] lg:h-[50vh]       /* ≥ 1024px */
                       xl:w-[30vw] xl:h-[50vh]       /* ≥ 1280px */ "
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
                  <button className="btn bg-blue-500 w-[50px] border-none rounded-lg" > ok</button>
              </div>
      </dialog>

                              
      
     </div>
     </>
    
  );
}

export default Color