const EditSupplier = () => {
  return (
    <div 
      className="bg-white w-full
        max-w-[99vw] 
        xl:max-w-[90vw] 
        2xl:max-w-[95vw] 
        h-auto max-h-[85vh] 
        min-h-[80vh]
        rounded-xl px-4 md:px-8 lg:px-12
        mx-auto overflow-auto custom-scrollbar "
      style={{ fontFamily: 'Open Sans' }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7  justify-center items-center" style={{padding:'20px'}}>

        <div className="w-[90%] ">
        <label className="text-xs font-bold  text-[#344767]">Code</label>
          <input
            type="text"
            placeholder="Type here"
            className="input bg-white text-gray-400 input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300"/>
        </div>
      
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input  bg-white text-gray-400 input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
        
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Currency</label>
        <select className="select  bg-white text-gray-400 select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option>&nbsp;&nbsp;&nbsp;&nbsp;USD</option>
          <option>&nbsp;&nbsp;&nbsp;&nbsp;AED</option>
        </select>
        </div>
        
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Controll Account</label>
        <select className="select  bg-white text-gray-400select-bordered select-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Accounts Payable Controll Account</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suppiler Advance Controll Account</option>
        </select>
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Supplier Group</label>
        <select className="select  bg-white text-gray-400 select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Accounts Payable Controll Account</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suppiler Advance Controll Account</option>
        </select>
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Tax Category</label>
        <select className="select  bg-white text-gray-400 select-bordered select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp; Accounts Payable Controll Account</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suppiler Advance Controll Account</option>
        </select>
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Tax in no</label>

          <input
            type="text"
            placeholder="      Tax Identification Number"
            className="input  bg-white text-gray-400 input-bordered input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div> 
        

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Tin no</label>

          <input
            type="text"
            placeholder="     TIN number"
            className="input input-bordered  bg-white text-gray-400 input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Terms Of Payment</label>
        <select className="select select-bordered  bg-white text-gray-400 select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;  ooption 1</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;option 2</option>
        </select>
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">EUN </label>
          <input
            type="text"
            placeholder="    EUN"
            className="input input-bordered  bg-white text-gray-400 input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Tin no</label>
        <input type="file" className="file-input  bg-white text-gray-400 file-input-bordered file-input-sm w-full " />
        </div>


        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Adress Type</label>
        <select className="select select-bordered  bg-white text-gray-400 select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Billing Address</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shippiing Address</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warehouse Address</option>
        </select>
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Address</label>
        <textarea className="textarea  bg-white text-gray-400 border border-gray-200 textarea-gray rounded-lg " placeholder="    Address"></textarea>   
       </div>

       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Language</label>
        <select className="select select-bordered bg-white text-gray-400 select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arabic</option>
        </select>
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Country</label>
        <select className="select select-bordered bg-white text-gray-400 select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arabic</option>
        </select>
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> City</label>
        <select className="select select-bordered bg-white text-gray-400 select-sm w-full  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arabic</option>
        </select>
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Zip Code </label>
          <input
            type="text"
            placeholder="    Zip Code"
            className="input input-bordered bg-white text-gray-400 input-sm w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">GSM NUMBER </label>
          <input
            type="text"
            placeholder="    GSM NUMBER"
            className="input input-bordered input-sm bg-white text-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Phone no </label>
          <input
            type="text"
            placeholder="    Phone no"
            className="input input-bordered input-sm bg-white text-gray-400 w-full rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>

        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Fax no </label>
          <input
            type="text"
            placeholder="   Fax no"
            className="input input-bordered input-sm w-full bg-white text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Email </label>
          <input
            type="text"
            placeholder="   Email"
            className="input input-bordered input-sm w-full bg-white text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Website</label>
          <input
            type="text"
            placeholder="  Website"
            className="input input-bordered input-sm w-full bg-white text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Note</label>
        <textarea className="textarea textarea-gray rounded-lg bg-white text-gray-400  focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" placeholder="   Note"></textarea>   
       </div>

       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Bank Name</label>
          <input
            type="text"
            placeholder="  Bank Name"
            className="input input-bordered input-sm w-full bg-white text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Bank Address</label>
          <input
            type="text"
            placeholder="  Bank Address"
            className="input input-bordered input-sm w-full bg-white text-gray-400 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Account Holder Name</label>
          <input
            type="text"
            placeholder="   Account Holder Name"
            className="input input-bordered input-sm w-full rounded-lg bg-white text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Account number</label>
          <input
            type="text"
            placeholder="  Account number"
            className="input input-bordered input-sm w-full rounded-lg bg-white text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">Account Code</label>
          <input
            type="text"
            placeholder="  Account Code"
            className="input input-bordered input-sm w-full rounded-lg bg-white text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
       <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">I ban</label>
          <input
            type="text"
            placeholder="  International Bank Account Number"
            className="input input-bordered input-sm w-full rounded-lg bg-white text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300" />
        </div>
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]"> Status</label>
        <select className="select select-bordered select-sm w-full bg-white text-gray-400  rounded-lg focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300">
        <option disabled selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</option>
          <option className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
          <option  className="text-sm text-gray-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
        </select>
        </div>

         

      </div>
      <div className="flex  w-full h-[20vh] justify-end items-end   " style={{padding:'80px'}} >  {/* Container div */}
          <button className="btn border-none bg-blue-700  w-[100px] rounded-lg">
            Save
          </button>
       </div>
     
    </div>
  );
};

export default EditSupplier