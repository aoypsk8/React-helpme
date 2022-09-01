import { Link} from "react-router-dom";
const ItemOrder = (props) => {
  const { data } = props;
  return (
    <div className="container-item-order">
      <Link to={`/Order/${data.id}`} style={{ textDecoration: 'none' }}>
      <div className="Item-order">
          <div className="title-item-order">
            <div className="title-image">
              <img src={data.image} alt="title" />
            </div>
            <div className="title-title">
              <p className="title-title-item P1">{data.title}</p>
              <p className="user-user-item P2">{data.name}</p>
            </div>
          </div>
          <div className="address-item-order">
            <p className="address-address-item P1">{data.address}</p>
            <p className="distance-item P2">ໄລຍະຫ່າງ {data.distance}</p>
          </div>
          <div className="sender-item-order">
            <p className="name-sender-item P1">{data.sender}</p>
            <p className="phone-sender-item P2">{data.phone}</p>
          </div>
          <div className="time-item-order">
            <p className="time-item P1">{data.time}</p>
            <p className="date-item P2">{data.date}</p>
          </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemOrder;
