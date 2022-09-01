import DataPartner2 from "../data/DataPartner2";
import ItemPartner2 from "./ItemPartner2";
import './ItemPartner2.css'
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
const ItemPartnerMap2 = () => {
  const [itemData, setItemData] = useState(DataPartner2);
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
    <div>
      <div className="title-header-partner2">
        <div className="partner">Partner</div>
        <div className="contact">ຕິດຕໍ່</div>
        <div className="address">ທີ່ຢູ່</div>
      </div>
      <div className="container-partner-item">
        {currentItems.map((element, index) => {
          return <ItemPartner2 key={index} data={element} />;
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
export default ItemPartnerMap2;
