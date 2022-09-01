import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
const HeaderService = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);
  return (
    <>
    {showFilter && <div className="line-1"></div>}
    <div className="filter-service">
        <div className="clickfilter-service">
          <div className="icon" onClick={toggleFilter}>
            <VscSettings />
          </div>
          <div className="text">ຕອງຂໍ້ມູນ</div>
        </div>
        <div className="searchfilter">
          <div className="search">
            <div className="icon-search">
              <MdSearch />
            </div>
            <input
              type="text"
              placeholder="ພິມຊື່ຜູ້ໃຫ້ບໍລິການ, ຊື່ບໍລິການ..."
            />
          </div>
          <button>ຄົ້ນຫາ</button>
        </div>
      </div>
      {showFilter && (
        <div className="toggle-filter-service">
          <div>
            <h2>ປະເພດບໍລິການ +</h2>
            <h5 onClick={toggleFilter}>ສ້ອມແປງເຄື່ອງໃຊ້ໄຟ້ຟ້າ</h5>
            <h5 onClick={toggleFilter}>ສ້ອມແປງເຄື່ອງມືເອເລັກໂຕນິກ</h5>
            <h5 onClick={toggleFilter}>ຂຽນໂປຣແກຣມ ແລະ ເວັບໄຊ</h5>
            <h5 onClick={toggleFilter}>ຖ່າຍພາບ</h5>
            <h5 onClick={toggleFilter}>ອອກແບບ</h5>
            <h5 onClick={toggleFilter}>ຕັດຕໍ່ວີດີໂອ</h5>
            <h5 onClick={toggleFilter}>ຮັບຈ້າງທົ່ວໄປ</h5>
          </div>
          <div>
            <h2>ຈັດລຽງ</h2>
            <h5 onClick={toggleFilter}>ໃໝ່ສຸດ</h5>
            <h5 onClick={toggleFilter}>ນິມຍົມສຸດ</h5>
            <h5 onClick={toggleFilter}>ຕາມອັກສອນ ກ-ຮ</h5>
            <h5 onClick={toggleFilter}>ຕາມອັກສອນ ຮ-ກ</h5>
            <h5 onClick={toggleFilter}>ຕາມອັກສອນ a-z</h5>
            <h5 onClick={toggleFilter}>ຕັດຕໍ່ວີດີໂອ</h5>
            <h5 onClick={toggleFilter}>ຕາມອັກສອນ z-a</h5>
          </div>
          <div>
            <h2>ເວລາ</h2>
            <h5 onClick={toggleFilter}>ອາທິດນີ້</h5>
            <h5 onClick={toggleFilter}>ເດືອນນີ້</h5>
            <h5 onClick={toggleFilter}>6 ເດືອນນີ້</h5>
            <h5 onClick={toggleFilter}>ປີນີ້</h5>
          </div>
          <div>
            <h2>ລາຄາ</h2>
            <h5 onClick={toggleFilter}>ຖືກສຸດ</h5>
            <h5 onClick={toggleFilter}>ແພງສຸດ</h5>
            <h5 onClick={toggleFilter}>ຕຳກວ່າ 50K</h5>
            <h5 onClick={toggleFilter}>ຕຳກວ່າ 150k</h5>
            <h5 onClick={toggleFilter}>ຕຳກວ່າ 500k</h5>
            <h5 onClick={toggleFilter}>ຕຳກວ່າ 1,5m</h5>
            <h5 onClick={toggleFilter}>ຕຳກວ່າ 5m</h5>
          </div>
        </div>
      )}
      {showFilter && <div className="line-1"></div>}

      </>
  );
};
export default HeaderService;
