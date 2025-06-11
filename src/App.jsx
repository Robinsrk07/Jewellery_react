import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard';
import Body from './components/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List_item_Type from './components/Manage/List_item_Type';
import Jewellery_Type from './components/Manage/Jewellery_Type';
import Category from './components/Manage/Product-Management/Category';
import SubCategory from './components/Manage/Product-Management/SubCategory';
import Brand from './components/Manage/Product-Management/Brand';
import Color from './components/Manage/Product-Management/Color';
import Login from './components/LoginPage';
import List_return_Type from './components/Manage/Product-Management/List_return_Type';
import Product_Size from './components/Manage/Product-Management/Product_size';
import Gender from './components/Manage/Product-Management/Gender';
import Diamond_Type from './components/Manage/Product-Management/Diamond_Type';
import StoneType from './components/Manage/Product-Management/StoneType';
import Occasion from './components/Manage/Product-Management/Occasion';
import Stock_point from './components/Manage/Product-Management/Stock_point';
import Style from './components/Manage/Product-Management/Style';
import Design from './components/Manage/Product-Management/Design';
import Country from './components/Manage/Location-Management/Country';
import City from './components/Manage/Location-Management/City';
import Adress_Type from './components/Manage/Location-Management/AdressType';
import ControllAccount from './components/Supplier/ControllAccount';
import Group from './components/Supplier/Group';
import Tax from './components/Supplier/Tax';
import List_supplier from './components/Supplier/List_supplier';
import CreateSupplier from './components/Supplier/CreateSupplier';
import Departments from './components/Employees/Departments';
import EmployeeList from './components/Employees/EmployeeList';
import PaymentMethodes from './components/Employees/PaymentMethodes';
import Genders from './components/Employees/Genders';
import Positions from './components/Employees/Postitions';
import CustomersList from './components/Cutomers/CustomersList.jsx';
import Item from './components/Inventory/Item.jsx';
import CreateItem from './components/Inventory/CreateItem.jsx';
import Purchase from './components/Inventory/Gold/Purchase.jsx';
import PurchaseFix from './components/Inventory/Gold/PurchaseFix.jsx';
import ListPurchase from './components/Inventory/Gold/ListPurchase.jsx';
import CreateGoldPurchase from './components/Inventory/Gold/CreateGoldPurchase.jsx';
import CreateNewPurchase from './components/Inventory/Gold/CreateNewPurchase.jsx';
import ViewPurchase from './components/Inventory/Gold/ViewPurchase.jsx';
import UpdateGoldPurchase from './components/Inventory/Gold/UpdateGoldPurchase.jsx';
import UpdateItem from './components/Inventory/UpdateItem.jsx';
import SettingsTax from './components/Settings/SettingsTax.jsx';
import Currency from './components/Settings/Currency.jsx';
import UnitOfMeasures from './components/Settings/UnitOfMeasures.jsx';
import TermsOfPayment from './components/Settings/TermsOfPayment.jsx';
import GroupAndPermission from './components/Group&Permission/GroupAndPermission.jsx';
import ManagePermissions from './components/Group&Permission/ManagePermissions.jsx';
import DiamondPurchhase from './components/Inventory/Diamond/DiamondPurchhase.jsx';
import CreateDiamondPurchase from './components/Inventory/Diamond/CreateDiamondPurchase.jsx';
import ItemDetials from './components/Inventory/Diamond/ItemDetials.jsx';
import PaySlip from './components/Employees/PaySlip.jsx';
import Pos from './components/Pos.jsx';
import { Provider } from 'react-redux';
import store from './StateManagement/store.js';
import Branches from './components/Branch/Branches.jsx';
import BranchWiseEmployee from './components/Branch/BranchWiseEmployee.jsx';
import Stock_Transfer from './components/Inventory/Stock-Transfer.jsx';
function App() {
  return (
    <div className="w-full h-full m-0 p-0">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/pos' element={<Pos />} />
          <Route path='/dashboard' element={<Body />} >
            <Route path='manage'>
              <Route path='item_type' element={<List_item_Type />} />
              <Route path='jewellery_type' element={<Jewellery_Type />} />
              <Route path='category' element={<Category />} />
              <Route path='subcategory' element={<SubCategory />} />
              <Route path='brand' element={<Brand />} />
              <Route path='color' element={<Color />} />
              <Route path='list_return_Type' element={<List_return_Type />} />
              <Route path='product_size' element={<Product_Size />} />
              <Route path='gender' element={<Gender/>} />
              <Route path='diamond_type' element={<Diamond_Type/>} />
              <Route path='stonetype' element={<StoneType/>} />
              <Route path='occasion' element={<Occasion/>} />
              <Route path='stock-point' element={<Stock_point/>} />
              <Route path='style' element={<Style/>} />
              <Route path='design' element={<Design/>} />
              <Route path='country' element={<Country/>} />
              <Route path='city' element={<City/>} />
              <Route path='adresstype' element={<Adress_Type/>} />
            </Route>
            <Route path='supplier'>
              <Route path='controllaccount' element={<ControllAccount/>} />
              <Route path='group' element={<Group/>} />
              <Route path='tax' element={<Tax/>} />
              <Route path='list_supplier' element={<List_supplier/>} />
              <Route path='Create_supplier' element={<CreateSupplier/>} />
            </Route>
            <Route path='employees'>
              <Route path='departments' element={<Departments/>} />
              <Route path='positions' element={<Positions/>} />
              <Route path='paymentmethodes' element={<PaymentMethodes/>} />
              <Route path='gender' element={<Genders/>} />
              <Route path='employeelist' element={<EmployeeList/>} />
              <Route path='payslip' element={<PaySlip/>} />
            </Route>
            <Route path='customers'>
              <Route path='customerslist' element={<CustomersList/>} />
            </Route>
            <Route path='branch'>
              <Route path='branches' element={<Branches/>} />
              <Route path='branchwiseemployee' element={<BranchWiseEmployee/>} />
            </Route>
            <Route path='inventory'>
              <Route path='item' element={<Item/>} />
              <Route path='createItem' element={<CreateItem/>} />
              <Route path='stock-transfer' element={<Stock_Transfer/>} />
              <Route path='gold'>
                <Route path='purchase' element={<Purchase/>} />
                <Route path='purchaseFix' element={<PurchaseFix/>} />
                <Route path='ListPurchase' element={<ListPurchase/>} />
                <Route path='creategoldpurchase' element={<CreateGoldPurchase/>} />
                <Route path='createnewpurchase' element={<CreateNewPurchase/>} />
                <Route path='viewpurchase' element={<ViewPurchase/>} />
                <Route path='updatepurchase' element={<UpdateGoldPurchase/>} />
                <Route path='updateitem' element={<UpdateItem/>} />
              </Route>
              <Route path='diamond'>
                <Route path='purchasediamond' element={<DiamondPurchhase/>} />
                <Route path='createDiamondPurchase' element={<CreateDiamondPurchase/>} />
                <Route path='itemDetials' element={<ItemDetials/>} />
              
              </Route>
            </Route>
            <Route path='settings'>
              <Route path='tradesettings'>
                <Route path='tax' element={<SettingsTax/>} />
                <Route path='currency' element={<Currency/>} />
                <Route path='uom' element={<UnitOfMeasures/>} />
                <Route path='termsofpayment' element={<TermsOfPayment/>} />
              </Route>
              <Route path='groupandpermissions'>
                <Route path='group' element={<GroupAndPermission/>} />
                <Route path='managepermissions' element={<ManagePermissions/>} />
                
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;