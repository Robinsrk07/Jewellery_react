




const CreateGoldPurchase = () => {
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
            <label className="text-xs font-bold  text-[#344767]">Item Type</label>
            <select className="select select-bordered select-sm w-full bg-gray-200 text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
                 <option>&nbsp;&nbsp;&nbsp;&nbsp;GOLD</option>
             </select>
            </div>
        
          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Document Currency</label>
          <select className="select select-bordered select-sm w-full bg-gray-200 text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
                 <option>&nbsp;&nbsp;&nbsp;&nbsp;USD</option>
             </select>
          </div>
          {/* item type */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Terms Of Payment</label>
          <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;Item Type</option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;test</option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;test</option>
          </select>
          </div>
          {/* uom */}
          <div className="w-[90%]">
            <label className="text-xs font-bold text-[#344767]">Date</label>
            <input
                type="date"
                className="input input-bordered input-sm w-full text-gray-500 rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        [&::-webkit-calendar-picker-indicator]:opacity-50"
                placeholder="Select date"
            />
            </div>

            <div className="w-[90%]">
            <label className="text-xs font-bold  text-[#344767]">Supplier</label>
            <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
            <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;Item Type</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;GOLD SUPPLIER DUBAI</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;test Supplier</option>
            </select>
            </div>

            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Reference Number</label>
                <input
                type="text"
                placeholder="    Type here"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
            <div className="w-[90%]">
            <label className="text-xs font-bold  text-[#344767]">Stock Point</label>
            <select className="select select-bordered select-sm w-full  text-gray-500  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
            <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp; stock point</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;Reserved Stock</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;Low Stock Alert</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;Warehouse Stock</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;In-Store Stock</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;Transit Stock</option>
            </select>
            </div>
            <div className="w-[90%]">
            <label className="text-xs font-bold  text-[#344767]">Buyer</label>
            <select className="select select-bordered select-sm w-full  text-gray-500  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
            <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp; Buyer</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;test</option>
                <option>&nbsp;&nbsp;&nbsp;&nbsp;test</option>
                
            </select>
            </div>
            <div className="w-[90%] text-gray-900">
            <label className="text-xs font-bold text-[#344767]">Currency</label>
            <input
                type="number"
                className="input input-bordered input-sm w-full text-gray-900 rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        [&::-webkit-calendar-picker-indicator]:opacity-50"
                placeholder="$1.00000@3.6725000"
            />
            </div>
  
        </div>
        {/* ---------------------------------------------------- */}

        <div className="flex justify-center items-center h-[50px]">
        <hr className="w-[90%] border-gray-300" />
        </div>   

        {/* ---------------------------------------------------- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7" style={{padding: '2vw'}}>
            {/* code */}
           
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Purchase Type</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option>&nbsp;&nbsp;&nbsp;&nbsp;HEDGE</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;NO HEDGE</option>
             </select>
           </div>

           <div className="w-[90%]">
  <label className="text-xs font-bold text-[#344767]">Items</label>
  <select className="select select-bordered select-sm w-full text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
    {/* Default placeholder option (disabled and selected by default) */}
    <option disabled selected className="text-gray-300">
      &nbsp;&nbsp;&nbsp;&nbsp;Select an item
    </option>
    
    {/* Regular options */}
    <option>&nbsp;&nbsp;&nbsp;&nbsp;BRD-NKL-22K-001</option>
    <option>&nbsp;&nbsp;&nbsp;&nbsp;EVD-PND-18K-002</option>
    <option>&nbsp;&nbsp;&nbsp;&nbsp;LUX-RNG-14K-003</option>
    <option>&nbsp;&nbsp;&nbsp;&nbsp;GOLD-BAR-001</option>
  </select>
</div>

            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Design</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Filigri design</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Halo Design</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Floral Design</option>
             </select>
           </div>

            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Brand</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Tanishq</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;cartier</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Harry Wintston</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Made in</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;India</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;United Arab Emirates</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Size</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Ring Size</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Bangle Size</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Necklace length</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Style</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Traditional</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Modern/Minimalist</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Vintage/Antique</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Occasion</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Wedding </option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Anniversery</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Festivals</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Metal Color</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Wedding </option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Anniversery</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Festivals</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Gender</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Wedding </option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Anniversery</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Festivals</option>
             </select>
           </div>
            <div className="w-[90%]">
             <label className="text-xs font-bold  text-[#344767]">Stone Type</label>
             <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
               <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;-------</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Wedding </option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Anniversery</option>
               <option>&nbsp;&nbsp;&nbsp;&nbsp;Festivals</option>
             </select>
           </div>

            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Making Rate</label>
                <input
                type="number"
                min="0"
                placeholder="    Making rate"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Stone Rate</label>
                <input
                type="number"
                min="0"
                placeholder="    Stone rate"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Multi Stone Rate</label>
                <input
                type="number"
                min="0"
                placeholder="    Multi stone rate"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>

            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Stone Weight</label>
                <input
                type="number"
                min="0"
                placeholder="   Stone weight"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]"> Multi Stone Weight</label>
                <input
                type="number"
                min="0"
                placeholder=" Multi Stone weight"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>

            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Gross Weight </label>
                <input
                type="number"
                min="0"
                placeholder=" Gross Weight"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>

            <div className="w-[90%] ">
            <label className="text-xs font-bold  text-[#344767]">Discount</label>
                <input
                type="number"
                min="0"
                placeholder=" Discount"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
        
          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Tagline 1</label>
            <input
              type="text"
              placeholder="    Tagline 1"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Tagline 2</label>
            <input
              type="text"
              placeholder="    Tagline 2"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Tagline 3</label>
            <input
              type="text"
              placeholder="    Tagline 3"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Tagline 4</label>
            <input
              type="text"
              placeholder="    Tagline 4"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Tag Defenition</label>
            <input
              type="text"
              placeholder="    Tag Defenition"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Alias</label>
            <input
              type="text"
              placeholder="    Alias "
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          {/* item type */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Status</label>
          <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;Item Type</option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
          </select>
          </div>
          {/* uom */}
          <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Address</label>
        <textarea className="textarea textarea-gray rounded-lg " placeholder="    Address"></textarea>   
       </div>

        
  
        </div>
        <div className="flex  w-full h-[20vh]  mt-4 justify-center text-white items-center" >  {/* Container div */}
            <button className="btn text-white text-xs bg-blue-700  w-full  sm:w-1/4 md:w-[10vw] rounded-lg">
              Save
            </button>
            <button className="btn text-white text-xs  bg-blue-700  w-full  sm:w-1/4 md:w-[15vw] rounded-lg">
              Save & Continue Adding
            </button>
         </div>
      </div>
    );
  };
  
  export default CreateGoldPurchase



