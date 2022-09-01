import { useState } from "react";
import HeaderInvoice from "../invoice/HeaderInvoice";
import ItemInvoiceMap1 from "../invoice/ItemInvoiceMap1";
import ItemInvoiceMap2 from "../invoice/ItemInvoiceMap2";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Invoice = () => {
  const [active, setActive] = useState(1);
  const clickActive = (index) => {
    setActive(index);
  };
  console.log(active);
  return (
    <div className="container-menu-right">
      <HeaderInvoice Click={clickActive} />

      <div className="item-invoice">
        {active === 1 && <ItemInvoiceMap1 />}
        {active === 2 && <ItemInvoiceMap2 />}
      </div>
      
    </div>
  );
};
export default Invoice;
