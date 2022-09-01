import DataInvoice1 from "../data/DataInvoice1";
import ItemInvoice1 from "./ItemInvoice1";
import "./invoice.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
const ItemInvoiceMap1 = () => {
  const [itemData, setItemData] = useState(DataInvoice1);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 16;
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
      <div className="title-header-item-invoice">
        <div>Partner</div>
        <div>ຈຳນວນ Order</div>
        <div className="total-title-header-invoice">ຈຳນວນເງິນທັງຫມົດ</div>
      </div>
      <div className="container-invoice-item">
        {currentItems.map((element, index) => {
          return <ItemInvoice1 key={index} data={element} />;
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
export default ItemInvoiceMap1;
