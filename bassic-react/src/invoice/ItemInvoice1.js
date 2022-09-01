import "./ItemInvoice.css";
import { FaClipboardList } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ItemInvoice1 = (props) => {
  const { data } = props;
  return (
    <div className="container-item-invoice">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Invoice/${data.id}`}  style={{ textDecoration: "none" }}>
      <div className="Item-invoice">
        <div className="title-item-invoice">
          <img src={data.image} alt="title" />
          <div className="user-item-invoice">
            <p className="name-user-item">{data.name}</p>
            <p className="department-user-item">{data.department}</p>
          </div>
        </div>
        
        <div className="order-item-invoice">
          <p className="amount-order-item">{data.amount}</p>
        </div>

        <div className="total-item-invoice">
          <p className="total-item">₭ {data.total}</p>
        </div>

        <div className="content-item-invoice">
          <Link to={`/Invoice/report/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="report-item">
              <p className="icon-invoice-report">
                <FaClipboardList />
              </p>
              ລາຍງານ
            </div>
          </Link>
          <Link to={`/Invoice/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="transfer-item">
              <p className="icon-invoice-transfer">
                <BsArrowLeftRight />
              </p>
              ໂອນເງີນ
            </div>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemInvoice1;
