import React, { useState } from 'react';

const EditButton = ({ onClick, buttoncontent = 'Edit' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className="btn border-none text-white font-bold text-xs rounded-lg"
      style={{
        width: '80px',
        height: '35px',
        padding: '5px',
        background: isHovered
          ? 'linear-gradient(to right, #6170E4, #7F60E4)'
          : 'linear-gradient(to right, #7F60E4, #6170E4)',
        transition: 'background 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttoncontent}
    </button>
  );
};

export default EditButton;
