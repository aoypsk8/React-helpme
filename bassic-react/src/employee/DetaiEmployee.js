import {  useNavigate, useParams } from "react-router-dom";
import DataOrder from "../data/DataOrder";
import './DetailEmployee.css'
import { FaClipboardList } from "react-icons/fa";

const DetailEmployee = () => {
  const { employeeId } = useParams();
  const singleProduct = DataOrder.find(
    (product) => product.id === parseInt(employeeId)
  );
  const { image} = singleProduct;

  const navigate = useNavigate();
  return (
    <div className="container-menu-right">
      <div className="container-profile-employee">
        {/*Header Deatil */}
        <div className="header-profile-employee">
          <div className="icon-profile-employee" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-profile-employee" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-profile-employee">Profile</div>
        </div>
        {/*body Deatil */}
        <div className="body-profile-employee">
          <div className="body-header-profile-employee">
            <div className="title-header-profile-employee">
              <img src={image} alt="Title" />
              <div className="name-and-department-profile-employee">
                <div className="name-profile-employee">name</div>
                <p className="department-profile-employee">mail</p>
              </div>
              
            </div>
          </div>
          <div className="body-header-bottom-profile-employee">
            <div className="title-body-header-bottom-profile-employee">
              <p> About</p>
            </div>
            <div className="data-body-header-bottom-profile-employee">
              <div className="data-body-header-address">
                <p className="address">
                  <span>
                    <FaClipboardList />
                  </span>
                  ທີ່ຢູ່
                </p>
                <p className="district-province">ໄຊທານີ,ນະຄອນຫລວງ</p>
                
              </div>
              <div className="data-body-header-contact">
                <p className="contact">
                  <span><FaClipboardList /></span>ຕິດຕໍ່</p>
                <p className="phone">20 92 026 538</p>
                
              </div>
              <div className="email-body-header-coming-order">
                <p className="mail-body-header-coming-order">name@example.com</p>
                
              </div>
              <div className="department-body-header-order">
                <p className="department-title-order-employee"><span><FaClipboardList /></span>ຕຳແໜ່ງ</p>
                <p className="name-department-order-employee">Photographer*Developer</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailEmployee;
