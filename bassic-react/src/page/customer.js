import { useState } from "react";
import HeaderCustomer from "../customer/HeaderCustomer";
import ItemCustomerMap1 from "../customer/ItemCustomerMap1";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ItemCustomerMap2 from "../customer/ItemCustomerMap2";
const Customer = () => {
  const [active, setActive] = useState(1);
  const clickActive = (index) => {
    setActive(index);
  };


  return (
    <div className="container-menu-right">
      <HeaderCustomer Click={clickActive} />
      <div className="item-customer">
        {active === 1 && <ItemCustomerMap1 />}
        {active === 2 && <ItemCustomerMap2 />}
      </div>
     
    </div>
  );
};
export default Customer;
