import { AiFillStar } from "react-icons/ai";
import { Link} from "react-router-dom";
const ServiceItem = (props) => {
  const { data } = props;
  return (
    <div className="container-card-service-item">
      <div className="card-service">

      <Link  to={`/Service/${data.id}`} style={{ textDecoration: 'none' }}>
        <div className="card-img-service">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="card-title-service">
          <p>{data.title}</p>
        </div>
        <div className="card-user-service">
          <p>{data.user}</p>
        </div>
        <div className="card-star-service">
          <p className="icon">
            <AiFillStar />
            {data.star}
          </p>
          <p className="people-star-service">({data.amountstart})</p>
        </div>
        <div className="card-price-service">
          <div className="text-price-service">
            <p>ລາຄາເລີ່ມຕົ້ນ</p>
          </div>
          <div className="price-service">
            <p>₭ {data.price}</p>
          </div>
        </div>
        </Link>

      </div>
    </div>
  );
};
export default ServiceItem;
