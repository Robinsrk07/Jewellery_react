
    
    
     import { useState } from "react";
     import { Link } from "react-router";
     const  Item = () => {
     
          
      const  [isHovered, setIsHovered] = useState(false);
                   const [items, setItems] = useState(10);
                 
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
                              <Link to="/dashboard/inventory/createItem">
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
                        >
                          Create New Item
                        </button>
                      </Link>
                          </div>
                 
                       <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
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
                 
                       
                 
                       <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[1200px]
                       " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-gray-400 uppercase bg-white">
                           <tr>
                             <th className="px-6 py-3" style={{paddingLeft:'20px' ,width:'150px'}} >SL NO</th>
                             <th className="px-6 py-3 " style={{width:'150px'}} >CODE </th>
                             <th className="px-6 py-3 "  style={{width:'150px'}}>UNIQUE ID</th>
                             <th className="px-6 py-3   " style={{width:'150px'}} >NAME</th>
                             <th className="px-6 py-3 "  style={{width:'150px'}}>ITEM TYPE</th>
                             <th className="px-6 py-3 " style={{width:'150px'}} >UOM</th>
                             <th className="px-6 py-3 "  style={{width:'150px'}}>CATEGORY</th>
                             <th className="px-6 py-3 "style={{width:'150px'}}  >JEWELLERY TYPE</th>
                             <th className="px-6 py-3 "style={{width:'250px'}}  > MAKING CALCULATION ON</th>
                             <th className="px-6 py-3 "style={{width:'150px'}}  >STATUS</th>
                             <th className="px-6 py-3 "style={{width:'150px'}}  >ACTION</th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">CODE </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">UNIQUE ID </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">NAME </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">ITEM TYPE </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">UOM </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">CATEGORY </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">JEWELLERY TYPE </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">MAKING CALCULATION ON </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">
                               <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>ACTIVE</span>
                               </td> 
      
                                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Link to='/dashboard/inventory/gold/updateitem'>
                                      <button
                                      type="button"
                                      className="btn text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '100px',
                                          padding: '5px',
                                          backgroundColor: '#696BE4',
                                      }}                              
                                      >
                                      Edit
                                      </button></Link>
              
                                      <button
                                      className="btn text-white font-bold text-xs rounded-lg"
                                      style={{
                                          width: '100px',
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
                         <button className="btn rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
                           {'<'}
                         </button>
                         <button className="btn rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
                           1
                         </button>
                         <button className="btn rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
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
      
                     
      
                         
                    </>)
     }
     
     export default Item;