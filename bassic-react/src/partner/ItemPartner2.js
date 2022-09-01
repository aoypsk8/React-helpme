import { FaClipboardList } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const ItemPartner2 = (props) => {
  const { data } = props;
  const {image,name,phone,email,province,district}=data;

  return (
    <div className="container-item-partner2">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Partner/item2/${data.id}`}  style={{ textDecoration: "none" }}>
      <div className="Item-partner2">
        <div className="title-item-partner2">
          <img src={image} alt="title" />
          <div className="user-item-partner2">
            <p className="name-user-item">{name}</p>
            <p className="email-user-item">@a636c8</p>
          </div>
        </div>

        <div className="contact-item-partner2">
          <p className="phone-item-partner2">{phone}</p>
          <p className="email-item-partner2">{email}</p>
        </div>

        <div className="address-item-partner2">
          <p className="province-item-partner2">{province}</p>
          <p className="district-item-partner2">{district}</p>
        </div>

        <div className="content-item-partner2">
          <Link to={`/Partner/report2/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="report-item">
              <p className="icon-report-partner2">
                <FaClipboardList />
              </p>
              ລາຍງານ
            </div>
          </Link>
          <Link to={`/Partner/profile2/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="deactivate-item">
              <p className="icon-deactivate-partner2">
                <BiCircle />
              </p>
              ເປິດໃຊ້ງານ
            </div>
          </Link>
        </div>
      </div>
      </Link>
    </div>
  );
};
export default ItemPartner2;
