import { useState } from "react";
import { Link } from "react-router-dom";
import CustomScrollbar from "../../components/CustomScrollbar";
import EditButton from '../../components/EditButton';
import DeleteButton from '../../components/DeleteButton';
import CreateButton from '../../components/CreateButton';
import Pagination from '../../components/Pagination';
import ItemsPerPageSelector from '../../components/ItemsPerPageSelector';


const Stock_Transfer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const [isInvoiceDropdownOpen, setInvoiceDropdownOpen] = useState(false);
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [formData, setFormData] = useState({
    transferId: "",
    fromBranch: "",
    toBranch: "",
    itemCount: "",
    transferredBy: "",
    transferDate: "",
    status: ""
  });

  const stockTransfers = [
    {
      id: 'ST-2025-001',
      invoices: ['INV-001', 'INV-002', 'INV-003'],
      fromBranch: 'Head Office',
      toBranch: 'Branch A',
      itemCount: 45,
      transferredBy: 'John Doe',
      status: 'Completed',
      transferDate: '2025-06-08',
    },
    {
      id: 'ST-2025-002',
      invoices: ['INV-004', 'INV-005'],
      fromBranch: 'Head Office',
      toBranch: 'Branch B',
      itemCount: 23,
      transferredBy: 'Jane Smith',
      status: 'Pending',
      transferDate: '2025-06-10',
    },
    {
      id: 'ST-2025-003',
      invoices: ['INV-006'],
      fromBranch: 'Branch A',
      toBranch: 'Branch C',
      itemCount: 12,
      transferredBy: 'Mike Johnson',
      status: 'Cancelled',
      transferDate: '2025-06-09',
    }
  ];

  const handleInvoiceToggle = (invoice) => {
    setSelectedInvoices(prev => 
      prev.includes(invoice)
        ? prev.filter(item => item !== invoice)
        : [...prev, invoice]
    );
  };

  const removeInvoice = (invoiceToRemove) => {
    setSelectedInvoices(prev => prev.filter(invoice => invoice !== invoiceToRemove));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({
      ...formData,
      invoices: selectedInvoices
    });
    // Reset form
    setFormData({
      transferId: "",
      fromBranch: "",
      toBranch: "",
      itemCount: "",
      transferredBy: "",
      transferDate: "",
      status: ""
    });
    setSelectedInvoices([]);
    setModal(false);
  };

  const invoicesFull = [...new Set(stockTransfers.flatMap(stock => stock.invoices))];
  const allBranches = stockTransfers.flatMap(stock => [stock.fromBranch, stock.toBranch]);
  const branches = [...new Set(allBranches)];

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
        
        .multi-select-container {
          position: relative;
          width: 90%;
          margin-left: 25px;
        }
        
        .multi-select-button {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          background-color: white;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .multi-select-dropdown {
          position: absolute;
          width: 100%;
          max-height: 200px;
          overflow-y: auto;
          background-color: white;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 100;
          margin-top: 4px;
        }
        
        .multi-select-option {
          padding: 8px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        
        .multi-select-option:hover {
          background-color: #f3f4f6;
        }
        
        .multi-select-option input {
          margin-right: 8px;
        }
        
        .selected-invoices {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 8px;
        }
        
        .selected-invoice-tag {
          background-color: #e0e7ff;
          color: #4f46e5;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          display: flex;
          align-items: center;
        }
        
        .selected-invoice-tag button {
          margin-left: 4px;
          background: none;
          border: none;
          color: #4f46e5;
          cursor: pointer;
          font-weight: bold;
        }
      `}</style>

      <div className="bg-white w-full max-w-[99vw] xl:max-w-[90vw] 2xl:max-w-[95vw] h-auto max-h-[70vh] rounded-xl px-4 md:px-8 lg:px-12 mx-auto overflow-auto custom-scrollbar"
           style={{ fontFamily: 'Open Sans', overflow: 'auto' }}>
        
         <CreateButton
            buttoncontent="+ Create Stock Transfer"
            onClick={() => setModal(true)}  // This will now work!
             /> 
        
        <ItemsPerPageSelector items={items} setItems={setItems} />
        
        <table className="table w-full text-sm text-left border-collapse min-w-[1600px]"
               style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
          <thead className="text-xs text-[#A8B2C4] uppercase bg-white">
            <tr>
              <th className="px-6 py-3" style={{paddingLeft:'20px', width:'150px'}}>SL NO</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Transfer ID</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Purchase Invoices</th>
              <th className="px-6 py-3" style={{width:'150px'}}>From Branch</th>
              <th className="px-6 py-3" style={{width:'150px'}}>To Branch</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Item Count</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Transferred By</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Status</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Transfer Date</th>
              <th className="px-6 py-3" style={{width:'150px'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockTransfers.map((transfer, index) => (
              <tr key={transfer.id} className="bg-white hover:bg-gray-50 h-[44px] text-gray-400">
                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '40px' }}>
                  {index + 1}
                </td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.id}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">
                  {transfer.invoices.map((invoice, idx) => (
                    <span
                      key={idx}
                      className="block bg-blue-200 text-gray-900 rounded-md font-medium shadow-sm border border-blue-300 w-[75px]"
                      style={{margin:'5px'}}
                    >
                      📁 {invoice}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.fromBranch}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.toBranch}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.itemCount}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.transferredBy}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.status}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs">{transfer.transferDate}</td>
                <td className="px-6 py-5 border-b border-gray-200 text-xs" style={{ paddingLeft: '10px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                
                       <EditButton
                      onClick={()=>setEditModal(true)}
                        />
                    
                    <button
                      type="button"
                      className="btn text-white border-none font-bold text-xs rounded-lg"
                      style={{
                        width: '84px',
                        padding: '5px',
                        height:'35px',
                        backgroundColor: '#696BE4',
                      }}
                    >
                      View                     
                    </button>
                    <DeleteButton 
                      buttonText="Delete Stock Transfer " 
                        modalId="my_modal_8" 
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
         <Pagination/>
        
        <dialog id="my_modal_8" className="modal">
      
      
                       <div className="modal-box bg-white text-center py-8 px-6 rounded-xl relative font-[Open_Sans]
                         w-[90vw] max-w-[400px] h-[90vh] max-h-[300px]
                        "
      
                       onClick={()=>document.getElementById('my_modal_8').close()}
                       >
                       
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
                        <h3 className="text-lg text-gray-500 font-semibold " style={{margin:'20px'}}>Are you sure?</h3>
                        <p className="text-sm text-gray-500 " style={{margin:'20px'}}>You won't be able to revert this!</p>
      
                        {/* Actions */}
                        <div className="flex justify-center gap-4">
                          <button
                            className="btn text-xs border-none bg-red-500 font-bold text-white hover:bg-red-600 px-6"
                            onClick={() => document.getElementById('my_modal_cancel').showModal()}
                            style={{width:'100px'}}
                          >
                            No, cancel!
                          </button>
                          <button
                            className="btn text-xs border-none bg-green-500 font-bold text-white hover:bg-green-600 px-6"
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
                  <div className="modal-box text-center py-10 px-8 w-[90vw] bg-white max-w-[400px] h-[90vh] max-h-[300px] relative font-[Open Sans] "
                      onClick={() => {
                      document.getElementById('my_modal_cancel').close();
                      }}>
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
                      <h3 className="text-3xl font-bold text-gray-500 " style={{margin:'20px'}}>Cancelled</h3>
                      <p className="text-lg text-gray-500  font-semibold " style={{margin:'20px'}}>Your Stock  is safe</p>
                      <button className="btn border-none bg-blue-500 w-[50px] rounded-lg" > ok</button>
                  </div>
                  </dialog>
      </div>

      {modal && (
        <div className="w-full h-full text-gray-100 z-50 absolute inset-0 bg-black/40 flex justify-center items-center overflow-auto"style={{ fontFamily: 'Open Sans' }}>
          <div className="bg-white rounded-xl shadow-md  w-[90vw] max-w-[500px] h-[90vh] max-h-[600px]   flex flex-col overflow-y-auto gap-4"style={{padding:'20px'}}>
            <h3 className="font-bold text-[22px] text-[#344767]"
                >
              Create Stock Transfer
            </h3>
            <hr className="my-4 border-gray-300" />

            <div className="flex flex-col flex-grow text-gray-600 gap-3">
              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transfer ID:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-gray-400 text-xs rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferId"
                value={formData.transferId}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Purchase Invoices:
              </label>
              
              <div className="multi-select-container  text-gray-400  text-xs" >
                <button 
                  className="multi-select-button bg-red-200"
                  onClick={() => setInvoiceDropdownOpen(!isInvoiceDropdownOpen)}
                >
                  {selectedInvoices.length > 0 
                    ? `${selectedInvoices.length} selected` 
                    : "Select invoices"}
                  <span>{isInvoiceDropdownOpen ? '▲' : '▼'}</span>
                </button>
                
                {isInvoiceDropdownOpen && (
                  <div className="multi-select-dropdown ">
                    {invoicesFull.map((invoice, index) => (
                      <label key={index} className="multi-select-option">
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(invoice)}
                          onChange={() => handleInvoiceToggle(invoice)}
                          className="form-checkbox  bg-white text-blue-600 rounded"
                        />
                        {invoice}
                      </label>
                    ))}
                  </div>
                )}
                
                {selectedInvoices.length > 0 && (
                  <div className="selected-invoices">
                    {selectedInvoices.map((invoice, index) => (
                      <div key={index} className="selected-invoice-tag">
                        {invoice}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeInvoice(invoice);
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                From Branch:
              </label>
              <select
                className="select w-[100%] text-xs h-[40px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="fromBranch"
                value={formData.fromBranch}
                onChange={handleChange}
              >
                <option value="" disabled hidden className="text-[10px]">Select Branch</option>
                {branches.map((branch, index) => (
                  <option className="text-xs text-gray-400" key={index}  value={branch}>
                    {branch}
                  </option>
                ))}
              </select>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                To Branch:
              </label>
              <select
                className="select w-[100%] text-xs h-[40px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500"
                  style={{paddingLeft:'12px'}}

                name="toBranch"
                value={formData.toBranch}
                onChange={handleChange}
              >
                <option value="" disabled hidden> Select Branch</option>
                {branches.map((branch, index) => (
                  <option key={index} className="text-gray-600" value={branch}>
                     {branch}
                  </option>
                ))}
              </select>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Item Count:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-gray-400 text-xs rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="itemCount"
                value={formData.itemCount}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transferred By:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-xs text-gray-400 rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferredBy"
                value={formData.transferredBy}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transfer Date:
              </label>
              <input
                type="date"
                className="input w-[100%] text-xs text-gray-400 rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferDate"
                value={formData.transferDate}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Status:
              </label>
              <select
                className="select w-[100%] h-[35px]  text-xs border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                style={{paddingLeft:'12px'}}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="" disabled hidden> Select Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending"> Pending</option>
                <option value="Cancelled"> Cancelled</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end items-end gap-4 " 
                >
              <button
                type="button"
                className="w-[100px] h-[35px] rounded-lg text-white font-bold text-xs border-none"
                style={{ backgroundColor: '#8392ab' }}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="w-[100px] h-[35px] rounded-lg text-white font-bold text-xs border-none"
                style={{ backgroundColor: '#5E72e4' }}
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {editModal && (
       <div className="w-full h-full text-gray-100 z-50 absolute inset-0 bg-black/40 flex justify-center items-center overflow-auto"style={{ fontFamily: 'Open Sans' }}>
          <div className="bg-white rounded-xl shadow-md  w-[90vw] max-w-[500px] h-[90vh] max-h-[600px]   flex flex-col overflow-y-auto gap-4"style={{padding:'20px'}}>
            <h3 className="font-bold text-[22px] text-[#344767]"
                >
            Edit Stock Transfer
            </h3>
            <hr className="my-4 border-gray-300" />

            <div className="flex flex-col flex-grow text-gray-600 gap-3">
              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transfer ID:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-gray-400 text-xs rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferId"
                value={formData.transferId}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Purchase Invoices:
              </label>
              
              <div className="multi-select-container  text-gray-400  text-xs" >
                <button 
                  className="multi-select-button bg-red-200"
                  onClick={() => setInvoiceDropdownOpen(!isInvoiceDropdownOpen)}
                >
                  {selectedInvoices.length > 0 
                    ? `${selectedInvoices.length} selected` 
                    : "Select invoices"}
                  <span>{isInvoiceDropdownOpen ? '▲' : '▼'}</span>
                </button>
                
                {isInvoiceDropdownOpen && (
                  <div className="multi-select-dropdown ">
                    {invoicesFull.map((invoice, index) => (
                      <label key={index} className="multi-select-option">
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(invoice)}
                          onChange={() => handleInvoiceToggle(invoice)}
                          className="form-checkbox  bg-white text-blue-600 rounded"
                        />
                        {invoice}
                      </label>
                    ))}
                  </div>
                )}
                
                {selectedInvoices.length > 0 && (
                  <div className="selected-invoices">
                    {selectedInvoices.map((invoice, index) => (
                      <div key={index} className="selected-invoice-tag">
                        {invoice}
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            removeInvoice(invoice);
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                From Branch:
              </label>
              <select
                className="select w-[100%] text-xs h-[40px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="fromBranch"
                value={formData.fromBranch}
                onChange={handleChange}
              >
                <option value="" disabled hidden className="text-[10px]">Select Branch</option>
                {branches.map((branch, index) => (
                  <option className="text-xs text-gray-400" key={index}  value={branch}>
                    {branch}
                  </option>
                ))}
              </select>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                To Branch:
              </label>
              <select
                className="select w-[100%] text-xs h-[40px] border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500"
                  style={{paddingLeft:'12px'}}

                name="toBranch"
                value={formData.toBranch}
                onChange={handleChange}
              >
                <option value="" disabled hidden> Select Branch</option>
                {branches.map((branch, index) => (
                  <option key={index} className="text-gray-600" value={branch}>
                     {branch}
                  </option>
                ))}
              </select>

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Item Count:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-gray-400 text-xs rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="itemCount"
                value={formData.itemCount}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transferred By:
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input w-[100%] text-xs text-gray-400 rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferredBy"
                value={formData.transferredBy}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Transfer Date:
              </label>
              <input
                type="date"
                className="input w-[100%] text-xs text-gray-400 rounded-lg focus:outline-none border-gray-300 bg-white focus:border-b-2 focus:border-blue-500"
                style={{paddingLeft:'12px'}}
                name="transferDate"
                value={formData.transferDate}
                onChange={handleChange}
              />

              <label 
                     className="font-bold text-[11px] text-[#344767] w-[100%]">
                Status:
              </label>
              <select
                className="select w-[100%] h-[35px]  text-xs border-gray-300 bg-white focus:outline-none text-gray-400 rounded-lg focus:border-b-2 focus:border-blue-500" 
                style={{paddingLeft:'12px'}}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="" disabled hidden> Select Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending"> Pending</option>
                <option value="Cancelled"> Cancelled</option>
              </select>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-end items-end gap-4 " 
                >
              <button
                type="button"
                className="w-[100px] h-[35px] rounded-lg text-white font-bold text-xs border-none"
                style={{ backgroundColor: '#8392ab' }}
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="button"
                className="w-[100px] h-[35px] rounded-lg text-white font-bold text-xs border-none"
                style={{ backgroundColor: '#5E72e4' }}
                onClick={() => setEditModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Stock_Transfer;