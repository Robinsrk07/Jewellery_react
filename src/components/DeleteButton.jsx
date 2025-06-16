import React from 'react';

const DeleteButton = ({ buttonText = "Delete Jewellery Type", modalId = "my_modal_8" }) => {
  const handleClick = () => {
    const modal = document.getElementById(modalId);
    if (modal) modal.showModal();
    else console.warn(`Modal with id '${modalId}' not found.`);
  };

  return (
    <button
      className="btn border-none text-white font-bold text-xs rounded-lg"
      style={{
        width: '180px',
        padding: '5px',
        height: '35px',
        background: 'linear-gradient(to right, #A1B1D1, #697C9B)',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default DeleteButton;
