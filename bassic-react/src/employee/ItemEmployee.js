import { Link} from "react-router-dom";
import './ItemEmployee.css'
const ItemEmployee = (props) => {
  const { data } = props;
  return (
    <div className="container-item-employee">
      <Link to={`/Employee/${data.id}`} style={{ textDecoration: 'none' }}>
      <div className="Item-employee">
          <div className="title-item-employee">
            <div className="title-image">
              <img src={data.image} alt="title" />
            </div>
            <div className="title-title">
              <p className="title-title-item P1">{data.title}</p>
              <p className="user-user-item P2">{data.name}</p>
            </div>
          </div>
          <div className="address-item-employee">
            <p className="address-address-item P1">{data.address}</p>
            <p className="distance-item P2">ໄລຍະຫ່າງ {data.distance}</p>
          </div>
          <div className="sender-item-employee">
            <p className="name-sender-item P1">{data.sender}</p>
            <p className="phone-sender-item P2">{data.phone}</p>
          </div>
          <div className="time-item-employee">
            <p className="time-item P1">{data.time}</p>
            <p className="date-item P2">{data.date}</p>
          </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemEmployee;
