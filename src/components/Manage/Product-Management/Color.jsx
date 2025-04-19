import { useState } from "react";

const Color = ()=>{
   const [formData, setFormData] = useState({
       code: '',
       hexCode:'',
       name: '',
       color:'',
       description: '',
       status: ''
     });
   
     const [errors, setErrors] = useState({});
   
     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData((prev) => ({ ...prev, [name]: value }));
       setErrors((prev) => ({ ...prev, [name]: '' })); 
     };
   
     const validate = () => {
       const newErrors = {};
       if (!formData.code.trim()) newErrors.code = 'Please Enter Code';
       if (!formData.hexCode.trim()) newErrors.hexCode = 'Please Enter Code';
       if (!formData.color.trim()) newErrors.color = 'Please Enter Code';
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
   
       // Submit form
       console.log('Form submitted:', formData);
   
       // Reset form and close modal
       setFormData({
         code: '',
         name: '',
         hexCode:'',
         description: '',
         color:'',
         status: ''
       });
       setErrors({});
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
             }} onClick={() => document.getElementById('my_modal_5').showModal()}
           >
             + New Item Type
           </button>
         </div>
   
         <div className="w-full h-full bg-transparent" style={{ flex: 1 }}>
           <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="overflow-x-auto">
               <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
                 <thead className="text-xs text-center text-gray-400 uppercase bg-white">
                   <tr>
                     <th className="px-6 py-3" style={{ width: '50px' }}>SL NO</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}>CODE</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}>HEX CODE</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}>NAME</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}>COLOR</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}>DESCRIPTION</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}> STATUS</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}> ACTION</th>
                     <th className="px-6 py-3" style={{ width: '100px' }}> </th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* Sample data */}
                   <tr className="bg-white text-center hover:bg-gray-50">
                     <td className="px-6 py-5 border-b border-gray-200">1</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">
                       <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                         ACTIVE
                       </span>
                     </td>
                     <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button className="btn btn-info w-3/4 h-1/2">Edit</button>
                      </td>
                     <td className="px-6 py-5 border-b border-gray-200 text-blue-600"><button className="btn btn-info w-3/4 h-1/2">Delete Brand</button></td>
                   </tr>
                   <tr className="bg-white text-center hover:bg-gray-50">
                     <td className="px-6 py-5 border-b border-gray-200">1</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">
                       <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                         ACTIVE
                       </span>
                     </td>
                     <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                   </tr>
                   <tr className="bg-white text-center hover:bg-gray-50">
                     <td className="px-6 py-5 border-b border-gray-200">1</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">Gold</td>
                     <td className="px-6 py-5 border-b border-gray-200">
                       <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
   
         <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
           <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
             <div style={{ width: '100%', height: '50px', padding: '50px' }}>
               <h3 className="font-bold text-lg text-gray-500">Create New Item</h3>
               <hr className="my-9 border-t-1 border-gray-300 w-full p-9" />
             </div>
   
             <div style={{ padding: '50px', height: '30px' }}>
               <label className="block mb-2 font-semibold text-gray-500">Code:</label>
               <input
                 type="text"
                 value={formData.code}
                 name="code"
                 placeholder="code"
                 onChange={handleChange}
                 className="input input-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"            />
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
                 className="input input-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"            />
               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
             </div>
   
             <div style={{ padding: '50px', height: '30px', marginBottom: '30px' }}>
               <label className="block mb-4 font-semibold text-gray-500">Description:</label>
               <textarea
                 name="description"
                 className="textarea w-full focus:outline-none focus:border-blue-500"
                 placeholder="Enter description"
                 value={formData.description}
                 onChange={handleChange}
               />
               {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
             </div>
   
             <div style={{ padding: '50px', height: '30px' }}>
               <label className="block mb-4 font-semibold text-gray-500">Status</label>
               <input
                 type="text"
                 name="status"
                 value={formData.status}
                 className="input input-md w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded"              onChange={handleChange}
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
               <button type="submit" className="btn btn-accent w-1/6">Submit</button>
               <button
                 type="button"
                 className="btn btn-error w-1/6"
                 onClick={() => document.getElementById('my_modal_5').close()}
               >
                 Close
               </button>
             </div>
           </form>
         </dialog>
       </div>
     )
}

export default Color