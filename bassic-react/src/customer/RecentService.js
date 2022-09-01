import { Link, useNavigate, useParams } from "react-router-dom";
import DataCustomer1 from "../data/DataCustomer1";
import "./RecentService.css";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const RecentService = () => {
  const { customerId } = useParams();
  const Detail = DataCustomer1.find(
    (element) => element.id === parseInt(customerId)
  );
  const navigate = useNavigate();
  const { name, mail } = Detail;

  const [itemData, setItemData] = useState(DataCustomer1);
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
      <div className="container-recentservice-customer">
        {/*Header Deatil */}
        <div className="header-recentservice-customer">
          <div
            className="icon-recentservice-customer"
            onClick={() => navigate(-1)}
          >
            ==
          </div>
          <div
            className="icon-recentservice-customer"
            onClick={() => navigate(+1)}
          >
            ==
          </div>
          <div className="title-recentservice-customer">Recent service</div>
        </div>
        {/*body Deatil */}
        <div className="body-recentservice-customer">
          <div className="body-header-recentservice-customer">
            <div className="title-header-recentservice-customer">
              <img src="#" alt="Title" />
              <div className="name-and-department-recentservice-customer">
                <div className="name-recentservice-customer">{name}</div>
                <p className="department-recentservice-customer">{mail}</p>
                <div className="all-order-recentservice-customer">
                  <p>ສັ່ງອໍເດີ້ທັງຫມົດ</p>
                  <p>48</p>
                </div>
                <div className="coming-order-recentservice-customer">
                  <p>ອໍເດີ້ທີ່ກຳລັງສັ່ງ</p>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/*card====================card */}
          <p className="text-card-recents-service">Recent service</p>
          <div className="container-card-recent-customer">
            <div className="container-card-recent-service-customer">
              {currentItems.map((element, index) => {
                return (
                  <div className="card-recent-service-customer" key={index}>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      <div className="card-img-recent-service-customer">
                        <img src={element.image} alt="title" />
                      </div>
                      <div className="card-title-recent-service-customer">
                        <p>element.title</p>
                      </div>
                      <div className="card-user-recent-service-customer">
                        <p>element.user</p>
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
export default RecentService;
