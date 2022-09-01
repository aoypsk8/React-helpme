import { Link, useNavigate, useParams } from "react-router-dom";
import DataCustomer2 from "../data/DataCustomer2";
import { AiFillStar } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import "./ProfileCustomer2.css";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const ProfileCustomer2 = () => {
  const { profilecustomerId } = useParams();
  const Detail = DataCustomer2.find(
    (element) => element.id === parseInt(profilecustomerId)
  );
  const navigate = useNavigate();
  const {image,name,mail,phone,email,province,district}=Detail;


  const [itemData, setItemData] = useState(DataCustomer2);
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
        <div className="body-profile-customer2">
          <div className="body-header-profile-customer2">
            <div className="title-header-profile-customer2">
              <img src={image} alt="title" />
              <div className="name-and-department-profile-customer2">
                <div className="name-profile-customer2">{name}</div>
                <p className="department-profile-customer2">{mail}</p>
              </div>
              <div className="box-report-close-profile-customer2">
                <div className="content-item-profile-customer2">
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="report-item2">
                      <p className="icon-report-profile-customer2">
                        <FaClipboardList />
                      </p>
                      ລາຍງານ
                    </div>
                  </Link>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="deactivate-item2">
                      <p className="icon-deactivate-profile-customer2">
                        <BsCircle />
                      </p>
                      ເປິດໃຊ້ງານ
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="body-header-bottom-profile-customer2">
            <div className="title-body-header-bottom-profile-customer2">
              <p> About</p>
            </div>
            <div className="data-body-header-bottom-profile-customer2">
              <div className="data-body-header-address2">
                <p className="address2">
                  <span>
                    <FaClipboardList />
                  </span>
                  ທີ່ຢູ່
                </p>
                <p className="district-province2">{district},{province}</p>
                <p className="data-body-header-all-order2">
                  ສັ່ງອໍເດີ້ທັງຫມົດ<span>48</span>
                </p>
              </div>
              <div className="data-body-header-contact2">
                <p className="contact2">
                  <span>
                    <FaClipboardList />
                  </span>
                  ຕິດຕໍ່
                </p>
                <p className="phone2">{phone}</p>
                <p className="data-body-header-coming-order2">
                  ອໍເດີທີ່ກຳລັງສັ່ງ<span>2</span>
                </p>
              </div>
              <div className="email-body-header-coming-order2">
                <p>{email}</p>
              </div>
            </div>
          </div>
          <p className="text-card-recents-service2">Recent service  <span>ເບິ່ງທັງໝົດ ( 48 ) = </span></p>
          {/*card====================card */}
          <div className="container-card-customer">
          <div className="container-card-profile-customer2">
            {currentItems.map((element, index) => {
              return (
                <div className="card-profile-customer2" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-recent-service-customer2">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-recent-service-customer2">
                      <p>element.title</p>
                    </div>
                    <div className="card-user-recent-service-customer2">
                      <p>element.user</p>
                    </div>
                    <div className="card-star-recent-service-customer2">
                      <p className="icon2">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-recent-service-customer2">
                      <div className="text-price-recent-service-customer2">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-recent-service-customer2">
                        <p>₭ element.price</p>
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
export default ProfileCustomer2;
