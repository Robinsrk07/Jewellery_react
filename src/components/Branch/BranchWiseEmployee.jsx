import React, { useState } from 'react';
import '@fontsource/open-sans'; // Default weight 400
import '@fontsource/open-sans/600.css'; // Semi-bold
import '@fontsource/open-sans/700.css'; // Bold
import { Link } from 'react-router-dom';

const BranchWiseEmployee = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const [isActive, setIsActive] = useState(false);

  // Dummy employee data
  const employees = [
    {
      id: 1,
      empId: 'EMP001',
      name: 'John Doe',
      position: 'Sales Manager',
      department: 'Sales',
      email: 'john.doe@example.com',
      phone: '9876543210',
      joiningDate: '15/01/2020',
      salary: '$5,000'
    },
    {
      id: 2,
      empId: 'EMP002',
      name: 'Jane Smith',
      position: 'HR Executive',
      department: 'Human Resources',
      email: 'jane.smith@example.com',
      phone: '9876543211',
      joiningDate: '20/03/2019',
      salary: '$4,500'
    },
    {
      id: 3,
      empId: 'EMP003',
      name: 'Robert Johnson',
      position: 'IT Specialist',
      department: 'Information Technology',
      email: 'robert.j@example.com',
      phone: '9876543212',
      joiningDate: '10/07/2021',
      salary: '$6,000'
    },
    {
      id: 4,
      empId: 'EMP004',
      name: 'Emily Davis',
      position: 'Accountant',
      department: 'Finance',
      email: 'emily.d@example.com',
      phone: '9876543213',
      joiningDate: '05/11/2018',
      salary: '$5,200'
    },
    {
      id: 5,
      empId: 'EMP005',
      name: 'Michael Wilson',
      position: 'Marketing Executive',
      department: 'Marketing',
      email: 'michael.w@example.com',
      phone: '9876543214',
      joiningDate: '22/05/2020',
      salary: '$4,800'
    }
  ];

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
              <th className='min-w-[150px]'>Employee ID</th>
              <th className='min-w-[200px]'>Name</th>
              <th className='min-w-[150px]'>Position</th>
              <th className='min-w-[150px]'>Department</th>
              <th className='min-w-[200px]'>Email</th>
              <th className='min-w-[150px]'>Phone</th>
              <th className='min-w-[150px]'>Joining Date</th>
              <th className='min-w-[150px]'>Salary</th>
              <th className='min-w-[150px]'>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                <td className="px-6 py-5 border-b border-gray-200 text-sm" style={{paddingLeft:'20px'}}>{index + 1}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.empId}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.name}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.position}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.department}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.email}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.phone}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.joiningDate}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{employee.salary}</td>
                <td
                  className={`
                    px-6 py-5 border-b border-gray-200 text-xs 
                    cursor-pointer transition-all duration-200 ease-in-out
                    ${isActive ? "text-green-800 font-medium" : "text-red-800 font-medium"}
                    hover:bg-opacity-80 active:scale-95
                  `}
                  onClick={() => setIsActive(!isActive)}
                >
                  <span className="flex items-center gap-1">
                    {isActive ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Active
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Inactive
                      </>
                    )}
                  </span>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex gap-1 justify-center mt-4 mb-4">
          <button className="btn border-none bg-gray-100 shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
            {'<'}
          </button>
          <button className="btn border-none rounded-full w-[40px] h-[40px] flex items-center justify-center font-semibold bg-blue-500 text-white">
            1
          </button>
          <button className="btn border-none bg-gray-100 shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center font-bold text-gray-500">
            {'>'}
          </button>
        </div>
      </div>
    </>
  );
};

export default BranchWiseEmployee;