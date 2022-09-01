import DataOrder from "../data/DataOrder";
import HeaderOrder from "../order/HeaderOrder";
import ItemOrder from "../order/ItemOrder";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
const Order = () => {
  const [itemData, setItemData] = useState(DataOrder);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 14;

    useEffect(()=>{
      const endOffset=itemOffset+itemPerPage;
      setCurrentItems(itemData.slice(itemOffset,endOffset))
      setPageCount(Math.ceil(itemData.length/itemPerPage))
    },[itemOffset,itemPerPage,itemData])

    const handlePageClick=(even)=>{
      const newOffset=(even.selected*itemPerPage)%itemData.length
      setItemOffset(newOffset)
    }
  return (
    <div className="container-menu-right">
      <HeaderOrder />
      <div className="title-order-item">
        <p className="service-order">ບໍລິການ</p>
        <p className="place-order">ຕຳແໜ່ງ</p>
        <p className="sender-order">ຜູ້ສົ່ງບໍລິການ</p>
        <p className="time-order">ເວລາ</p>
      </div>
      <div className="item-order">
        {currentItems.map((element, index) => {
          return <ItemOrder key={index} data={element} />;
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
  );
};
export default Order;
