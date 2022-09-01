import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import'./employee.css';

const HeaderEmployee = (props) => {
  const [togglState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-header-employee">
      <div className="header-employee">
        <div
          className={
            togglState === 1
              ? " tabs active total-employee-left"
              : " total-employee-left"
          }
          onClick={() => {
            toogleTab(1);
            props.Click(1);
          }}
        >
          <div className="icon-employee-left">
            <FaClipboardList />
          </div>
          <div className="content-header-employee-left">
            <div className={togglState === 1 ? "M1" : "M"}>Employee ທັັງຫມົດ</div>
            <div className={togglState === 1 ? "M1" : "M"}>1,000</div>
          </div>
        </div>

        <div
          className={
            togglState === 2
              ? " tabs active total-employee-right"
              : " total-employee-right"
          }
          onClick={() => {
            toogleTab(2);
            props.Click(2);
          }}
        >
          <div className="icon-employee-right">
            <FaClipboardList />
          </div>
          <div className="content-header-employee-right">
            <div className={togglState === 2 ? "M1" : "M"}>
            ບັນຊີທີ່ຖືກປິດຊົ່ວຄາວ
            </div>
            <div className={togglState === 2 ? "M1" : "M"}>500</div>
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
export default HeaderEmployee;
