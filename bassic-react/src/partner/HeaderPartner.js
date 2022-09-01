import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import "./partner.css";
const HeaderPartner = (props) => {
  const [togglState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-header-partner">
      <div className="header-partner">
        <div
          className={
            togglState === 1
              ? " tabs active all-partner-left"
              : " all-partner-left"
          }
          onClick={() => {
            toogleTab(1);
            props.Click(1);
          }}
        >
          <div className="icon-partner-left">
            <FaClipboardList />
          </div>
          <div className="content-header-partner-left">
            <div className={togglState === 1 ? "M1" : "M"}>Partner ທັງໝົດ</div>
            <div className={togglState === 1 ? "M1" : "M"}>1,500</div>
          </div>
        </div>
        <div
          className={
            togglState === 2
              ? " active closed-accound-partner-right"
              : " closed-accound-partner-right"
          }
          onClick={() => {
            toogleTab(2);
            props.Click(2);
          }}
        >
          <div className="icon-partner-right">
            <FaClipboardList />
          </div>
          <div className="content-header-partner-right">
            <div className={togglState === 2 ? "M1" : "M"}>
              ບັນຊີທີ່ຖືກປິດຊົ່ວຄາວ
            </div>
            <div className={togglState === 2 ? "M1" : "M"}>850</div>
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
export default HeaderPartner;
