const purchaseFix = () => {
return (
    <div className="w-full h-full m-0 p-0">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full h-16 bg-gray-200">
          <div className="flex items-center justify-center w-1/4 h-full">
            <h1 className="text-xl font-bold">Purchase Fix</h1>
          </div>
          <div className="flex items-center justify-center w-1/4 h-full">
            <h1 className="text-xl font-bold">Supplier</h1>
          </div>
          <div className="flex items-center justify-center w-1/4 h-full">
            <h1 className="text-xl font-bold">Date</h1>
          </div>
          <div className="flex items-center justify-center w-1/4 h-full">
            <h1 className="text-xl font-bold">Total Amount</h1>
          </div>
        </div>
        {/* Add your content here */}
      </div>
    </div>
  );
}   

export default purchaseFix;