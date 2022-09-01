import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import "./invoice.css";
const HeaderInvoice = (props) => {
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
                ? " tabs active ready-transfer-invoice-left"
                : " ready-transfer-invoice-left"
            }
            onClick={() => {toogleTab(1) 
              props.Click(1)}}
          >
            <div className="icon-invoice-left">
              <FaClipboardList />
            </div>
            <div className="content-header-invoice-left">
              <div className={togglState===1?"M1":"M"}>ພ້ອມໂອນ (134)</div>
              <div className={togglState===1?"M1":"M"}>₭ 250,000,0000</div>
            </div>
          </div>
        


          <div
            className={
              togglState === 2
                ? " tabs active transfered-invoice-right"
                : " transfered-invoice-right"
            }
            onClick={() => {toogleTab(2)
              props.Click(2)}}
          >
            <div className="icon-invoice-right">
              <FaClipboardList />
            </div>
            <div className="content-header-invoice-right">
              <div className={togglState===2?"M1":"M"}>ໂອນແລ້ວ (1,356)</div>
              <div className={togglState===2?"M1":"M"}>₭ 850,000,000</div>
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
export default HeaderInvoice;
