import { useState } from "react";

const Category = () => {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    itemType: '',
    standardPurity: '',
    IsDefault: '',
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
              className="table w-full text-sm text-left text-gray-500" 
              style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}
            >
              <thead className="text-xs text-gray-400 uppercase bg-white">
                <tr>
                  <th className="px-6 py-3" style={{ width: '80px' }}>SL NO</th>
                  <th className="px-6 py-3" style={{ width: '80px' }}>CODE</th>
                  <th className="px-6 py-3" style={{ width: '80px' }}>NAME</th>
                  <th className="px-6 py-3" style={{ width: '80px' }}>ITEM TYPE</th>
                  <th className="px-6 py-3" style={{ width: '80px' }}>IS DEFAULT</th>
                  <th className="px-6 py-3" style={{ width: '80px' }}>STATUS</th>
                  <th className="px-6 py-3" style={{ width: '120px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Rows */}
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="bg-white hover:bg-gray-50">
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
                      <button className="btn btn-info w-2/4 h-2/4">Edit</button>
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
          <div style={{ width: '100%', height: '50px', padding: '40px' }}>
            <h3 className="font-bold text-lg text-gray-500">Create Category Type</h3>
            <hr className="my-9 border-t-1 border-gray-300 w-full p-9" />
          </div>

          {/* Form Fields */}
          <div style={{ padding: '50px', height: '30px' }}>
            <label className="block mb-2 font-semibold text-gray-500">Code:</label>
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

          <div style={{ padding: '50px', height: '30px' }}>
            <label className="block mb-4 font-semibold text-gray-500">Name:</label>
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

          <div style={{ padding: '50px', height: '20px', marginBottom: '30px' }}>
            <label className="block mb-4 font-semibold text-gray-500">Item Type</label>
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

          <div style={{ padding: '50px', height: '30px' }}>
  <label className="block mb-4 font-semibold text-gray-500">Standard Purity:</label>
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

          <div style={{ padding: '50px', height: '20px' }}>
            <label className="block mb-4 font-semibold text-gray-500">Is Default</label>
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

          <div style={{ padding: '50px', height: '20px' }}>
            <label className="block mb-4 font-semibold text-gray-500">Status</label>
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
          <div className="modal-action" style={{ padding: '50px', height: '30px' }}>
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
    </div>
  );
};

export default Category;