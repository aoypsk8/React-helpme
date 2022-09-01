import { useState } from "react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

import HeaderEmployee from "../employee/HeaderEmployee";
import ItemEmployeeMap1 from "../employee/ItemEmployeeMap1";
import ItemEmployeeMap2 from "../employee/ItemEmployeeMap2";
const Employee = () => {
  const [active, setActive] = useState(1);
  const clickActive = (index) => {
    setActive(index);
  };
  console.log(active);
  return (
    <div className="container-menu-right">
      <HeaderEmployee Click={clickActive} />
      <div className="title-employee-item">
        <p className="service-employee">Employee</p>
        <p className="contact-employee">ຕິດຕໍ່</p>
        <p className="address-employee">ທີ່ຢູ່</p>
        <p className="history-employee">ເຄື່ອນໄຫວລ່າສຸດ</p>
      </div>
      <div className="item-employee">
        {active === 1 && <ItemEmployeeMap1 />}
        {active === 2 && <ItemEmployeeMap2 />}
      </div>
    </div>
  );
};
export default Employee;
