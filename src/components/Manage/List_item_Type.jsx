import React from 'react';

const List_item_Type = () => {
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
          }} onClick={()=>document.getElementById('my_modal_5').showModal()}
        >
          + New Item Type
        </button>
      </div>

      <div className="w-full h-full bg-transparent" style={{ flex: 1 }}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate' }}>
              <thead className="text-xs text-gray-400 uppercase bg-white">
                <tr>
                  <th className="px-6 py-3" style={{ width: '80px' }}>SL NO</th>
                  <th className="px-6 py-3" style={{ width: '120px' }}>CODE</th>
                  <th className="px-6 py-3" style={{ width: '180px' }}>NAME</th>
                  <th className="px-6 py-3" style={{ width: '250px' }}>DESCRIPTION</th>
                  <th className="px-6 py-3" style={{ width: '150px' }}>STATUS</th>
                  <th className="px-6 py-3" style={{ width: '150px' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
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
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">
                    <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-5 border-b border-gray-200 text-blue-600">N/A N/A</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-5 border-b border-gray-200">2</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
                  <td className="px-6 py-5 border-b border-gray-200">Diamond</td>
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
              <form method="dialog" className="modal-box" onSubmit={(e) => {
                e.preventDefault();
                // your submit logic here
                document.getElementById('my_modal_5').close(); 
                }}>
                <div style={{width:'100%',height:'50px' ,padding:'30px'}}><h3 className="font-bold text-lg text-gray-500">Create New Item</h3>
                <hr className="my-9 border-t-1 border-gray-300 w-full p-9" />
                </div>
                
                
                <div className="" style={{padding:'50px'}}>
                <label className="block mb-2 font-semibold text-gray-500">Code:</label>
                <input type="text" placeholder="Large" className="input input-md w-full" />
                </div>


                
                <div className="modal-action">
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                </div>
              </form>
</dialog>

    </div>
  );
};

export default List_item_Type;