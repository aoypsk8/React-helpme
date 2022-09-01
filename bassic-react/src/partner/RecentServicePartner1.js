import { Link, useNavigate, useParams } from "react-router-dom";
import "./RecentServicePartner1.css";
import { AiFillStar } from "react-icons/ai";
import DataPartner1 from "../data/DataPartner1";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const RecentServicePartner1 = () => {
  const { partnerId } = useParams();
  const Detail = DataPartner1.find(
    (element) => element.id === parseInt(partnerId)
  );
  const navigate = useNavigate();
  const {image,name,mail}=Detail;

  const [itemData, setItemData] = useState(DataPartner1);
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
      <div className="container-recentservice-partner1">
        {/*Header Deatil */}
        <div className="header-recentservice-partner1">
          <div
            className="icon-recentservice-partner1"
            onClick={() => navigate(-1)}
          >
            ==
          </div>
          <div
            className="icon-recentservice-partner1"
            onClick={() => navigate(+1)}
          >
            ==
          </div>
          <div className="title-recentservice-partner1">Recent service</div>
        </div>
        {/*body Deatil */}
        <div className="body-recentservice-partner1">
          <div className="body-header-recentservice-partner1">
            <div className="title-header-recentservice-partner1">
              <img src={image} alt="Title" />
              <div className="name-and-department-recentservice-partner1">
                <div className="name-recentservice-partner1">{name}</div>
                <p className="department-recentservice-partner1">{mail}</p>
                <div className="all-order-recentservice-partner1">
                  <p className="all-service">ບໍລິການທັງຫມົດ<span>8</span></p>
                  <p className="all-order">ອໍເດີ້ທັງຫມົດ<span>150</span></p>
                </div>
                <div className="now-order-recentservice-partner1">
                  <p className="point-averate">ຄະແນນສະເລ່ຍ<span>5.0</span></p>
                  <p className="now-order">ອໍເດີ້ປັດຈຸບັນ<span>4</span></p>
                </div>
              </div>
            </div>
          </div>
                    {/*card====================card */}
          <p className="text-card-recentservice-partner1">Recent service</p>
          <div className="container-card-recent-partner1">
          <div className="container-card-recentservice-partner1">
            {currentItems.map((element, index) => {
              return (
                <div className="card-recentservice-partner1" key={index}>
                  <Link to="#" style={{ textDecoration: "none" }}>
                    <div className="card-img-recentservice-partner1">
                      <img src={element.image} alt="title" />
                    </div>
                    <div className="card-title-recentservice-partner1">
                      <p>element.title</p>
                    </div>
                    <div className="card-user-recentservice-partner1">
                      <p>element.user</p>
                    </div>
                    <div className="card-star-recentservice-partner1">
                      <p className="icon">
                        <AiFillStar />5
                      </p>
                      <p>(215)</p>
                    </div>
                    <div className="card-price-recentservice-partner1">
                      <div className="text-price-recentservice-partner1">
                        <p>ລາຄາເລີ່ມຕົ້ນ</p>
                      </div>
                      <div className="price-recentservice-partner1">
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
export default RecentServicePartner1;
