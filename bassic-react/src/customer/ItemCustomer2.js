import { FaClipboardList } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const ItemCustomer2 = (props) => {
  const { data } = props;
  const {image,name,mail,phone,email,province,district}=data;

  return (
    <div className="container-item-customer">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Customer/item2/${data.id}`}  style={{ textDecoration: "none" }}>
      <div className="Item-customer">

        <div className="title-item-customer">
          <img src={image} alt="title" />
          <div className="user-item-customer">
            <p className="name-user-item">{name}</p>
            <p className="email-user-item">@a636c8</p>
          </div>
        </div>

        <div className="contact-item-customer">
          <p className="phone-item-customer">{phone}</p>
          <p className="email-item-customer">{email}</p>
        </div>

        <div className="address-item-customer">
          <p className="province-item-customer">{province}</p>
          <p className="district-item-customer">{district}</p>
        </div>

        <div className="content-item-customer">
          <Link to={`/Customer/report2/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="report-item">
              <p className="icon-report-customer">
                <FaClipboardList />
              </p>
              ລາຍງານ
            </div>
          </Link>
          <Link to={`/Customer/profile2/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="deactivate-item">
              <p className="icon-deactivate-customer2">
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
export default ItemCustomer2;
