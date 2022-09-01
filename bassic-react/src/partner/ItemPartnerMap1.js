import DataPartner1 from "../data/DataPartner1";
import ItemPartner1 from "./ItemPartner1";
import "./ItemPartner1.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
const ItemCustomerMap1 = () => {
  const [itemData, setItemData] = useState(DataPartner1);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 15;

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
    <>
      <div className="title-header-partner1">
        <div className="partner">Partner</div>
        <div className="contact">ຕິດຕໍ່</div>
        <div className="address">ທີ່ຢູ່</div>
      </div>
      <div className="container-partner-item">
        {currentItems.map((element, index) => {
          return <ItemPartner1 key={index} data={element} />;
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
    </>
  );
};
export default ItemCustomerMap1;
