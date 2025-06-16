const CreateButton = ({ buttoncontent, onClick }) => {
  return (
    <div
      style={{
        position: 'sticky',
        left: 0,
        top: 0,
        zIndex: 10,
        backgroundColor: 'white',
        padding: '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end',
        width: 'fit-content',
        minWidth: '100%',
      }}
    >
      <button
        className="text-xs font-bold"
        style={{
          width: '160px',
          height: '33px',
          borderRadius: '8px',
          background: 'linear-gradient(to right, #7F60E4, #6170E4)',
          color: 'white',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer',
        }}
        onClick={onClick}  
      >
        {buttoncontent}
      </button>
    </div>
  );
};


export default CreateButton