import { Link, useNavigate, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";
import "./ProfilePartner1.css";
import DataPartner1 from "../data/DataPartner1";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const ProfilePartner1 = () => {
  const { profilepartnerId } = useParams();
  const Detail = DataPartner1.find(
    (element) => element.id === parseInt(profilepartnerId)
  );
  const { image } = Detail;
  const navigate = useNavigate();

  const [itemData, setItemData] = useState(DataPartner1);
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
      <div className="container-profile-partner1">
        {/*Header Deatil */}
        <div className="header-profile-partner1">
          <div className="icon-profile-partner1" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-profile-partner1" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-profile-partner1">Profile</div>
        </div>
        {/*body Deatil */}
        <div className="body-profile-partner1">
          <div className="body-header-profile-partner1">
            <div className="title-header-profile-partner1">
              <img src={image} alt="Title" />
              <div className="name-and-department-profile-partner1">
                <div className="name-profile-partner1">name</div>
                <p className="department-profile-partner1">mail</p>
              </div>
              <div className="box-report-close-profile-partner1">
                <div className="content-item-profile-partner1">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="report-item1">
                      <p className="icon-report-profile-partner1">
                        <FaClipboardList />
                      </p>
                      ລາຍງານ
                    </div>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="deactivate-item1">
                      <p className="icon-deactivate-profile-partner1">
                        <GoCircleSlash />
                      </p>
                      ປິດໃຊ້ງານ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="body-header-bottom-profile-partner1">
            <div className="title-body-header-bottom-profile-partner1">
              <p> About</p>
            </div>
            <div className="data-body-header-bottom-profile-partner1">
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
                <p className="type-service-title-order-partner1"><span><FaClipboardList /></span>ປະເພດບໍລິການ</p>
                <p className="name-type-order-partner1">Programer*Developer</p>
                <p className="loading-order-partner1">
                  ອໍເດີ້ໃນຄິວ<span>4</span>
                </p>
              </div>
              <div className="style-body-header-order">
                <p className="style-service-title-partner1"><span><FaClipboardList /></span>ຮູບແບບບໍລິການ</p>
                <p className="style-service-partner1">ນອກສະຖານທີ່ ອິດສະຫຼະ</p>
              </div>
            </div>
          </div>
          <p className="text-card-recents-service">
            Recent service <span>ເບິ່ງທັງໝົດ ( 48 ) = </span>
          </p>
          {/*card====================card */}
          <div className="container-card-partner1">
          <div className="container-card-profile-partner1">
            {currentItems.map((element, index) => {
              return (
                <div className="card-profile-customer" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-profile-partner1">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-profile-partner1">
                      <p>data.title</p>
                    </div>
                    <div className="card-user-profile-partner1">
                      <p>data.user</p>
                    </div>
                    <div className="card-star-profile-partner1">
                      <p className="icon">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-profile-partner1">
                      <div className="text-price-profile-partner1">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-profile-partner1">
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
export default ProfilePartner1;
