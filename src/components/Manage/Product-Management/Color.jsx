import { useState } from "react";

const Color = ()=>{

  // state's for data
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const[color,setColour]= useState('blue')
  const [formData, setFormData] = useState({
    code: '',
    hex_code: '',
    name: '',
    color: '',
    description: '',
    status:'',
    action:''
  });
  const [errors, setErrors] = useState({});
   // handle change 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); 
      };

  //validation 
  
  const validate = () => {
    const newErrors = {};
    if (!formData.code.trim()) newErrors.code = 'Please Enter Code';
    if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
    if (!formData.description.trim()) newErrors.description = 'Enter the Description';
    if (!formData.itemType.trim()) newErrors.itemType = 'Please Select Item Type'; // Added this validation
    if (!formData.status.trim()) newErrors.status = 'Enter Status';
    return newErrors;
  };    

  //handle submit

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
      hex_code: '',
      name: '',
      color: '', // Adding this field which was missing in reset
      description: '',
      status: '',
      action: ''
    });
    setErrors({});
    document.getElementById('my_modal_color').close();
  };
 






  return (
    
<>
<style jsx global>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;  /* Slightly wider for better visibility */
    height: 6px; /* For horizontal scroll */
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1; /* Light gray track */
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background:rgb(218, 216, 216); /* Rich red color */
    border-radius: 3px;
    border: 1px solidrgb(206, 198, 198); /* Darker red border */
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background:rgb(202, 190, 190); /* Darker red on hover */
  }
  
  /* For Firefox */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color:rgb(226, 215, 215) #f1f1f1; /* red thumb on gray track */
  }
`}</style>
<div className="bg-white w-full max-w-6xl h-auto max-h-[65vh] rounded-xl px-4 md:px-8 lg:px-12 mx-auto overflow-auto  custom-scrollbar" style={{ fontFamily: 'Open Sans',overflow:'auto'}}>
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
        className="text-xs font-semibold"
          style={{
            width: '90%',
            maxWidth: '160px',
            height: '30px',
            border: '1px solid blue',
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
          onClick={() => document.getElementById('my_modal_color').showModal()}
        >
          + New Color
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
        <p className="text-xs font-semibold" style={{ marginLeft: '5px' }}>Items per page: {items}</p>
        <select
          className="border border-gray-300 rounded-lg w-[114px] h-[35px] px-2"
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            backgroundColor: 'white',
            backgroundImage: 'none',
            paddingLeft: '5px',
          }}
          onChange={(e) => setItems(Number(e.target.value))}
          value={items}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      

      <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate',minWidth:'1200px' }}>
        <thead className="text-xs text-gray-400 uppercase bg-white">
          <tr>
            <th className="px-6 py-3" style={{ width: '70px', paddingLeft: '30px' }}>SL NO</th>
            <th className="px-6 py-3" style={{ width: '70px' }}>CODE</th>
            <th className="px-6 py-3" style={{ width: '70px' }}>HEX CODE</th>
            <th className="px-6 py-3" style={{ width: '120px' }}>NAME</th>
            <th className="px-6 py-3" style={{ width: '120px' }}>COLOR</th>
            <th className="px-6 py-3" style={{ width: '100px' }}>DESCRIPTION</th>
            <th className="px-6 py-3" style={{ width: '100px' }}>STATUS</th>
            <th className="px-6 py-3" style={{ width: '140px' }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          
            <tr  className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
              <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '40px' }}>1</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">Sas</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">#ff0000</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs">scdds</td>
              <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: color, borderRadius: '4px' }}></div>
              </td>
              <td className="px-6 py-5 border-b border-gray-200">
                sasas
              </td>
              <td className="px-6 py-5 border-b border-gray-200">
                <span className="bg-green-200 text-green-800 font-bold text-[10px] rounded" style={{ padding: '4px 6px' }}>
                  Active
                </span>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                <button className="btn w-1/2 text-white font-bold text-xs rounded-lg" style={{ width: '100px', padding: '5px', backgroundColor: '#696BE4' }}
                  onClick={() => document.getElementById('my_modal_edit').showModal()}
                >
                  Edit
                </button>
              </td>
              <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                <button className="btn text-white font-bold text-xs rounded-lg"
                  style={{ width: '220px', padding: '5px', background: 'linear-gradient(to right, #A1B1D1, #697C9B)' }}
                  onClick={() => document.getElementById('my_modal_delete').showModal()}
                >
                  Delete Brand
                </button>
              </td>
            </tr>
         
        </tbody>
      </table>
      

      {/* Pagination */}
      <div className="flex gap-1 justify-center">
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

      {/* Modal */}

      <dialog id="my_modal_color" className="modal modal-bottom sm:modal-middle custom-scrollbar"         style={{ fontFamily: 'Open Sans' }}
            onClick={(e) => {
              const modalBox = document.querySelector('#my_modal_5 .modal-box');
              if (modalBox && !modalBox.contains(e.target)) {
                document.getElementById('my_modal_color').close();
              }
            }}
            >
        <form method="dialog" className="modal-box" style={{width: '35vw',
            maxWidth: '35vw',
            minWidth:'35vw',
            height: '700px',
            maxHeight: '90vh'
            }} 
            onSubmit={handleSubmit}>
          <div style={{ width: '100%', height: '50px' }}>
            <h3 className="font-bold text-lg text-gray-700" style={{paddingLeft:'20px',paddingTop:"20px"}}>Create Color</h3>
            <hr className=" border-t-1 border-gray-300 w-full mt-2"  style={{marginTop:'20px'}}/>
          </div>

          <div style={{ padding: '50px', height: '30px' }}>
            <label className="block  font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Name:</label>
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
            <label className="block mb-4 font-bold text-xs text-gray-500" style={{marginBottom:'10px'}}>Hex_code:</label>
            <input
              type="text"
              value={formData.hex_code}
              name="hex_code"
              placeholder="Hex_code"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.hex_code && <p className="text-red-500 text-sm">{errors.hex_code}</p>}
          </div>
          
          <div style={{ paddingLeft:'50px' ,paddingTop:'80px',height: '30px' }}>
            <label className="block mb-4 font-bold text-xs text-gray-500">color:</label>
            <input
              type="text"
              value={formData.color}
              name="color"
              placeholder="color"
              onChange={handleChange}
              className="input input-md w-[410px] shadow-none focus:shadow-none focus:outline-none focus:border-b-2 focus:border-blue-800"
            />
            {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
          </div>
          <div style={{ padding: '50px', height: '30px', marginTop: '30px' }}>
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
          

          <div style={{ paddingLeft:'50px',paddingTop:'80px', height: '20px' }}>
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
            <button type="submit" className="btn  w-1/6"  style={{backgroundColor: '#8392ab'}}>Create</button>
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
     </>
    
  );
}

export default Color