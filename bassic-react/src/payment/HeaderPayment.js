import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

import "./payment.css";
const HeaderPayment = (props) => {
  const [togglState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-header-payment">
      <div className="header-payment">
        <div
          className={
            togglState === 1
              ? " tabs active total-payment-left"
              : " total-payment-left"
          }
          onClick={() => {
            toogleTab(1);
            props.Click(1);
          }}
        >
          <div className="icon-payment-left">
            <FaClipboardList />
          </div>
          <div className="content-header-payment-left">
            <div className={togglState===1?"M1":"M"} >ເງີນທັງຫມົດ</div>
            <div className={togglState===1?"M1":"M"}>₭ 850,000,000</div>
          </div>
        </div>

        <div
          className={
            togglState === 2
              ? " tabs active total-payment-right"
              : " total-payment-right"
          }
          onClick={() => {
            toogleTab(2);
            props.Click(2);
          }}
        >
          <div className="icon-payment-right">
            <FaClipboardList />
          </div>
          <div className="content-header-payment-right">
            <div className={togglState===2?"M1":"M"}>ເງິນເຂົ້າອອກ - ຊົ່ວໂມງນີ້</div>
            <div className={togglState===2?"M1":"M"}>₭ 250,000,000</div>
          </div>
        </div>
      </div>

      <div className="searchfilter">
        <div className="search">
          <div className="icon-search">
            <MdSearch />
          </div>
          <input type="text" placeholder="ພິມຊື່ຜູ້ໃຫ້ບໍລິການ, ຊື່ບໍລິການ..." />
        </div>
        <button>ຄົ້ນຫາ</button>
      </div>
    </div>
  );
};
export default HeaderPayment;
