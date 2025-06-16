import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import { Link } from 'react-router-dom';
 import Pagination from '../../components/Pagination';
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
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(218, 216, 216);
          border-radius: 3px;
          border: 1px solid rgb(206, 198, 198);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(202, 190, 190);
        }
        
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(226, 215, 215) #f1f1f1;
        }
      `}</style>
      
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
        <div
          style={{
            position: 'sticky',
            left: 0,
            top: 0,
            zIndex: 10,
            backgroundColor: 'white',
            padding: '1.5rem',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'flex-end',
            width: 'fit-content',
            minWidth: '100%'
          }}
          className='flex flex-row gap-2'
        >
          <input 
            className='input input-md border text-gray-500 bg-white border-gray-300'
            placeholder='   Search Here'
          />
          <button
            className="text-xs font-bold"
            style={{
              width: '160px',
              height: '35px',
              borderRadius: '6px',
              backgroundColor: isHovered ? 'rgb(97, 113, 228)' : 'rgb(126, 96, 228)',
              color: 'white',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={()=>setModal(true)}
          >
            + New Employee
          </button>
        </div>

        <div className='text-gray-600' style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '5px' }}>
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
                                  <div className="bg-white rounded-xl shadow-md w-[90%] max-h-[95vh]
                                                sm:w-[85vw] sm:h-[75vh] sm:p-6
                                                md:w-[65vw] md:h-[55vh] md:p-8
                                                lg:w-[65vw] lg:h-[75vh] lg:p-10
                                                xl:w-[42vw] xl:h-[95vh] xl:p-12
                                                2xl:w-[25vw] 2xl:h-[30vh] 2xl:p-14
                                                p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto"> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                        style={{paddingLeft:'20px', paddingTop:"20px"}}>
                                         Create Employee                           </h3>
                                    <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
      
                                    <div className="flex flex-col flex-grow"> {/* Added flex-grow */}
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        name="name"
                                      />
                                      {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
      
                                    
      
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Gender:
                                      </label>
                                      <select defaultValue="   select Status"
                                        className="select w-[90%] bg-white border-gray-200 focus:outline-none text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                        //alue={formData.status}
                                        name='gender'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Status</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;male </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;female</option>
                                      </select>
                                      {/* {errors.gender && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.gender}</span>} */}
                                     
                                     
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Department:
                                      </label>
                                     <select defaultValue="select Department"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                      //  value={formData.department}
                                        name='position'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Position</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABC </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFG</option>
                                      </select>
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}

                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Branch:
                                      </label>
                                       <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%]  rounded-lg bg-gray-200 text-gray-500 border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        name="name"
                                        value={"     dubai"}
                                      />
                                    
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}
                                      
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Position:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                       // value={formData.department}
                                        name='position'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Position</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABC </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFG</option>
                                      </select>
                                      {/* {errors.position && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.position}</span>} */}


                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Salary:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                       // value={formData.salary}
                                        //onChange={(e)=>handleChange(e)}
                                        name="salary"
                                      />
                                      {/* {errors.salary && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.salary}</span>} */}
                                     
                                     
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Bank Account Number:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        //value={formData.bankaccountnumber}
                                       // onChange={(e)=>handleChange(e)}
                                        name="bankaccountnumber"
                                      />
                                      {/* {errors.bankaccountnumber && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.bankaccountnumber}</span>} */}
                                        
                                         
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Status:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                       // value={formData.status}
                                        name='status'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select status</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
                                      </select>
                                     {/* // {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                      
                                    </div> 
      


                                    {/* Button container positioned 10px above bottom */}
                                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                                        style={{marginTop: '20px', marginBottom: '10px', paddingLeft: '200px'}}>
                                      <button
                                        type="button"
                                        className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                        style={{ backgroundColor: '#8392ab' }}
                                        //onClick={(e) => handleSubmit(e)}
                                      >
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
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
                                  <div className="bg-white rounded-xl shadow-md w-[90%] max-h-[95vh]
                                                sm:w-[85vw] sm:h-[75vh] sm:p-6
                                                md:w-[65vw] md:h-[55vh] md:p-8
                                                lg:w-[65vw] lg:h-[75vh] lg:p-10
                                                xl:w-[42vw] xl:h-[95vh] xl:p-12
                                                2xl:w-[25vw] 2xl:h-[30vh] 2xl:p-14
                                                p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto"> 
                                                
                                                {/* Added flex-col */}
                                    <h3 className="font-bold text-[22px] text-[#344767] pl-4 pt-2 sm:pl-6 sm:pt-4 md:pl-8 md:pt-6"
                                        style={{paddingLeft:'20px', paddingTop:"20px"}}>
                                         Edit Employee                           </h3>
                                    <hr className="my-4 border-gray-300" style={{marginTop:'10px'}}/>
      
                                    <div className="flex flex-col flex-grow"> {/* Added flex-grow */}
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Name:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        name="name"
                                      />
                                      {/* {errors.name && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.name}</span>} */}
      
                                    
      
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Gender:
                                      </label>
                                      <select defaultValue="   select Status"
                                        className="select w-[90%] bg-white border-gray-200 focus:outline-none text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                        //alue={formData.status}
                                        name='gender'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Status</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;male </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;female</option>
                                      </select>
                                      {/* {errors.gender && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.gender}</span>} */}
                                     
                                     
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Department:
                                      </label>
                                     <select defaultValue="select Department"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                      //  value={formData.department}
                                        name='position'
                                        //onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Position</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABC </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFG</option>
                                      </select>
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}

                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Branch:
                                      </label>
                                       <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%]  rounded-lg bg-gray-200 text-gray-500 border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        name="name"
                                        value={"     dubai"}
                                      />
                                    
                                      {/* {errors.department && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.department}</span>} */}
                                      
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Position:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                       // value={formData.department}
                                        name='position'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select Position</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABC </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EFG</option>
                                      </select>
                                      {/* {errors.position && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.position}</span>} */}


                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Salary:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                       // value={formData.salary}
                                        //onChange={(e)=>handleChange(e)}
                                        name="salary"
                                      />
                                      {/* {errors.salary && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.salary}</span>} */}
                                     
                                     
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px',marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                        Bank Account Number:
                                      </label>
                                      <input type="text" 
                                        placeholder="    Type here" 
                                        className="input w-[90%] rounded-lg bg-white border-gray-200 focus:outline-none  focus:border-b-2 focus:border-blue-500"
                                        style={{marginLeft:'25px'}}
                                        //value={formData.bankaccountnumber}
                                       // onChange={(e)=>handleChange(e)}
                                        name="bankaccountnumber"
                                      />
                                      {/* {errors.bankaccountnumber && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.bankaccountnumber}</span>} */}
                                        
                                         
                                      <label 
                                        style={{ paddingLeft:'25px', marginTop: '20px', marginBottom:'10px', display: 'block' }}
                                        className="font-semibold text-sm text-[#344767] w-[80%]"
                                      >
                                       Status:
                                      </label>
                                      <select defaultValue="select Position"
                                        className="select w-[90%] focus:outline-none bg-white border-gray-200 text-gray-400  focus:border-b-2 focus:border-blue-500" 
                                        style={{marginLeft:'25px'}}
                                       // value={formData.status}
                                        name='status'
                                       // onChange={(e)=>handleChange(e)}
                                      >
                                        <option  className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;select status</option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Active </option>
                                        <option className=" text-gray-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inactive</option>
                                      </select>
                                     {/* // {errors.status && <span className="text-red-500 text-xs" style={{marginLeft:'25px'}}>{errors.status}</span>} */}
                                      
                                    </div> 
      


                                    {/* Button container positioned 10px above bottom */}
                                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 py-6 " 
                                        style={{marginTop: '20px', marginBottom: '10px', paddingLeft: '200px'}}>
                                      <button
                                        type="button"
                                        className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
                                        style={{ backgroundColor: '#8392ab' }}
                                        //onClick={(e) => handleSubmit(e)}
                                      >
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        className="btn border-none w-2/3 sm:w-[30%] rounded-lg text-white"
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