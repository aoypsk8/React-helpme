import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import './customer.css';
const HeaderCustomer = (props) => {
  const [togglState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-header-invoice">
      <div className="header-invoice">
          <div
            className={
              togglState === 1
                ? " tabs active all-account-customer-left"
                : " all-account-customer-left"
            }
            onClick={() => {toogleTab(1) 
              props.Click(1)}}
          >
            <div className="icon-customer-left">
              <FaClipboardList />
            </div>
            <div className="content-header-customer-left">
              <div className={togglState===1?"M1":"M"}>ບັນຊີທັງຫມົດ</div>
              <div className={togglState===1?"M1":"M"}>25,000</div>
            </div>
          </div>
          <div
            className={
              togglState === 2
                ? " tabs active closed-accound-right"
                : " closed-accound-right"
            }
            onClick={() => {toogleTab(2)
              props.Click(2)}}
          >
            <div className="icon-customer-right">
              <FaClipboardList />
            </div>
            <div className="content-header-customer-right">
              <div className={togglState===2?"M1":"M"}>ບັນຊີທີ່ຖືກປິດຊົ່ວຄາວ</div>
              <div className={togglState===2?"M1":"M"}>850</div>
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
export default HeaderCustomer;
