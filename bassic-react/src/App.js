import "./App.css";
import "./service/service.css";
import "./service/ProductDetailService.css";
import "./order/ProductDetailOrder.css";
import './order/order.css'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Logo from "./Navbar/logo";
import Menu from "./Navbar/menu";
import Deshoard from "./page/deshoard";
import Service from "./page/service";
import Order from "./page/order"
import Payment from "./page/payment"
import Invoice from "./page/invoice"
import Customer from "./page/customer"
import Partner from "./page/partner"
import Employee from "./page/employee"
import Setting from "./page/setting"
import Logout from "./page/logout"
import ProductDetailService from "./service/ProductDetailService"
import ProductDetailOrder from "./order/ProductDetaiOrder"
import InvoiceDetail from "./invoice/InvoiceDetail";
import ReportInvoice from "./invoice/ReportInvoice";
import TransferInvoice from "./invoice/TransferInvoice";
import RecentService from "./customer/RecentService";
import ReportCustomer from "./customer/ReportCustomer";
import ProfileCustomer1 from "./customer/ProfileCustomer1";
import ReportCustomer2 from "./customer/ReportCustomer2";
import RecentService2 from "./customer/RecentService2";
import ProfileCustomer2 from "./customer/ProfileCustomer2";
import ProfilePartner1 from "./partner/ProfilePartner1";
import ReportPartner from "./partner/ReportPartner";
import RecentServicePartner1 from "./partner/RecentServicePartner1";
import RecentServicePartner2 from "./partner/RecentServicePartner2";
import ReportPartner2 from "./partner/ReportPartner2";
import ProfilePartner2 from "./partner/ProfilePartner2";
import DetailEmployee from "./employee/DetaiEmployee";


function App() {
  return (
    <Router>
      <div className="container">
        <div className="container-left">
          <Logo />
          <Menu/>
        </div>
        <div className="container-right">
          <Routes>
            <Route exact path="/Dashboard" element={<Deshoard/>}></Route>
            <Route  path="/Service" element={<Service/>}></Route>
            <Route path="Service/:productId" element={<ProductDetailService/>}></Route>
            <Route  path="/Order" element={<Order/>}></Route>
            <Route path="Order/:orderId" element={<ProductDetailOrder/>}></Route>
            <Route  path="/Payment" element={<Payment/>}></Route>
            <Route  path="/Invoice" element={<Invoice/>}></Route>
            <Route path="/Invoice/:invoiceId" element={<InvoiceDetail/>}></Route>
            <Route path="/Invoice/:report/:ReportId" element={<ReportInvoice/>}></Route>
            <Route path="/Invoice/item/transfer/:TransferId" element={<TransferInvoice/>}></Route>
            <Route  path="/Customer" element={<Customer/>}></Route>
            <Route path="/Customer/item1/:customerId" element={<RecentService/>}></Route>
            <Route path="/Customer/report1/:reportcustomerId" element={<ReportCustomer/>}></Route>
            <Route path="/Customer/profile1/:profilecustomerId" element={<ProfileCustomer1/>}></Route>
            <Route path="/Customer/item2/:customerId" element={<RecentService2/>}></Route>
            <Route path="/Customer/report2/:reportcustomerId" element={<ReportCustomer2/>}></Route>
            <Route path="/Customer/profile2/:profilecustomerId" element={<ProfileCustomer2/>}></Route>
            
            <Route  path="/Partner" element={<Partner/>}></Route>
            <Route path="/Partner/item1/:partnerId" element={<RecentServicePartner1/>}></Route>
            <Route path="/Partner/profile1/:profilepartnerId" element={<ProfilePartner1/>}></Route>
            <Route path="/Partner/report1/:reportpartnerId" element={<ReportPartner/>}></Route>

            <Route path="/Partner/item2/:partnerId" element={<RecentServicePartner2/>}></Route>
            <Route path="/Partner/report2/:reportpartnerId" element={<ReportPartner2/>}></Route>
            <Route path="/Partner/profile2/:profilereportId" element={<ProfilePartner2/>}></Route>


            <Route  path="/Employee" element={<Employee/>}></Route>
            <Route path="Employee/:employeeId" element={<DetailEmployee/>}></Route>

            <Route  path="/Setting" element={<Setting/>}></Route>
            <Route  path="/Logout" element={<Logout/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
