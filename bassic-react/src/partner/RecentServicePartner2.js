import { Link, useNavigate, useParams } from "react-router-dom";
import DataPartner2 from "../data/DataPartner2";
import "./RecentServicePartner2.css";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const RecentServicePartner2 = () => {
  const { partnerId } = useParams();
  const Detail = DataPartner2.find(
    (element) => element.id === parseInt(partnerId)
  );
  const navigate = useNavigate();
  const {image,name,mail}=Detail;

  const [itemData, setItemData] = useState(DataPartner2);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 8;
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
      <div className="container-recentservice-partner2">
        {/*Header Deatil */}
        <div className="header-recentservice-partner2">
          <div
            className="icon-recentservice-partner2"
            onClick={() => navigate(-1)}
          >
            ==
          </div>
          <div
            className="icon-recentservice-partner2"
            onClick={() => navigate(+1)}
          >
            ==
          </div>
          <div className="title-recentservice-partner2">Recent service</div>
        </div>
        {/*body Deatil */}
        <div className="body-recentservice-partner2">
          <div className="body-header-recentservice-partner2">
            <div className="title-header-recentservice-partner2">
              <img src={image} alt="Title" />
              <div className="name-and-department-recentservice-partner2">
                <div className="name-recentservice-partner2">{name}</div>
                <p className="department-recentservice-partner2">{mail}</p>
                <div className="all-order-recentservice-partner2">
                  <p className="all-service">ບໍລິການທັງຫມົດ<span>8</span></p>
                  <p className="all-order">ອໍເດີ້ທັງຫມົດ<span>150</span></p>
                </div>
                <div className="now-order-recentservice-partner2">
                  <p className="point-averate">ຄະແນນສະເລ່ຍ<span>5.0</span></p>
                  <p className="now-order">ອໍເດີ້ປັດຈຸບັນ<span>4</span></p>
                </div>
              </div>
            </div>
          </div>
                    {/*card====================card */}
          <p className="text-card-recentservice-partner2">Recent service</p>
          <div className="container-card-recent-partner1">
          <div className="container-card-recentservice-partner2">
            {currentItems.map((element, index) => {
              return (
                <div className="card-recentservice-partner2" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-recentservice-partner2">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-recentservice-partner2">
                      <p>element.title</p>
                    </div>
                    <div className="card-user-recentservice-partner2">
                      <p>element.user</p>
                    </div>
                    <div className="card-star-recentservice-partner2">
                      <p className="icon">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-recentservice-partner2">
                      <div className="text-price-recentservice-partner2">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-recentservice-partner2">
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
export default RecentServicePartner2;
