import { useState } from "react";
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold

const Category = () => {

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    itemType: '',
    standardPurity: '',
    IsDefault: '',
    status: ''
  });
      const [items,setItems]= useState(0)
    
  const [errors, setErrors] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };
{/* validation*/}
  const validate = () => {
    const newErrors = {};
    if (!formData.code.trim()) newErrors.code = 'Please Enter Code';
    if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
    if (!formData.itemType.trim()) newErrors.itemType = 'Please Select Item Type';
    if (!formData.standardPurity.trim()) newErrors.standardPurity = 'Please Enter Standard Purity';
    if (!formData.IsDefault.trim()) newErrors.IsDefault = 'Please Select Default Status';
    if (!formData.status.trim()) newErrors.status = 'Please Select Status';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setFormData({
      code: '',
      name: '',
      itemType: '',
      standardPurity: '',
      IsDefault: '',
      status: ''
    });
    setErrors({});
    document.getElementById('my_modal_5').close();
  };

  const handleClose = () => {
    document.getElementById('my_modal_5').close();
  };

  return (
    <div
      style={{
        width: '95%',
        height: '95%',
        margin: '1rem',
        marginBottom: '4rem',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        fontFamily:'Open Sans'
      }}
    >
      {/* New Item Button */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1.5rem',
          boxSizing: 'border-box',
        }}
      >
        <button 
      style={{
        width: '100%',
        maxWidth: '180px',
        height: '30px',
        borderRadius: '8px',
        backgroundColor: isHovered
          ? 'rgb(97, 113, 228)'
          : 'rgb(126, 96, 228)',
        color: 'white',
        transition: 'background-color 0.3s ease', 
        cursor: 'pointer',
        fontSize:'13px',
        fontWeight: 400,
    outline: 'none' // ensures no unwanted focus outline
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => document.getElementById('my_modal_5').showModal()}
    >
      + New Category Type
    </button>
      </div>

      <div
        style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingLeft: '5px',
              }}
           >
        <p className='text-xs font-semibold' style={{marginLeft:'5px'}}>Items per page: {items}</p>
        <select
        className='border border-gray-300 rounded-lg w-[114px] h-[35px] px-2'
        style={{
        appearance: 'none',       
        WebkitAppearance: 'none', 
        MozAppearance: 'none',    
        backgroundColor: 'white', 
        backgroundImage: 'none',  
        paddingLeft:'5px'
        }}
        onChange={(e) => setItems(Number(e.target.value))}
        value={items}
        >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
      </div>

      {/* Table Section */}
      

