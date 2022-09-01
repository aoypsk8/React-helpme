import "./ItemInvoice2.css";
import { Link } from "react-router-dom";

const ItemInvoice2 = (props) => {
  const { data } = props;
  return (
    <div className="container-item-invoice">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Invoice/item/transfer/${data.id}`}  style={{ textDecoration: "none" }}>
      <div className="Item-invoice2">
        <div className="title-item-invoice2">
          <img src={data.image} alt="title" />
          <div className="user-item-invoice2">
            <p className="name-user-item2">{data.name}</p>
            <p className="department-user-item2">{data.department}</p>
          </div>
        </div>
        <div className="order-item-invoice2">
          <p className="amount-order-item2">{data.amount}</p>
        </div>

        <div className="total-item-invoice2">
          <p className="total-item2">₭ {data.total}</p>
        </div>

        <div className="time-item-invoice2">
          <div className="time-invoice2">15 : 00</div>
          <div className="date-invoice2">18 / 05 / 2022</div>

        </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemInvoice2;
