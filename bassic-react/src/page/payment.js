import { useState } from "react";
import HeaderPayment from "../payment/HeaderPayment";
import ItemPaymentMap1 from "../payment/ItemPaymentMap1";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import ItemPaymentMap2 from "../payment/ItemPaymentMap2";
const Payment = () => {
  const [active, setActive] = useState(1);
  const clickActive = (index) => {
    setActive(index);
  };
  return (
    <div className="container-menu-right">
      <HeaderPayment Click={clickActive} />
      <div className="title-header-payment">
        <p>ປະເພດ</p>
        <p>ຜູ້ຈ່າຍ</p>
        <p>ຜູ້ຮັບ</p>
        <p>ຈຳນວນເງິນ</p>
        <p>ເວລາ</p>
      </div>
      <div className="item-payment">
        {active === 1 && <ItemPaymentMap1 />}
        {active === 2 && <ItemPaymentMap2 />}
      </div>
    </div>
  );
};
export default Payment;
