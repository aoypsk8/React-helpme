import { Link, useNavigate, useParams } from "react-router-dom";
import DataCustomer1 from "../data/DataCustomer1";
import { AiFillStar } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";
import "./ProfileCustomer1.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const ProfileCustomer1 = () => {
  const { profilecustomerId } = useParams();
  const Detail = DataCustomer1.find(
    (element) => element.id === parseInt(profilecustomerId)
  );
  const {image}=Detail
  const navigate = useNavigate();

  const [itemData, setItemData] = useState(DataCustomer1);
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
      <div className="container-profile-customer">
        {/*Header Deatil */}
        <div className="header-profile-customer">
          <div className="icon-profile-customer" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-profile-customer" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-profile-customer">Profile</div>
        </div>
        {/*body Deatil */}
        <div className="body-profile-customer">
          <div className="body-header-profile-customer">
            <div className="title-header-profile-customer">
              <img src={image} alt="Title" />
              <div className="name-and-department-profile-customer">
                <div className="name-profile-customer">name</div>
                <p className="department-profile-customer">mail</p>
              </div>
              <div className="box-report-close-profile-customer">
                <div className="content-item-profile-customer">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="report-item">
                      <p className="icon-report-profile-customer">
                        <FaClipboardList />
                      </p>
                      ລາຍງານ
                    </div>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="deactivate-item">
                      <p className="icon-deactivate-profile-customer">
                        <GoCircleSlash />
                      </p>
                      ປິດໃຊ້ງານ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="body-header-bottom-profile-customer">
            <div className="title-body-header-bottom-profile-customer">
              <p> About</p>
            </div>
            <div className="data-body-header-bottom-profile-customer">
              <div className="data-body-header-address">
                <p className="address">
                  <span>
                    <FaClipboardList />
                  </span>
                  ທີ່ຢູ່
                </p>
                <p className="district-province">ໄຊທານີ,ນະຄອນຫລວງ</p>
                <p className="data-body-header-all-order">
                  ສັ່ງອໍເດີ້ທັງຫມົດ<span>48</span>
                </p>
              </div>
              <div className="data-body-header-contact">
                <p className="contact">
                  <span>
                    <FaClipboardList />
                  </span>
                  ຕິດຕໍ່
                </p>
                <p className="phone">20 92 026 538</p>
                <p className="data-body-header-coming-order">
                  ອໍເດີທີ່ກຳລັງສັ່ງ<span>2</span>
                </p>
              </div>
              <div className="email-body-header-coming-order">
                <p>name@example.com</p>
              </div>
            </div>
          </div>
          <p className="text-card-recents-service">Recent service  <span>ເບິ່ງທັງໝົດ ( 48 ) = </span></p>
          {/*card====================card */}
          <div className="container-card-customer">
          <div className="container-card-profile-customer">
            {currentItems.map((element, index) => {
              return (
                <div className="card-profile-customer" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-recent-service-customer">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-recent-service-customer">
                      <p>data.title</p>
                    </div>
                    <div className="card-user-recent-service-customer">
                      <p>data.user</p>
                    </div>
                    <div className="card-star-recent-service-customer">
                      <p className="icon">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-recent-service-customer">
                      <div className="text-price-recent-service-customer">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-recent-service-customer">
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
export default ProfileCustomer1;
