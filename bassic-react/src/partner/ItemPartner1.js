import { FaClipboardList } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";
import { Link } from "react-router-dom";

const ItemPartner1 = (props) => {
  const { data } = props;
  const {image,name,mail,phone,email,province,district}=data;

  return (
    <div className="container-item-partner1">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Partner/item1/${data.id}`}  style={{ textDecoration: "none" }}>

      <div className="Item-partner1">

        <div className="title-item-partner1">
          <img src={image} alt="title" />
          <div className="user-item-partner1">
            <p className="name-user-item">{name}</p>
            <p className="email-user-item">{mail}</p>
          </div>
        </div>

        <div className="contact-item-partner1">
          <p className="phone-item-partner1">{phone}</p>
          <p className="email-item-partner1">{email}</p>
        </div>

        <div className="address-item-partner1">
          <p className="province-item-partner1">{province}</p>
          <p className="district-item-partner1">{district}</p>
        </div>

        <div className="content-item-partner1">
          <Link to={`/Partner/report1/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="report-item">
              <p className="icon-report-partner1">
                <FaClipboardList />
              </p>
              ລາຍງານ
            </div>
          </Link>
          <Link to={`/Partner/profile1/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="deactivate-item">
              <p className="icon-deactivate-partner1">
                <GoCircleSlash />
              </p>
              ປິດໃຊ້ງານ
            </div>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemPartner1;
