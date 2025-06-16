import React from 'react';

const ItemsPerPageSelector = ({ items, setItems }) => {
  return (
    <div className='text-gray-400' style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '15px',marginBottom: '10px' }}>
      <p className="text-xs font-semibold" >Items per page: {items}</p>
      <select
        className="border border-gray-300 rounded-lg w-[114px] h-[35px] px-2"
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          backgroundColor: 'white',
          backgroundImage: 'none',
          paddingLeft: '10px',
        }}
        onChange={(e) => setItems(Number(e.target.value))}
        value={items}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default ItemsPerPageSelector;