


const CreateItem = () => {
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
            <label className="text-xs font-bold  text-[#344767]">Code</label>
                <input
                type="text"
                required
                placeholder="    Type here"
                className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
            </div>
        
          <div className="w-[90%]">
            {/* name */}
          <label className="text-xs font-bold  text-[#344767]">Name</label>
            <input
              type="text"
              required
              placeholder="    Type here"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>
          {/* item type */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Item Type</label>
          <select className="select select-bordered select-sm w-full  text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option  className="text-gray-300" disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;Item Type</option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;GOLD</option>
            <option>&nbsp;&nbsp;&nbsp;&nbsp;DIAMOND</option>
          </select>
          </div>
          {/* uom */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">UOM</label>
          <select className="select select-bordered select-sm w-full text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option className="text-gray-300" disabled  selected >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select UOM</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Gram</option>
          </select>
          </div>
  
          {/* category */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Category</label>
          <select className="select select-bordered select-sm w-full text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Category</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Luxuary& Designer Wear</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Every Day Wear</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bridal Jewellery</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gold</option>
          </select>
          </div>
    
         {/* sub Category */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Sub  Category</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -------- </option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;  Wedding Sets</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mangal Suthra</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mangal Suthra</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Matha patti &  Maang Tikka</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stud EarRings</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Simple Chain & Pedants</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bangle & Bracelets</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Statement Necklaces</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coacktail Rings</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Designer Cuffs & Bracelets</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bar</option>
          </select>
          </div>
              {/* jewellery type */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Jewellery Type</label>
          <select className="select select-bordered select-sm w-full text-gray-600  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; select jewellery type </option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Necklaces</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ear Rings</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gold Bar</option>
           
          </select>
          </div>
                  {/* brand */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Brand</label>
          <select className="select select-bordered select-sm w-full text-gray-600  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; select jewellery type </option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Thanisq</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cartier</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Harry Wintston</option>
           
          </select>
          </div>
  
  
          {/* --------------- */}
  
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Making Calculation On</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Gross Weight</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Net Weight</option>
          </select>
          </div>
      {/* --------------- */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Is Scrap Item</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No</option>
          </select>
          </div>
  {/* --------------- */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Is Serialized</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; No</option>
          </select>
          </div>
  
          
  
  
         
   {/* --------------- */}
  
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Is Gift Item</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No</option>
          </select>
          </div>

 {/* --------------- */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Return as</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full Exchange</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exchange</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store Credit</option>
          </select>
          </div>
  
           {/* --------------- */}
  
         <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Is Repair Item</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yes</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No</option>
          </select>
          </div>

 {/* --------------- */}
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Item Image</label>
        <input type="file" className="file-input file-input-bordered file-input-sm w-full " />
        </div>
 {/* --------------- */}

         <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Default Tax</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Default Input Tax</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gold- default-Input-Tax:1.000000% -output_tax:1.00000%</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gold- Making-Input-Tax:1.000000% -output_tax:1.00000%</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gold- Stone-Input-Tax:1.000000% -output_tax:1.00000%</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diamond- default-Input-Tax:1.000000% -output_tax:1.00000%</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diamond- Making-Input-Tax:1.000000% -output_tax:1.00000%</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diamond- Stone-Input-Tax:1.000000% -output_tax:1.00000%</option>
          </select>
          </div>


   {/* --------------- */}
         <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Made in</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-----------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;United Arab Emirates </option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; India</option>
           
          </select>
          </div>
  
           {/* --------------- */}
  
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Making buffer value</label>
                <input
            type="number"
            min="0"
            placeholder="Making buffer value"
            className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>

             {/* --------------- */}
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Stone buffer value</label>
                <input
                type="number"
                min="0"
                placeholder="Stone buffer value"
                className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
 {/* --------------- */}
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Stone Sale Markup</label>
                <input
                type="number"
                min="0"
                placeholder="Stone Sale Markup"
                className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
 {/* --------------- */}
          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Making Sale Markup</label>
                <input
                type="number"
                min="0"
                placeholder="Making Sale Markup"
                className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>
 {/* --------------- */}
            <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Buffer Consider Type</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Consider</option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not Consider</option>

          </select>
          </div>
   {/* --------------- */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">HSN no </label>
            <input
              type="text"
              placeholder="    Code"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]"> Status</label>
          <select className="select select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
          <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
            <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
            <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
          </select>
          </div>
   {/* --------------- */}
          <div className="w-[90%]">
          <label className="text-xs font-bold  text-[#344767]">Pre Fix</label>
            <input
              type="text"
              placeholder="    Prefix"
              className="input input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
          </div>

          <div className="w-[90%]">
                <label className="text-xs font-bold text-[#344767]">Id length</label>
                <input
                type="number"
                min="0"
                placeholder="     Id length"
                className="input input-bordered input-sm w-full rounded-lg 
                        focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300
                        appearance-auto"
            />
            </div>




          
   {/* --------------- */}
          
  
        </div>
        <div className="flex  w-full h-[20vh]  mt-4 justify-center items-center" >  {/* Container div */}
            <button className="btn bg-blue-700  w-full  sm:w-1/4 md:w-[10vw] rounded-lg">
              Save
            </button>
         </div>
      </div>
    );
  };
  
  export default CreateItem



