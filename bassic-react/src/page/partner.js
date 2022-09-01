import { useState } from "react";
import HeaderPartner from "../partner/HeaderPartner";
import ItemPartnerMap2 from "../partner/ItemPartnerMap2";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ItemPartnerMap1 from "../partner/ItemPartnerMap1";
const Partner = () => {
  const [active, setActive] = useState(1);
  const clickActive = (index) => {
    setActive(index);
  };
  console.log(active);
  return (
    <div className="container-menu-right">
      <HeaderPartner Click={clickActive} />
      <div className="item-partner">
        {active === 1 && <ItemPartnerMap1 />}
        {active === 2 && <ItemPartnerMap2 />}
      </div>
    </div>
  );
};
export default Partner;
