import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate'
import DataService from "../data/DataService";
import HeaderService from "../service/HeaderService";
import ServiceItem from "../service/ServiceItems";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Service = () => {
  const [itemData, setItemData] = useState(DataService);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 15;

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
      <HeaderService />
      <div className="container-card-service">
        {currentItems.map((element, index) => {
          return <ServiceItem key={index} data={element}></ServiceItem>;
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
export default Service;
