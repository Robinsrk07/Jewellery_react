import { useState } from "react";

const SubCategory =()=>{
 const [formData, setFormData] = useState({
    name: '',
    category:'',
    description:'',
    status: ''
  });

  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please Enter Name';
    if (!formData.category.trim()) newErrors.category = 'Please Select Item Type';
    if (!formData.description.trim()) newErrors.description = 'Product Description Cannot Empty';
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
      
      name: '',
      category:'',
      description:'',
      status: ''
    })
    setErrors({});
    document.getElementById('my_modal_5').close();
  };

  const handleClose = () => {
    document.getElementById('my_modal_5').close();
  };
  const handleClose1 = () => {
    document.getElementById('my_modal_6').close();
  };

  return (
    <div
      style={{
        width: '95%',
        height: '90%',
        margin: '1rem',
        marginBottom: '4rem',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
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
            height: '40px',
            border: '1px solid blue',
            borderRadius: '8px',
            backgroundColor: 'blue',
            color: 'white',
          }}
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          + New Item Type
        </button>
      </div>

      {/* Table Section */}
      <div className="w-full h-full bg-transparent" style={{ flex: 1 }}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table 
              className="table w-full text-sm text-left text-gray-500 " 
              style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}
            >
              <thead className="text-xs m-1 text-center text-gray-400 uppercase bg-white">
                <tr>
                  <th className="px-6 py-3" style={{ width: '100px' }}>SL NO</th>
                  <th className="px-6 py-3" style={{ width: '100px' }}>CATEGORY</th>
                  <th className="px-6 py-3" style={{ width: '100px' }}>NAME</th>
                  <th className="px-6 py-3" style={{ width: '250px' }}>DESCRIPTION</th>
                  <th className="px-6 py-3" style={{ width: '100px' }}>STATUS</th>
                  <th className="px-6 py-3" style={{ width: '100px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Rows */}
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="bg-white text-center hover:bg-gray-50">
                    <td className="px-6 py-5 border-b border-gray-200 text-xs">{item}</td>
                    <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                    <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                    <td className="px-6 py-5 border-b border-gray-200 text-xs">Gold</td>
                    <td className="px-6 py-5 border-b border-gray-200 text-xs">
                      <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        ACTIVE
                      </span>
                    </td>
                    <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                      <button className="btn btn-info w-2/4 h-2/4" 
                      onClick={() => document.getElementById('my_modal_6').showModal()}
                      >Edit</button>
                    </td>
                    <td className="px-6 py-5 border-b border-gray-200 text-blue-600">
                      <button className="btn btn-info w-3/4 h-2/4">Delete Category</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
     <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
     {/* Modal Header */}
    <div style={{ width: '100%', padding: '20px', paddingBottom: '0' }}>
      <h3 className="font-bold text-lg text-gray-500">Create Sub Category</h3>
      <hr className="my-4 border-t-1 border-gray-300 w-full" />
    </div>

    {/* Form Fields */}
    <div style={{ padding: '30px', paddingTop: '10px', paddingBottom: '5px' }}>
      <label className="block mb-2 font-semibold text-sm text-gray-500">Name:</label>
      <input
        type="text"
        value={formData.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        className="input input-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
        />

      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    </div>

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '5px' }}>
      <label className="block mb-2 text-sm font-semibold text-gray-500">Category</label>
      <select
        name="category"
        value={formData.category}
        className="select select-bordered w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded "
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

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '5px' }}>
      <label className="block mb-2 font-semibold text-gray-500">Description:</label>
      <textarea
        value={formData.description}
        name="description"
        placeholder="Enter description"
        onChange={handleChange}
        className="textarea textarea-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
        rows={3}
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
    </div>

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '10px' }}>
      <label className="block mb-2 font-semibold text-sm text-gray-500">Status</label>
      <select
        name="status"
        value={formData.status}
        className="select select-bordered w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
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
    <div className="modal-action" style={{ padding: '20px', paddingTop: '10px' }}>
      <button type="submit" className="btn btn-accent w-1/6">Submit</button>
       <button
        type="button"
        className="btn btn-error w-1/6"
        onClick={handleClose}
       >
         Close
      </button>
     </div>
  </form>
 </dialog>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
     <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
     {/* Modal Header */}
    <div style={{ width: '100%', padding: '20px', paddingBottom: '0' }}>
      <h3 className="font-bold text-lg text-gray-500">Edit Sub Category</h3>
      <hr className="my-4 border-t-1 border-gray-300 w-full" />
    </div>

    {/* Form Fields */}
    <div style={{ padding: '30px', paddingTop: '10px', paddingBottom: '5px' }}>
      <label className="block mb-2 font-semibold text-sm text-gray-500">Name:</label>
      <input
        type="text"
        value={formData.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        className="input input-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
        />

      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
    </div>

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '5px' }}>
      <label className="block mb-2 text-sm font-semibold text-gray-500">Category</label>
      <select
        name="category"
        value={formData.category}
        className="select select-bordered w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded "
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

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '5px' }}>
      <label className="block mb-2 font-semibold text-gray-500">Description:</label>
      <textarea
        value={formData.description}
        name="description"
        placeholder="Enter description"
        onChange={handleChange}
        className="textarea textarea-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
        rows={3}
      />
      {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
    </div>

    <div style={{ padding: '30px', paddingTop: '5px', paddingBottom: '10px' }}>
      <label className="block mb-2 font-semibold text-sm text-gray-500">Status</label>
      <select
        name="status"
        value={formData.status}
        className="select select-bordered w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"
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
    <div className="modal-action" style={{ padding: '20px', paddingTop: '10px' }}>
      <button type="submit" className="btn btn-accent w-1/6">Submit</button>
       <button
        type="button"
        className="btn btn-error w-1/6"
        onClick={handleClose1}
       >
         Close
      </button>
     </div>
  </form>
 </dialog>
    </div>
  );
}

export default SubCategory