import { Link } from "react-router";

const ManagePermissions = () => {
    return (
      <div className="bg-white w-full h-full flex flex-col items-center overflow-auto rounded-2xl p-5" style={{fontFamily: 'Open Sans'}}>
       
        <div className="sticky top-0 z-10 bg-white flex justify-end items-center w-[90%] min-h-[120px]">
            <Link to='/dashboard/settings/groupandpermissions/group'>
            <button className="btn text-white font-semibold bg-blue-500 w-[7vw]">Back</button>
            </Link>
        </div>

        <div className=" w-[90%]  ">

            <h3 className="text-red-400 font-semibold">Permission</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change permissions</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete permissions</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can add permissions</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view permissions</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%] " style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Group</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can Add group</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can Change Group</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete Group</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view Group</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%] " style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Accounts</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can Add Account</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change Accounts</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete Accounts</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view Accounts</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%] " style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Users</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change users</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete users</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can add users</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view users</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%] " style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Currency</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change Currency</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete Currency</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can add Currency</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view Currency</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%]  "style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Unit of measurement</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change Unit of measurement</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete Unit of measurement</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can add Unit of measurement</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view Unit of measurement</span>
                </div>
            </div>
           
        </div>
        <div className=" w-[90%]  "style={{ marginTop: '30px' }}>

            <h3 className="text-red-400 font-semibold">Terms of payment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can change Terms of payment</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can delete Terms of payment</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can add Terms of payment</span>
                </div>
              <div style={{ marginTop: '20px' }} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 text-white bg-white border border-gray-300 rounded-lg
                            checked:bg-blue-600 checked:border-blue-600 transition duration-300"
                />
                <span className="label-text text-sm text-gray-500">Can view Terms of payment</span>
                </div>
            </div>
           
        </div>
       
        <div className="sticky top-0 z-10 bg-white flex justify-end items-center w-[90%] min-h-[120px]">
  <button className="btn text-white font-semibold bg-blue-500 w-[7vw]">save</button>
</div>
      </div>
    );
  }
  
  export default ManagePermissions;