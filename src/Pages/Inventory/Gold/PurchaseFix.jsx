
const purchaseFix = () => {
  return (
    <div 
      className="bg-white w-full
        max-w-[99vw] 
        xl:max-w-[90vw] 
        2xl:max-w-[95vw] 
        h-auto max-h-[85vh] 
        min-h-[80vh]
        rounded-xl px-4 md:px-8 lg:px-12
        mx-auto overflow-auto custom-scrollbar"
      style={{ fontFamily: 'Open Sans' }}
    >

      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7" style={{padding: '2vw'}}>
          {/* code */}
         
          <div className="w-[90%] ">
          <label className="text-xs font-bold  text-[#344767]"> Supplier</label>
          <select className="select bg-white select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option disabled>&nbsp;&nbsp;&nbsp;&nbsp;select supplier</option>
               <option >&nbsp;&nbsp;&nbsp;&nbsp;GOLD SUPPLIER </option>
               <option >&nbsp;&nbsp;&nbsp;&nbsp;TEST SUPPLIER</option>
           </select>
          </div>
          <div className="w-[90%]">
          <label className="text-xs font-bold text-[#344767]">Balance Gold Weight</label>
          <input
              type="text"
              className="input  input-bordered bg-gray-200 input-sm w-full text-gray-500 rounded-lg 
                      focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                      [&::-webkit-calendar-picker-indicator]:opacity-50"
              placeholder=""
          />
          </div>

      
        <div className="w-[90%]">
          {/* name */}
        <label className="text-xs font-bold  text-[#344767]">Payment Type</label>
        <select className="select bg-white  select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Cash</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Bank</option>
           </select>
        </div>
        {/* item type */}
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Selling Unit</label>
        <select className="select bg-white select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option>&nbsp;&nbsp;&nbsp;&nbsp;gram</option>
        </select>
        </div>
        {/* uom */}
        <div className="w-[90%]">
          <label className="text-xs font-bold text-[#344767]">Supplier Currency</label>
          <input
              type="text"
              className="input input-bordered bg-gray-200 input-sm w-full text-gray-500 rounded-lg 
                      focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                      [&::-webkit-calendar-picker-indicator]:opacity-50"
              placeholder=" "
          />
          </div>

        <div className="w-[90%]">
          <label className="text-xs font-bold text-[#344767]">Terms of Payment</label>
          <input
              type="text"
              className="input bg-white  input-bordered  input-sm w-full text-gray-500 rounded-lg 
                      focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                      [&::-webkit-calendar-picker-indicator]:opacity-50"
              placeholder="terms of payment "
              style={{paddingLeft:'12px'}}
          />
          </div>
        <div className="w-[90%]">
          <label className="text-xs font-bold text-[#344767]">Settelment Weight</label>
          <input
              type="text"
              className="input input-bordered  bg-white  input-sm w-full text-gray-500 rounded-lg 
                      focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                      [&::-webkit-calendar-picker-indicator]:opacity-50"
              placeholder="Settelment Weight "
              style={{paddingLeft:'12px'}}
          />
          </div>
          <div className="w-[90%]">
      <label className="text-xs font-bold  text-[#344767]">Notes</label>
      <textarea className="textarea bg-white border-gray-300 textarea-gray rounded-lg " placeholder="    notes"></textarea>   
     </div>
     <div className="w-[90%]">
          <label className="text-xs font-bold text-[#344767]">Terms of Payment</label>
          <input
              type="text"
              className="input bg-white input-bordered  input-sm w-full text-gray-500 rounded-lg 
                      focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                      [&::-webkit-calendar-picker-indicator]:opacity-50"
              placeholder="  Terms of Payment"
          />
          </div>
          

      </div>
      {/* ---------------------------------------------------- */}

      <div className="flex justify-center items-center h-[50px]">
      <hr className="w-[90%] border-gray-300" />
      </div>   

      {/* ---------------------------------------------------- */}

      
      <div className="flex  w-full h-[20vh]  mt-4 justify-end text-white " style={{paddingRight:'5vw'}} >  {/* Container div */}
          <button className="btn border-none text-white text-xs  bg-blue-700  w-full  sm:w-1/4 md:w-[10vw] rounded-lg">
            Save
          </button>
          
       </div>
   
      <div className="overflow-auto custom-scrollbar" style={{ maxHeight: '50vh', paddingTop:'2vw' }}>
       <table className="table w-full text-sm text-left text-gray-500 border-collapse min-w-[1000px]
                       " style={{ borderSpacing: '0 12px', borderCollapse: 'separate', }}>
                         <thead className="text-xs text-gray-400 uppercase bg-white">
                           <tr>
                             <th className="px-6 py-3" style={{width:'60PX'}} >SL NO</th>
                             <th className="px-6 py-3 " style={{width:'120px'}} >PAYMENT TYPE</th>
                             <th className="px-6 py-3 "  style={{width:'120px'}}>METAL RATE PER GRAM USD</th>
                             <th className="px-6 py-3   " style={{width:'120px'}} >CASH AMOUNT ($)</th>
                             <th className="px-6 py-3 "  style={{width:'120px'}}>NOTES</th>
                             <th className="px-6 py-3 " style={{width:'120px'}} >TERMS OF PAYMENT</th>
                             <th className="px-6 py-3 "  style={{width:'120px'}}>REFERENCE NUMBER</th>
                           </tr>
                         </thead>
                         <tbody>
                           
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> cod </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $1.000 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">60 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">north carolina </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">dgdg </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">0#9999
                               </td> 
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> cod </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $1.000 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">60 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">north carolina </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">dgdg </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">0#9999
                               </td> 
      
                               
                             </tr>
                             <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                               <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'20px'}}>1</td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> cod </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs"> $1.000 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">60 </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">north carolina </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">dgdg </td>
                               <td className="px-6 py-5 border-b border-gray-200 text-xs">0#9999
                               </td> 
      
                               
                             </tr>
                            
                            
                             
                             
                             
                             
                            
                          
                         </tbody>
                       </table>
                       </div>
    </div>
  );
};

export default purchaseFix








