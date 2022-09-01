import DataInvoice2 from "../data/DataInvoice2";
import ItemInvoice2 from "./ItemInvoice2";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
const ItemInvoiceMap2 = () => {
  const [itemData, setItemData] = useState(DataInvoice2);
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
    <>
      <div className="title-header-item-invoice2">
        <div>Partner</div>
        <div>ຈຳນວນ Order</div>
        <div>ຈຳນວນເງິນທັງຫມົດ</div>
        <div className="time-invoice">ເວລາ</div>
      </div>
      <div className="container-invoice-item">
      {currentItems.map((element, index) => {
        return <ItemInvoice2 key={index} data={element} />;
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
export default ItemInvoiceMap2;
