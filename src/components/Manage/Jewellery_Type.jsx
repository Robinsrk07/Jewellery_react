import { useState } from "react";
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold

const Jewellery_Type = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    itemType: '',
    status: ''
  });

  const [errors, setErrors] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [items,setItems]= useState(0) 
    
  

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
    if (!formData.itemType.trim()) newErrors.itemType = 'Please Select Item Type'; // Added this validation
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

    // Submit form
    console.log('Form submitted:', formData);

    // Reset form and close modal - Fixed to include all fields
    setFormData({
      code: '',
      name: '',
      description: '',
      itemType: '', // Adding this field which was missing in reset
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
        maxWidth: '180px',
        height: '30px',
        border: '1px solid blue',
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
      + New Jewellery  Type
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
          <div className="overflow-x-auto">
            <table className="table w-full  text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
              <thead className="text-xs text-gray-400 uppercase bg-white">
                <tr  style={{minWidth:'600px'}} >
                  <th className="px-6 py-3" style={{ width: '150px',paddingLeft:'20px' }}>SL NO</th>
                  <th className="px-6 py-3" style={{ width: '130px' }}>CODE</th>
                  <th className="px-6 py-3" style={{ width: '150px' }}>NAME</th>
                  <th className="px-6 py-3" style={{ width: '170px' }}>JEWELLERY TYPE</th>
                  <th className="px-6 py-3" style={{ width: '170px' }}>STATUS</th>
                  <th className="px-6 py-3" style={{ width: '120px' }}>ACTION</th>
                  <th className="px-6 py-3" style={{ width: '270px' }}></th>
                </tr>
              </thead>
              <tbody>
                {/* Sample data */}
                <tr className="bg-white hover:bg-gray-50" style={{height:'50px'}}>
                  <td className="px-6 py-5 border-b border-gray-200 " style={{paddingLeft:'30px'}}>1</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">
                    <span className="bg-green-200 text-green-600 text-[10px] font-bold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_Edit').showModal()} className="btn text-white  rounded-lg " style={{width:'100px',padding:'5px', backgroundColor:'#696BE4'}}>Edit</button>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_8').showModal()} className="btn text-white rounded-lg " style={{width:'220px',padding:'5px',    background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                      }}>Delete Jewellery Type</button>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50" style={{height:'50px'}}>
                  <td className="px-6 py-5 border-b border-gray-200" style={{paddingLeft:'30px'}}>2</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs text-gray-400">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-600 text-[10px] font-bold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_Edit').showModal()} className="btn text-white  rounded-lg " style={{width:'100px',padding:'5px', backgroundColor:'#696BE4'}}>Edit</button>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_8').showModal()} className="btn text-white rounded-lg " style={{width:'220px',padding:'5px',    background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                      }}>Delete Jewellery Type</button>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50" style={{height:'50px'}}>
                  <td className="px-6 py-5 border-b border-gray-200" style={{paddingLeft:'30px'}}>3</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-600 text-[10px] font-bold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_Edit').showModal()} className="btn text-white  rounded-lg " style={{width:'100px',padding:'5px', backgroundColor:'#696BE4'}}>Edit</button>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button onClick={()=>document.getElementById('my_modal_8').showModal()} className="btn text-white rounded-lg " style={{width:'220px',padding:'5px',    background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
                      }}>Delete Jewellery Type</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle"         style={{ fontFamily: 'Open Sans' }}
            onClick={(e) => {
              const modalBox = document.querySelector('#my_modal_5 .modal-box');
              if (modalBox && !modalBox.contains(e.target)) {
                document.getElementById('my_modal_5').close();
              }
            }}
            >
        <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
          <div style={{ width: '100%', height: '50px' }}>
            <h3 className="font-bold text-lg text-gray-700" style={{paddingLeft:'20px',paddingTop:"20px"}}>Create Jewellery Type</h3>
            <hr className=" border-t-1 border-gray-300 w-full mt-2"  style={{marginTop:'20px'}}/>
          </div>

          <div style={{ padding: '50px', height: '30px' }}>
            <label className="block  font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Code:</label>
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

          <div style={{ paddingLeft:'50px',paddingTop:'30px', height: '30px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Name:</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div style={{ paddingLeft:'50px' ,paddingTop:'80px',height: '30px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Description:</label>
            <input
              type="text"
              value={formData.description}
              name="description"
              placeholder="description"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div style={{ paddingLeft:'50px',paddingTop:'70px', height: '20px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Item Type</label>
            <select
              name="itemType"
              value={formData.itemType}
              className="select select-bordered w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              onChange={handleChange}
              style={{ height: '38px',width:'410px' }}
            >
              <option value="">Select Item Type</option>
              <option value="Gold">Gold</option>
              <option value="Diamond">Diamond</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
            </select>
            {errors.itemType && <p className="text-red-500 text-sm">{errors.itemType}</p>}
          </div>

          <div style={{ paddingLeft:'50px',paddingTop:'70px', height: '20px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Status</label>
            <select
              name="status"
              value={formData.status}
              className="select select-bordered w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              onChange={handleChange}
              style={{ height: '38px',width:'410px' }}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
          </div>

          <div className="modal-action" style={{ padding: '50px',paddingTop:'70px', height: '30px' }}>
            <button type="submit" className="btn  w-1/6"  style={{backgroundColor: '#8392ab'}}>Submit</button>
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
      <dialog id="my_modal_Edit" className="modal modal-bottom sm:modal-middle"         style={{ fontFamily: 'Open Sans' }}
            onClick={(e) => {
              const modalBox = document.querySelector('#my_modal_5 .modal-box');
              if (modalBox && !modalBox.contains(e.target)) {
                document.getElementById('my_modal_Edit').close();
              }
            }}
            >
        <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
          <div style={{ width: '100%', height: '50px' }}>
            <h3 className="font-bold text-lg text-gray-700" style={{paddingLeft:'20px',paddingTop:"20px"}}>Edit Jewellery Type</h3>
            <hr className=" border-t-1 border-gray-300 w-full mt-2"  style={{marginTop:'20px'}}/>
          </div>

          <div style={{ padding: '50px', height: '30px' }}>
            <label className="block  font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Code:</label>
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

          <div style={{ paddingLeft:'50px',paddingTop:'30px', height: '30px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Name:</label>
            <input
              type="text"
              value={formData.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div style={{ paddingLeft:'50px' ,paddingTop:'80px',height: '30px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Description:</label>
            <input
              type="text"
              value={formData.description}
              name="description"
              placeholder="description"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div style={{ paddingLeft:'50px',paddingTop:'70px', height: '20px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Item Type</label>
            <select
              name="itemType"
              value={formData.itemType}
              className="select select-bordered w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              onChange={handleChange}
              style={{ height: '38px',width:'410px' }}
            >
              <option value="">Select Item Type</option>
              <option value="Gold">Gold</option>
              <option value="Diamond">Diamond</option>
              <option value="Silver">Silver</option>
              <option value="Platinum">Platinum</option>
            </select>
            {errors.itemType && <p className="text-red-500 text-sm">{errors.itemType}</p>}
          </div>

          <div style={{ paddingLeft:'50px',paddingTop:'70px', height: '20px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">Status</label>
            <select
              name="status"
              value={formData.status}
              className="select select-bordered w-full shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
              onChange={handleChange}
              style={{ height: '38px',width:'410px' }}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm">{errors.status}</p>}
          </div>

          <div className="modal-action" style={{ padding: '50px',paddingTop:'70px', height: '30px' }}>
            <button type="submit" className="btn  w-1/6"  style={{backgroundColor: '#8392ab'}}>Submit</button>
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




{/* Modal */}
<dialog id="my_modal_8" className="modal">


  <div className="modal-box text-center py-10 px-8 relative font-[Open Sans]" style={{width:'600px',height:'300px'}}
  onClick={() => {
    
      document.getElementById('my_modal_8').close();
    
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
}

export default Jewellery_Type;