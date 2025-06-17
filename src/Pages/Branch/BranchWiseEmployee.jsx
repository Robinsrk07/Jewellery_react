import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import { Link } from 'react-router-dom';
 import Pagination from '../../components/Pagination';
 import CustomScrollbar from "../../components/CustomScrollbar";
 import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import CreateButton from '../../components/CreateButton';
import ItemsPerPageSelector from '../../components/ItemsPerPageSelector';
const BranchWiseEmployee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false)   
  const [editModal,setEditModal]= useState(false)
  

  // Dummy employee data
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      gender: 'male',
      position: 'Sales Manager',
      department: 'Sales',
      salary: '$5,000',
      bank_account:'123456',
      status: 'Active'
    },
    {
      id: 2,
       name: 'John Doe',
      gender: 'male',
      position: 'Sales Manager',
      department: 'Sales',
      salary: '$5,000',
      bank_account:'123456',
      status: 'Active'


    },
    {
      id: 3,
      name: 'John Doe',
      gender: 'male',
      position: 'Sales Manager',
      department: 'Sales',
      salary: '$5,000',
      bank_account:'123456',
      status: 'Active'

    },
    {
      id: 4,
       name: 'John Doe',
      gender: 'male',
      position: 'Sales Manager',
      department: 'Sales',
      salary: '$5,000',
      bank_account:'123456',
      status: 'Active'

    },
    {
      id: 5,
      name: 'John Doe',
      gender: 'male',
      position: 'Sales Manager',
      department: 'Sales',
      salary: '$5,000',
      bank_account:'123456',
      status: 'Active'

    }
  ];

  const handleToggleActive = (id, newStatus) => {
  console.log('Toggling employee', id, 'to', newStatus ? 'Active' : 'Inactive');
};


  return (
    <>
      <CustomScrollbar/>
      
      <div 
        className="bg-white w-full
          max-w-[99vw] 
          xl:max-w-[90vw] 
          2xl:max-w-[95vw] 
          h-auto max-h-[70vh] 
          rounded-xl px-4 md:px-8 lg:px-12
          mx-auto overflow-auto custom-scrollbar"
        style={{ fontFamily: 'Open Sans', overflow: 'auto' }}
      >
        <CreateButton
            buttoncontent="+ New Employee"
            onClick={() => setModal(true)}  // This will now work!
             />                 
         <ItemsPerPageSelector items={items} setItems={setItems} />

        <table className="table w-full text-sm text-[#A8B2C4] border-collapse min-w-[1300px]" 
          style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
          <thead className="text-xs text-[#A8B2C4] uppercase bg-white">
            <tr>
              <th className='min-w-[100px]' style={{paddingLeft:'20px'}}>SL NO</th>
              <th className='min-w-[200px]'>Name</th>
              <th className='min-w-[200px]'>Gender</th>
              <th className='min-w-[150px]'>Position</th>
              <th className='min-w-[150px]'>Department</th>
              <th className='min-w-[150px]'>Salary</th>
              <th className='min-w-[150px]'>Bank Account </th>
              <th className='min-w-[150px]'>Status</th>
              <th className='min-w-[200px]'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                <td className="px-6 py-5 border-b border-gray-200 text-sm" style={{paddingLeft:'20px'}}>{index + 1}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.name}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.gender}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.position}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.department}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.salary}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.bank_account}</td>
                 <td className="px-6 py-5 border-b border-gray-200 text-xs">
                          <span className="bg-green-300 font-bold text-[10px] text-green-700 px-2 py-0.5 rounded" style={{padding: '2px 6px'}}>ACTIVE</span>
                          </td>                
                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="text-white font-bold text-xs rounded-lg"
                      style={{
                        width: '80px',
                        padding: '5px',
                        backgroundColor: '#696BE4',
                        height:'35px'
                      }}
                      onClick={()=>setEditModal(true)}
                    >
                      Edit
                    </button>
                   
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
       <Pagination/>
      </div>
      {modal && (
                                <div className="fixed text-gray-400 inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md  w-[90vw] max-w-[500px] h-[95vh] max-h-[550px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                        >
                                         Create Employee                           </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col flex-grow gap-3 justify-center items-center"> {/* Added flex-grow */}
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        name="name"
                                      />
                                      {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
      
                                    
      
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Gender:
                                      </label>
                                      <select defaultValue=" select Status"
                                        className="select w-[100%] bg-white border-gray-200 focus:outline-none text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                        //alue={formData.status}
                                        name='gender'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option className=" text-gray-400">select Status</option>
                                        <option className=" text-gray-400">male </option>
                                        <option className=" text-gray-400">female</option>
                                      </select>
                                      {/* {errors.gender && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.gender}</span>} */}
                                     
                                     
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%] "
                                      >
                                       Department:
                                      </label>
                                     <select defaultValue="select Department"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                         style={{paddingLeft:'12px'}}
                                      //  value={formData.department}
                                        name='position'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select Position</option>
                                        <option className=" text-gray-400">ABC </option>
                                        <option className=" text-gray-400">EFG</option>
                                      </select>
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Branch:
                                      </label>
                                       <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-lg bg-gray-200 text-gray-500 border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        name="name"
                                        value={"dubai"}
                                      />
                                    
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}
                                      
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%] "
                                      >
                                       Position:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                       // value={formData.department}
                                        name='position'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select Position</option>
                                        <option className=" text-gray-400">ABC </option>
                                        <option className=" text-gray-400">EFG</option>
                                      </select>
                                      {/* {errors.position && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.position}</span>} */}


                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Salary:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}
                                       // value={formData.salary}
                                        //onChange={(e)=>handleChange(e)}
                                        name="salary"
                                      />
                                      {/* {errors.salary && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.salary}</span>} */}
                                     
                                     
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Bank Account Number:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}
                                        //value={formData.bankaccountnumber}
                                       // onChange={(e)=>handleChange(e)}
                                        name="bankaccountnumber"
                                      />
                                      {/* {errors.bankaccountnumber && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.bankaccountnumber}</span>} */}
                                        
                                         
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Status:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                       // value={formData.status}
                                        name='status'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select status</option>
                                        <option className=" text-gray-400">Active </option>
                                        <option className=" text-gray-400">Inactive</option>
                                      </select>
                                     {/* // {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                      
                                    </div> 
      


                                    {/* Button container positioned 10px above bottom */}
                                    <div className="flex flex-col sm:flex-row justify-end items-end gap-3  " 
                                        >
                                      <button
                                        type="button"
                                        className="btn border-none w-[100px] rounded-lg text-white"
                                        style={{ backgroundColor: '#8392ab' }}
                                        //onClick={(e) => handleSubmit(e)}
                                      >
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="btn border-none w-[100px] rounded-lg text-white"
                                        style={{ backgroundColor: '#5E72e4' }}
                                        onClick={()=>setModal(false)}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                         )}
                         {editModal && (
                                 <div className="fixed text-gray-400 inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto">
                                  <div className="bg-white rounded-xl shadow-md  w-[90vw] max-w-[500px] h-[95vh] max-h-[550px] flex flex-col overflow-y-auto gap-3" style={{padding:'20px'}}> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] "
                                        >
                                      Edit Employee                           </h3>
                                    <hr className="my-4 border-gray-300" />
      
                                    <div className="flex flex-col flex-grow gap-3 justify-center items-center"> {/* Added flex-grow */}
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        name="name"
                                      />
                                      {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
      
                                    
      
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Gender:
                                      </label>
                                      <select defaultValue=" select Status"
                                        className="select w-[100%] bg-white border-gray-200 focus:outline-none text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                        //alue={formData.status}
                                        name='gender'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option className=" text-gray-400">select Status</option>
                                        <option className=" text-gray-400">male </option>
                                        <option className=" text-gray-400">female</option>
                                      </select>
                                      {/* {errors.gender && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.gender}</span>} */}
                                     
                                     
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%] "
                                      >
                                       Department:
                                      </label>
                                     <select defaultValue="select Department"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                         style={{paddingLeft:'12px'}}
                                      //  value={formData.department}
                                        name='position'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select Position</option>
                                        <option className=" text-gray-400">ABC </option>
                                        <option className=" text-gray-400">EFG</option>
                                      </select>
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}

                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Branch:
                                      </label>
                                       <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%]  rounded-lg bg-gray-200 text-gray-500 border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{paddingLeft:'12px'}}
                                        name="name"
                                        value={"dubai"}
                                      />
                                    
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}
                                      
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%] "
                                      >
                                       Position:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                       // value={formData.department}
                                        name='position'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select Position</option>
                                        <option className=" text-gray-400">ABC </option>
                                        <option className=" text-gray-400">EFG</option>
                                      </select>
                                      {/* {errors.position && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.position}</span>} */}


                                      <label 
                                       
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Salary:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}
                                       // value={formData.salary}
                                        //onChange={(e)=>handleChange(e)}
                                        name="salary"
                                      />
                                      {/* {errors.salary && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.salary}</span>} */}
                                     
                                     
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                        Bank Account Number:
                                      </label>
                                      <input type="text" 
                                        placeholder="Type here" 
                                        className="input w-[100%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                         style={{paddingLeft:'12px'}}
                                        //value={formData.bankaccountnumber}
                                       // onChange={(e)=>handleChange(e)}
                                        name="bankaccountnumber"
                                      />
                                      {/* {errors.bankaccountnumber && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.bankaccountnumber}</span>} */}
                                        
                                         
                                      <label 
                                        
                                        className="font-semibold text-xs text-[#344767] w-[100%]"
                                      >
                                       Status:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[100%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{paddingLeft:'12px'}}
                                       // value={formData.status}
                                        name='status'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">select status</option>
                                        <option className=" text-gray-400">Active </option>
                                        <option className=" text-gray-400">Inactive</option>
                                      </select>
                                     {/* // {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                      
                                    </div> 
      


                                    {/* Button container positioned 10px above bottom */}
                                    <div className="flex flex-col sm:flex-row justify-end items-end gap-3  " 
                                        >
                                      <button
                                        type="button"
                                        className="btn border-none w-[100px] rounded-lg text-white"
                                        style={{ backgroundColor: '#8392ab' }}
                                        //onClick={(e) => handleSubmit(e)}
                                      >
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="btn border-none w-[100px] rounded-lg text-white"
                                        style={{ backgroundColor: '#5E72e4' }}
                                        onClick={()=>setEditModal(false)}
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                         )}
    </>
  );
};

export default BranchWiseEmployee;