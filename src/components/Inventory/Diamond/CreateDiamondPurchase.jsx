



  
    

       


const CreateDiamondPurchase = () => {
    return (
      <div 
        className="bg-white w-full
          max-w-[99vw] 
          xl:max-w-[90vw] 
          2xl:max-w-[95vw] 
          h-auto max-h-[85vh] 
          min-h-[80vh]
          rounded-xl px-4 md:px-8 lg:px-12
          mx-auto overflow-auto custom-scrollbar text-gray-500"
        style={{ fontFamily: 'Open Sans' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7" style={{padding: '2vw'}}>
            {/* code */}
            
        
          
          {/* item type */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Item Type</label>
          <select className="select select-bordered select-sm w-full bg-white  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;Item Type</option>
            <option defaultValue>&nbsp;&nbsp;&nbsp;&nbsp;DIAMOND</option>
          </select>
          </div>
          

         <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Default Tax</label>
          <select className="select select-bordered bg-white select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Default Input Tax</option>
            
          </select>
          </div>


  
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">HSN no </label>
            <input
              type="text"
              placeholder="    Code"
              className="input input-bordered bg-white input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Status</label>
          <select className="select select-bordered bg-white select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
          </select>
          </div>
   {/* --------------- */}
         

          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Stock  Point</label>
                <input
                type="number"
                min="0"
                placeholder="stock point"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Description</label>
                <input
                type="number"
                min="0"
                placeholder="description"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">No of Pieces</label>
                <input
                type="number"
                min="0"
                placeholder="no of piece"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Total Amount</label>
                <input
                type="number"
                min="0"
                placeholder="total amount"
                className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none bg-white focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
         
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]"> mark up</label>
                <input
                type="number"
                min="0"
                placeholder="total amount"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
            <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Buyer</label>
          <select className="select select-bordered bg-white select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;buyer 1 </option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;buyer 2</option>
          </select>
          </div>
             <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]"> prefix</label>
                <input
                type="number"
                min="0"
                placeholder="total amount"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
             <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]"> Id length</label>
                <input
                type="number"
                min="0"
                placeholder="total amount"
                className="input input-bordered bg-white input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
           




          
   {/* --------------- */}
          
  
        </div>
        <div className="flex  w-full h-[20vh]  mt-4 justify-end items-center" >  {/* Container div */}
            <button className="btn border-none bg-[#666DE4] text-white font-semibold   w-full  sm:w-1/4 md:w-[10vw] rounded-lg">
              Save
            </button>
         </div>
      </div>
    );
  };
  
  export default CreateDiamondPurchase



