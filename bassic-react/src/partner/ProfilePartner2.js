import { Link, useNavigate, useParams } from "react-router-dom";
import DataPartner2 from "../data/DataPartner2";
import { AiFillStar } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "./ProfilePartner2.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const ProfilePartner2 = () => {
  const { profilereportId } = useParams();
  const Detail = DataPartner2.find(
    (element) => element.id === parseInt(profilereportId)
  );
  const navigate = useNavigate();
  const {image}=Detail;


  const [itemData, setItemData] = useState(DataPartner2);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 4;
  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(itemData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemData.length / itemPerPage));
  }, [itemOffset, itemPerPage, itemData]);

  const handlePageClick = (even) => {
    const newOffset = (even.selected * itemPerPage) % itemData.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="container-menu-right">
      <div className="container-profile-partner2">
        {/*Header Deatil */}
        <div className="header-profile-partner2">
          <div className="icon-profile-partner2" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-profile-partner2" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-profile-partner2">Profile</div>
        </div>
        {/*body Deatil */}
        <div className="body-profile-partner2">
          <div className="body-header-profile-partner2">
            <div className="title-header-profile-partner2">
              <img src={image} alt="Title" />
              <div className="name-and-department-profile-partner2">
                <div className="name-profile-partner2">name</div>
                <p className="department-profile-partner2">mail</p>
              </div>
              <div className="box-report-close-profile-partner2">
                <div className="content-item-profile-partner2">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="report-item2">
                      <p className="icon-report-profile-partner2">
                        <FaClipboardList />
                      </p>
                      ລາຍງານ
                    </div>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="deactivate-item2">
                      <p className="icon-deactivate-profile-partner2">
                      <BsCircle />
                      </p>
                      ເປິດໃຊ້ງານ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="body-header-bottom-profile-partner2">
            <div className="title-body-header-bottom-profile-partner2">
              <p> About</p>
            </div>
            <div className="data-body-header-bottom-profile-partner2">
              <div className="data-body-header-address">
                <p className="address">
                  <span>
                    <FaClipboardList />
                  </span>
                  ທີ່ຢູ່
                </p>
                <p className="district-province">ໄຊທານີ,ນະຄອນຫລວງ</p>
                <p className="data-body-header-all-order">
                  ບໍລິການທັງຫມົດ<span>48</span>
                </p>
              </div>
              <div className="data-body-header-contact">
                <p className="contact">
                  <span><FaClipboardList /></span>ຕິດຕໍ່</p>
                <p className="phone">20 92 026 538</p>
                <p className="data-body-header-coming-order">
                  ຄະແນນສະເລ່ຍ<span>5,0</span>
                </p>
              </div>
              <div className="email-body-header-coming-order">
                <p className="mail-body-header-coming-order">name@example.com</p>
                <p className="all-body-header-coming-order">
                  ອໍເດີທັງຫມົດ <span>5</span>
                </p>
              </div>
              <div className="type-body-header-order">
                <p className="type-service-title-order-partner2"><span><FaClipboardList /></span>ປະເພດບໍລິການ</p>
                <p className="name-type-order-partner2">Programer*Developer</p>
                <p className="loading-order-partner2">
                  ອໍເດີ້ໃນຄິວ<span>4</span>
                </p>
              </div>
              <div className="style-body-header-order">
                <p className="style-service-title-partner2"><span><FaClipboardList /></span>ຮູບແບບບໍລິການ</p>
                <p className="style-service-partner2">ນອກສະຖານທີ່ ອິດສະຫຼະ</p>
              </div>
            </div>
          </div>
          <p className="text-card-recents-service">
            Recent service <span>ເບິ່ງທັງໝົດ ( 48 ) = </span>
          </p>
          {/*card====================card */}
          <div className="container-card-partner2">
          <div className="container-card-profile-partner2">
            {currentItems.map((element, index) => {
              return (
                <div className="card-profile-customer" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-profile-partner2">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-profile-partner2">
                      <p>data.title</p>
                    </div>
                    <div className="card-user-profile-partner2">
                      <p>data.user</p>
                    </div>
                    <div className="card-star-profile-partner2">
                      <p className="icon">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-profile-partner2">
                      <div className="text-price-profile-partner2">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-profile-partner2">
                        <p>₭ data.price</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<  "
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePartner2;