{/* Table Section with Visible Scrollbar */}
<div className="w-full h-full bg-transparent" style={{ flex: 1 }}>
  <div className="bg-white p-6 rounded-lg">
    {/* This container controls scrolling - with explicit scrollbar styling */}
    <div 
      className="w-full" 
      style={{ 
        overflowX: 'scroll',
         // Force scroll instead of auto
        scrollbarWidth: 'thin', // For Firefox
        scrollbarColor: '#CBD5E0 #EDF2F7', // For Firefox
        maxWidth: '100%',
        position: 'relative', // Ensure scrollbar is positioned relative to this container
        paddingTop:'30px'
      }}
    >
      {/* Ensure the scroll track is visible with this style */}
      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
          width: 8px;
          background: #f1f1f1;
          display: block;
        }
        div::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      `}</style>
      
      <table 
        className="table w-full text-sm text-left text-gray-500" 
        style={{ 
          borderSpacing: '0 12px', 
          borderCollapse: 'separate',
          minWidth: '1200px' // This forces horizontal scroll
        }}
      >
        <thead className="text-xs text-gray-400 uppercase bg-white">
          <tr>
            <th className="px-6 py-3" style={{ width: '100px', paddingLeft:'30px' }}>SL NO</th>
            <th className="px-6 py-3" style={{ width: '100px' }}>CODE</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>NAME</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>ITEM TYPE</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>IS DEFAULT</th>
            <th className="px-6 py-3" style={{ width: '100px' }}>STATUS</th>
            <th className="px-6 py-3" style={{ width: '130px' }}>ACTION</th>
            <th className="px-6 py-3" style={{ width: '170px' }}></th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data Rows */}
          {[1, 2, 3].map((item) => (
            <tr key={item} className="bg-white hover:bg-gray-50 h-[44px]">
              <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{paddingLeft:'40px'}}>{item}</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">Bridal Jewellery</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">EveryDay Wear</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">
              <span 
                className="bg-green-200 text-green-800 text-xs font-bold rounded"
                
              >
                yes
              </span>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 ">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded"style={{ padding: '4px 6px' }}>
                  ACTIVE
                </span>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                  <button className="btn  w-1/2 text-white font-bold text-xs rounded-lg"
                   style={{width:'100px',padding:'5px', backgroundColor:'#696BE4'}}
                   onClick={()=>document.getElementById('my_modal_edit').showModal()}
                  >
                    Edit
                 </button>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                 <button className="btn  text-white font-bold text-xs rounded-lg"
                 style={{width:'220px',padding:'5px',    background: 'linear-gradient(to right, #A1B1D1, #697C9B)', }}
                 onClick={()=>document.getElementById('my_modal_delete').showModal()}
                 >
                  Delete Category
                 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



      {/* Modal Dialog */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" style={{ fontFamily: 'Open Sans' }}
      
      onClick={(e) => {
        const modalBox = document.querySelector('#my_modal_5 .modal-box');
        if (modalBox && !modalBox.contains(e.target)) {
          document.getElementById('my_modal_5').close();
        }
      }}
      
      >
          <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
              {/* Modal Header */}
              <div style={{ width: '100%', height: '50px' }}>
                <h3 className="font-bold text-lg text-gray-500 " style={{paddingLeft:'20px',paddingTop:'30px'}}>Create Category</h3>
                <hr className="my-9 border-t-1 border-gray-300 w-full p-9" />
              </div>

              {/* Form Fields */}
              <div style={{ paddingLeft:'20px',paddingTop:'30px', height: '30px',width:'99%' }}>
                <label className="block mb-2 font-semibold text-gray-500 text-xs">Code:</label>
                <input
                  type="text"
                  value={formData.code}
                  name="code"
                  placeholder="code"
                  onChange={handleChange}
                  className="input input-md w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
                />
                {errors.code && <p className="text-red-500 text-sm">{errors.code}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '60px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  className="input input-md w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div style={{paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Item Type</label>
                <select
                  name="itemType"
                  value={formData.itemType}
                  className="select select-bordered w-full focus:outline-none focus:border-b-2 focus:border-blue-800 "
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Item Type</option>
                  <option value="Gold">Gold</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Silver">Silver</option>
                  <option value="Platinum">Platinum</option>
                </select>
                {errors.itemType && <p className="text-red-500 text-sm">{errors.itemType}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Standard Purity:</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={formData.standardPurity}
                  name="standardPurity"
                  placeholder="Standard Purity"
                  onChange={handleChange}
                  className="input input-md w-full appearance-auto [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                {errors.standardPurity && <p className="text-red-500 text-sm">{errors.standardPurity}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%'}}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Is Default</label>
                <select
                  name="IsDefault"
                  value={formData.IsDefault}
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Default Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.IsDefault && <p className="text-red-500 text-sm">{errors.IsDefault}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
              </div>

              {/* Modal Actions */}
              <div className="modal-action" style={{ paddingLeft: '50px',paddingTop:'90px',marginBottom:'30px', height: '30px' }}>
                <button type="submit" className="btn  w-1/6" style={{backgroundColor: '#8392ab'}}>Submit</button>
                <button
                  type="button"
                  className="btn  w-1/6"
                  onClick={handleClose}
                  style={{backgroundColor: '#5E72e4'}}
                >
                  Close
                </button>
              </div>
          </form>
      </dialog>



      <dialog id="my_modal_edit" className="modal modal-bottom sm:modal-middle"
       style={{ fontFamily: 'Open Sans' }}
      
       onClick={(e) => {
         const modalBox = document.querySelector('#my_modal_5 .modal-box');
         if (modalBox && !modalBox.contains(e.target)) {
           document.getElementById('my_modal_edit').close();
         }
       }}
      
      >
          <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
              {/* Modal Header */}
              <div style={{ width: '100%', height: '50px' }}>
                <h3 className="font-bold text-lg text-gray-500 " style={{paddingLeft:'20px',paddingTop:'30px'}}> Edit Category</h3>
                <hr className="my-9 border-t-1 border-gray-300 w-full p-9" />
              </div>

              {/* Form Fields */}
              <div style={{ paddingLeft:'20px',paddingTop:'30px', height: '30px',width:'99%' }}>
                <label className="block mb-2 font-semibold text-gray-500 text-xs">Code:</label>
                <input
                  type="text"
                  value={formData.code}
                  name="code"
                  placeholder="code"
                  onChange={handleChange}
                  className="input input-md w-full"
                />
                {errors.code && <p className="text-red-500 text-sm">{errors.code}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '60px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  className="input input-md w-full"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div style={{paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Item Type</label>
                <select
                  name="itemType"
                  value={formData.itemType}
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Item Type</option>
                  <option value="Gold">Gold</option>
                  <option value="Diamond">Diamond</option>
                  <option value="Silver">Silver</option>
                  <option value="Platinum">Platinum</option>
                </select>
                {errors.itemType && <p className="text-red-500 text-sm">{errors.itemType}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Standard Purity:</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  value={formData.standardPurity}
                  name="standardPurity"
                  placeholder="Standard Purity"
                  onChange={handleChange}
                  className="input input-md w-full appearance-auto [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                {errors.standardPurity && <p className="text-red-500 text-sm">{errors.standardPurity}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%'}}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Is Default</label>
                <select
                  name="IsDefault"
                  value={formData.IsDefault}
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Default Status</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.IsDefault && <p className="text-red-500 text-sm">{errors.IsDefault}</p>}
              </div>

              <div style={{ paddingLeft:'20px',paddingTop:'80px', height: '30px',width:'99%' }}>
                <label className="block mb-4 font-semibold text-gray-500 text-xs">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  style={{ height: '38px' }}
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
              </div>

              {/* Modal Actions */}
              <div className="modal-action" style={{ paddingLeft: '50px',paddingTop:'90px',marginBottom:'30px', height: '30px' }}>
                <button type="submit" className="btn  w-1/6" style={{backgroundColor: '#8392ab'}}>Submit</button>
                <button
                  type="button"
                  className="btn  w-1/6"
                  style={{backgroundColor: '#5E72e4'}}
                  onClick={()=>document.getElementById('my_modal_edit').close()}
                >
                  Close
                </button>
              </div>
          </form>
      </dialog>



      <dialog id="my_modal_delete" className="modal">
      <div className="modal-box text-center py-10 px-8 relative font-[Open Sans]" style={{width:'600px',height:'300px'}}
      onClick={() => {
          document.getElementById('my_modal_delete').close();
      }}>
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
  <div className="modal-box text-center py-10 px-8 relative font-[Open Sans]" style={{width:'600px',height:'300px'}}
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
    <button className="btn bg-blue-500 w-[50px] rounded-lg" > ok</button>
  </div>
 </dialog>
      
    </div>
  );
};

export default Category;