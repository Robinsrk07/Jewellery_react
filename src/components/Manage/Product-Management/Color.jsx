import { useState } from "react";

const Color = ()=>{
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState(10);
  const[color,setColour]= useState('blue')
  return (
    <div>
    <div className="bg-white w-[170vh] h-auto max-h-[65vh] rounded-xl" style={{ marginLeft: '13px', overflow:'hidden', fontFamily: 'Open Sans'}}>
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
          onClick={() => document.getElementById('my_modal_5').showModal()}
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

      <table className="table w-full text-sm text-left text-gray-500" style={{ borderSpacing: '0 12px', borderCollapse: 'separate', minWidth: '1200px' }}>
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
      
    </div>
    
    </div>
  );
}

export default Color