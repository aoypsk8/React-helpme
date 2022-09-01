import { FaClipboardList } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";
import { Link } from "react-router-dom";

const ItemCustomer1 = (props) => {
  const { data } = props;
  const {image,name,mail,phone,email,province,district}=data;

  return (
    <div className="container-item-customer">
      {/*++++++++++++++++++=======++++++ */}
      <Link to={`/Customer/item1/${data.id}`}  style={{ textDecoration: "none" }}>

      <div className="Item-customer">

        <div className="title-item-customer">
          <img src={image} alt="title" />
          <div className="user-item-customer">
            <p className="name-user-item">{name}</p>
            <p className="email-user-item">{mail}</p>
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
          <Link to={`/Customer/report1/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="report-item">
              <p className="icon-report-customer">
                <FaClipboardList />
              </p>
              ລາຍງານ
            </div>
          </Link>
          <Link to={`/Customer/profile1/${data.id}`} style={{ textDecoration: "none" }}>
            <div className="deactivate-item">
              <p className="icon-deactivate-customer">
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
export default ItemCustomer1;
