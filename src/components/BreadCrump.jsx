import { useLocation } from "react-router-dom";

const BreadCrump = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean); // Remove empty strings

  const formatPath = (path) => {
    // Skip 'dashboard' as it's typically not shown
    if (path === 'dashboard') return null;

    // Your specific formatting rules
    switch(path) {
      case "stonetype": return "Stone Type";
      case "adresstype": return "Address Type";
      case "controllaccount": return "Control Account";
      case "paymentmethodes": return "Payment Methods";
      case "employeelist": return "Employee List";
      case "customerslist": return "Customers List";
      case "createItem": return "Create Item";
      case "purchaseFix": return "Purchase Fix";
      case "ListPurchase": return "List Purchase";
      case "creategoldpurchase": return "Create Gold Purchase";
      case "createnewpurchase": return "Create New Purchase";
      case "viewpurchase": return "View Purchase";
      case "updatepurchase": return "Update Purchase";
      case "updateitem": return "Update Item";
      case "tradesettings": return "Trade Settings";
      case "groupandpermissions": return "Group and Permissions";
      case "managepermissions": return "Manage Permissions";
      default: 
        // Handle general cases: camelCase, snake_case, kebab-case
        return path
          .replace(/([A-Z])/g, ' $1') // camelCase to space
          .replace(/[_-]/g, ' ') // snake_case and kebab-case to space
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    }
  };

  const breadcrumbs = pathnames
    .map(formatPath)
    .filter(Boolean); // Remove null/undefined entries

  return (
    <div className="flex items-center ">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 576 512">
  <path
    fill="white"
    d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
  />
</svg> /
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">/</span>}
          <span className={index === 1 ? "font-semibold text-white text-opacity-50" : ""}>
            {crumb}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BreadCrump;