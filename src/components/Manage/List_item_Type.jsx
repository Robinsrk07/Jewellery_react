import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
const List_item_Type = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    status: ''
  });
  const [items,setItems]= useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.code.trim()) newErrors.code = 'Please Enter Code';
    if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
    if (!formData.description.trim()) newErrors.description = 'Enter the Description';
    if (!formData.status.trim()) newErrors.status = 'Enter Status';
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
      description: '',
      status: ''
    });
    setErrors({});
    document.getElementById('my_modal_5').close();
  };

  return (
    <div
      style={{
        width: '97%',
        height: '90%',
        margin: '1rem',
        marginBottom: '9rem',
        borderRadius: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        fontFamily:'Open Sans'
      }}
    >
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
        maxWidth: '160px',
        height: '30px',
        borderRadius: '8px',
        backgroundColor: isHovered
          ? 'rgb(97, 113, 228)'
          : 'rgb(126, 96, 228)',
        color: 'white',
        transition: 'background-color 0.3s ease', 
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => document.getElementById('my_modal_5').showModal()}
    >
      + New Item Type
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



      <div className="w-full h-full bg-transparent" style={{ flex: 1 }}>
        <div className="bg-white p-6 rounded-lg ">
          <div className="" style={{overflow:'visible'}}>
            <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
              <thead className="text-xs text-gray-400 uppercase bg-white">
                <tr>
                  <th className="px-6 py-3" style={{ width: '170px' ,paddingLeft:'20px' }}>SL NO</th>
                  <th className="px-6 py-3" style={{ width: '170px' }}>CODE</th>
                  <th className="px-6 py-3" style={{ width: '170px' }}>NAME</th>
                  <th className="px-6 py-3" style={{ width: '190px' }}>DESCRIPTION</th>
                  <th className="px-6 py-3" style={{ width: '150px' }}>STATUS</th>
                  <th className="px-6 py-3" style={{ width: '130px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data */}
                <tr className="bg-white hover:bg-gray-50 text-xs " style={{height:'50px'}} >
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400"  style={{paddingLeft:'20px'}}>1</td>
                  <td className="px-6 py-5 border-b border-gray-200  text-gray-400" >Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">
                    <span className="bg-green-200 text-green-800 text-[9px] font-bold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600 ">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 text-xs" style={{height:'50px'}}>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400"  style={{paddingLeft:'20px'}}>2</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">
                    <span className="bg-green-200 text-green-800 text-[9px] font-bold font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 text-xs" style={{height:'50px'}}>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400"  style={{paddingLeft:'20px'}}>3</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-gray-400">
                    <span className="bg-green-200 text-green-800 text-[9px] font-bold font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="join" style={{paddingLeft:'450px' ,paddingBottom:'10px'}}>
      <div className="flex gap-1">
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


     </div>

     <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle "
        style={{ fontFamily: 'Open Sans' }}
        onClick={(e) => {
          const modalBox = document.querySelector('#my_modal_5 .modal-box');
          if (modalBox && !modalBox.contains(e.target)) {
            document.getElementById('my_modal_5').close();
          }
        }}
      >
        <form method="dialog" className="modal-box" onSubmit={handleSubmit} style={{width:'1000px'}}>
          <div style={{ width: '100%', height: '50px' }}>
            <h3 className="font-bold text-xl text-gray-600" style={{marginLeft:'25px' ,marginTop:'20px',marginBottom:'20px'}}>Create Type</h3>
            <hr className=" border-t-1 border-gray-300 w-[510px] " />
          </div>

          <div style={{ padding: '20px', height: '30px' }}>
                      <label className="block mb-2 text-xs font-bold text-gray-500" style={{marginBottom:'10px'}}>Code:</label>

                      <input
                        type="text"
                        value={formData.code}
                        name="code"
                        placeholder="code"
                        onChange={handleChange}
                        className="input input-md w-full rounded-md mb-2 shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800" // <-- spacing below input
                      />

                      {errors.code && (
                        <p className="text-red-500 text-sm mt-1">{errors.code}</p> // <-- spacing above error
                      )}
            </div>


          <div style={{ padding: '20px', height: '30px',marginTop:'50px' }}>
            <label className="block mb-2 text-xs font-bold text-gray-500">Name:</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
              className="input input-md w-full rounded-md mb-2 shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div style={{ padding: '20px', height: '30px', marginTop: '40px' }}>
            <label className="block mb-2 text-xs font-bold text-gray-500">Description:</label>
            <textarea
              name="description"
              className="textarea w-full rounded-md mb-2 shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div style={{ padding: '20px', height: '30px',marginTop:'80px' }}>
            <label className="block mb-2 text-xs font-bold text-gray-500">Status:</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              className="input w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              onChange={handleChange}
              placeholder="select status"
              list="statusOptions"
            />
            <datalist id="statusOptions">
              <option value="Active" />
              <option value="Inactive" />
            </datalist>
            {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
          </div>

          <div className="modal-action" style={{ padding: '50px', height: '30px' }}>
            <button type="submit" className="btn  w-1/6" style={{backgroundColor: '#8392ab'}}>Submit</button>
            <button
              type="button"
              className="btn  w-1/6"
              style={{backgroundColor: '#5E72e4'}}
              onClick={() => document.getElementById('my_modal_5').close()}
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default List_item_Type;
