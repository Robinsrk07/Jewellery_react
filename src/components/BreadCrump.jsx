import { useLocation } from "react-router-dom";

const BreadCrump = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const capitalizedPath = pathnames[2] 
    ? pathnames[2].charAt(0).toUpperCase() + pathnames[2].slice(1).toLowerCase()
    : '';
  
  return (
    <div style={{ marginLeft: '310px' }}>
      <div style={{ color: 'white' }} className="font-semibold">
        <div className="flex items-center">
          <i className="fas fa-folder text-white mr-2"></i> /
          {capitalizedPath} / {pathnames[3]}
        </div>
        <div  >List {pathnames[3]}</div>
      </div>
    </div>
  );
};

export default BreadCrump;