const CreateSupplier = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        <div className="w-[90%] ">
        <label className="text-xs font-bold  text-[#344767]">code</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full"
          />
        </div>
        
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">code</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full"
          />
        </div>
        
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">code</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full"
          />
        </div>
        
        <div className="w-[90%]">
        <label className="text-xs font-bold  text-[#344767]">code</label>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateSupplier;