import { useState } from "react"
import Default from "../../../assets/images/stock-CfGxyh0i.jpg"

const ItemDetails = () => {
    const [addMore, setAddMore] = useState(false)
    const [addmoreThird, setAddmoreThird] = useState(false)
    const [addmoreFourth, setAddmoreFourth] = useState(false)
     const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
    

  const [count,setCount] = useState(1)
  const [rows, setRows] = useState([{ id: 1, type: 'Main' }]);

   const addRow = () => {
    setCount(prev => prev + 1);
    setRows(prev => [
      ...prev,
      { id: Date.now() }
    ]);
  };

  const removeRow = (id) => {
    if (rows.length > 1) { // Prevent removing all rows
      setCount(prev => prev - 1);
      setRows(prev => prev.filter(row => row.id !== id));
    }
  };
    
    return (
        <div className="w-full h-[90%] bg-white rounded-lg overflow-y-auto rounded-lg flex flex-col gap-4" style={{padding:'20px'}}>
            <div className="border text-gray-600 border-gray-300 rounded-lg flex gap-4 relative" style={{padding:'20px'}}>
                <h3 className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-semibold text-sm">Tag Information</h3>
                <div className="overflow-x-auto">
                <div className="flex flex-row gap-10 items-center">
                <div className="flex flex-col">
                    <label className="text-blue-600 font-semibold text-[11px] ">
                        Supplier Ref no :
                    </label>
                    <input 
                        type="text" 
                        className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-blue-600 font-semibold text-[11px]">
                        Tagging Line
                    </label>
                    <input 
                        type="text" 
                        className="border w-[200px] rounded-sm h-[30px] bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="text-blue-600 font-semibold text-[11px] mb-1 sm:mb-0 sm:w-48">
                        Consider Mark Up
                    </label>
                    <select
                        className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 focus:outline-none focus:border-blue-500"
                        name="consider_markup"
                    >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="w-[100px] h-[120px] mx-auto border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center overflow-hidden">
          <img
            src={preview || Default}
            alt="Preview"
            className="w-[100px] h-[120px] object-contain"
          />
           <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        </div>
       
                <div>
                    {/* <button className=" w-[70px] h-[35px] rounded-lg bg-[#7B62E4] text-white" onClick={() => setAddMore(true)}>Add+</button> */}
                </div>
                </div>
                </div>
            </div>

          
                <div className="border w-full rounded-lg border-gray-300 relative" style={{padding:'20px'}}>
                <h3 className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-semibold text-sm">Tag Specification and Weight Detials</h3>
                <div className="overflow-x-auto ">
                    <div className="flex flex-row gap-10 items-center">
                    <div className="flex flex-col ">
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            UOM:
                        </label>
                        <select
                            className="border text-xs w-[200px]  text-gray-500  h-[30px] rounded-sm bg-white border-gray-400 px-3 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes">PCS</option>
                            <option value="no">PCS</option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[12px] mb-1">
                            Category:
                        </label>
                         <select
                            className="border text-xs w-[200px] text-gray-500 rounded-sm bg-white border-gray-400 h-[30px]   focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes">DIAMOND JEWELLERY</option>
                            <option value="no">PCS</option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[11px] ">
                            Design:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            weight</label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                         <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Design:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                     <div className="flex flex-col">
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Jewellery Type:
                        </label>
                        <select
                            className="border text-xs w-[200px] text-gray-500 bg-gray-500 h-[30px] px-3 py-2 rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes">DIAMOND NOSE PIN</option>
                            <option value="no"></option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                           Sub Category:
                        </label>
                        <select
                            className="border text-xs w-[200px] text-gray-500 bg-gray-500 h-[30px] px-3 py-2 rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Design Group:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                           Pearl weight</label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                         <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Other Store Weight:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    
                     <div className="flex flex-col">
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Brand:
                        </label>
                         <select
                            className="border w-[200px] text-gray-500  h-[30px]  rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Occasion:
                        </label>
                         <select
                            className="border w-[200px] text-gray-500  h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Made in:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                          Ruby  weight</label>
                        <select
                            className="border w-[200px] text-gray-500  h-[30px] rounded-sm bg-white border-gray-400 px-3 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                         <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Size:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                     <div className="flex flex-col">
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Style:
                        </label>
                       <select
                            className="border w-[200px] text-gray-500  h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                         
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Gender:
                        </label>
                        <select
                            className="border w-[200px] text-gray-500 bg-gray-500 h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                            name="consider_markup"
                        >
                            <option value="yes"></option>
                            <option value="no"></option>
                        </select>
                         
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                           Metal Color:
                        </label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        <label className="text-blue-600 font-semibold text-[11px] mb-1">
                            Emerald Weight</label>
                        <input 
                            type="text" 
                            className="border w-[200px] h-[30px] rounded-xs rounded-sm bg-white border-gray-400 focus:outline-none focus:border-blue-500"
                        />
                         
                    </div>

                    
                    </div>
                    
              </div>
                </div>
            

  <div className="border border-gray-300 min-h-[200px] rounded-lg relative" style={{ padding: '20px' }}>
    <h3 className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-semibold text-sm">
      Diamond Break Up
    </h3>
  <div className="overflow-auto  ">
  <div className="w-[1000px] h-[150px] mt-6">
   <table className="w-full text-sm  text-left border-separate border-spacing-x-2 border-spacing-y-1 min-w-[1400px]" >
        <thead className="bg-gray-200 text-blue-500 font-semibold">
          <tr>
            <th className=" px-4 bg-blue-100 py-2 text-center align-middle" style={{width:'200px'}}></th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>Carat</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>PCS</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>Clarity</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>Cut</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>color</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>Cert.No</th>
            <th className="border px-4 py-2 text-center align-middle" style={{width:'200px'}}>Item</th>
          </tr>
        </thead>
       {rows.map((row) => (
            <tbody key={row.id} className="bg-white border border-gray-200">
              <tr>
                <td className="bg-blue-100 flex justify-end text-blue-600 font-semibold">
                  
                </td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300"></td>
                <td className="px-4 py-2 border border-gray-300">
                  <button 
                    onClick={addRow}
                    className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center"
                  >
                    +
                  </button>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.type !== 'Main' && (
                    <button 
                      onClick={() => removeRow(row.id)}
                      className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center"
                    >
                      -
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
       
        
       
        <tbody className="bg-white border border-gray-200">
          <tr>
            <td className=" bg-blue-100 flex justify-end text-blue-600 font-semibold"> Total</td>
            <td className=" px-4 py-2 border border-gray-300 h-[0px]"></td>
            <td className=" px-4 py-2 border border-gray-300"></td>
            
            
          </tr>
        </tbody>
      </table>
    </div>
    </div>

   
  </div>



          
                <div className="flex flex-row gap-4 border border-gray-300 rounded-lg min-h-[200px] items-center justify-between relative" style={{padding:'20px'}}>
                    <h3 className="absolute -top-3 left-4 bg-white px-2 text-blue-700 font-semibold text-sm">Tag Specification and Weight Details</h3>

                    
  {/* Column 1 */}
  <div className="flex flex-col">
    <label className="text-blue-600 font-semibold text-[12px] mb-1">
      Cost Price :
    </label>
    <input 
      type="number" 
      className="border w-full h-[30px] rounded-sm  bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
    />
    <label className="text-blue-600 font-semibold text-[12px] mb-1">
      Additional Charge :
    </label>
    <input 
      type="number" 
      className="border w-full h-[30px] rounded-sm bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Column 2 */}
  <div className="flex flex-col">
    <label className="text-blue-600 font-semibold text-[11px] mb-1">
      Max Discount:
    </label>
    <input 
      type="number" 
      className="border w-full rounded-sm h-[30px] bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
    />
    <label className="text-blue-600 font-semibold text-[11px] mb-1">
      Mark up:
    </label>
    <input 
      type="number" 
      className="border w-full rounded-sm h-[30px] bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Column 3 */}
  <div className="flex flex-col">
    <label className="text-blue-600 font-semibold text-[11px] mb-1 sm:mb-0 sm:w-48">
     Tag Price
    </label>
    <input 
      type="number" 
      className="border w-full rounded-sm h-[30px] bg-white border-gray-400 px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>

  {/* Column 4 (Button) */}
  <div className="flex flex-col gap-2">
    <button className="border border-gray-600 w-[70px] h-[35px] rounded-lg bg-red-500 text-white" onClick={() => setAddmoreFourth(false)}>-</button>
  </div>
</div>

          
        </div>
    ) 
}

export default ItemDetails