import { useNavigate, useParams } from "react-router-dom";
import "./InvoiceDetail.css";
import DataInvoice1 from "../data/DataInvoice1";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";


const InvoiceDetail = () => {
  const { invoiceId } = useParams();
  const Detail = DataInvoice1.find(
    (element) => element.id === parseInt(invoiceId)
  );
  const { image, name, department} = Detail;
  const navigate = useNavigate();

  return (
    <div className="container-menu-right">
      <div className="container-invoice-detail">
        {/*Header Deatil */}
        <div className="header-invoice-detail">
          <div className="icon-invoice" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-invoice" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-invoice">Invoice</div>
        </div>
        {/*Body Deatil */}
        <div className="body-invoice-detail">
          <div className="body-header-invoice-detail">
            <div className="title-header-invoice-detail">
              <img src={image} alt="Title" />
              <div className="name-and-department-invoice-detail">
                <div className="name-invoice-detail">{name}</div>
                <p className="department-invoice-detail">{department}</p>
              </div>
            </div>
            <div className="edit-profile-invoice-detail"># ແກ້ໄຂ</div>
          </div>

          <div className="account-invoice-detail">
            <div className="top-account-invoice-detail">
              <p className="title-account-invoice-detail">ເລກບັນຊີ</p>
              <p className="icon-account-invoice-detail"><AiFillStar/></p>
              <p className="number-account-invoice-detail"><span>1601200016873560001</span></p>
            </div>
            <div className="bottom-account-invoice-detail">
              <p className="name-account-invoice-detail">ຊື່ບັນຊີ</p>
              <p className="user-name-acctoun-invoice-detail">{name}</p>
            </div>
          </div>
          <div className="body-center-invoice-detail">
            <div className="amount-money-invoice-detail">
              <p className="text-invoice-detail">ຈຳນວນເງີນ</p>
              <p className="amount-invoice-detail"><span>5,000,000</span></p>
              <p className="currency-invoice-detail">₭ ( ກີບລາວ )</p>
            </div>
            <div className="order-account-invoice-detail">
              <p className="order-invoice-detail">ຈຳນວນອໍເດີ</p>
              <p className="amount-order-invoice-detail">5</p>
            </div>
            <div className="times-account-invoice-detail">
              <p className="text-time-invoice-detail">ງວດທີ່</p>
              <p className="time-invoice-detail">04/5</p>
            </div>
          </div>
          <div className="body-footer-invoice-detail">
            <div className="top-footer-invoice-detail">
              <div className="left-footer-invoice-deail">
                <div className="title-footer-invoice-detail">
                  <p>ລະຫັດ</p>
                  <p className="pp">ພະນັກງານ</p>
                </div>
                <div className="password-footer-invoice-detail">
                  <p>#xxx xxx</p>
                </div>
              </div>
              <div className="right-footer-invoice-detail">
                <div className="cancel-footer-invoice-detail"><span>X</span><p>ຍົກເລີກ</p></div>
                <div className="transfer-footer-invoice-detail"><span><BsArrowLeftRight/></span><p>ໂອນເງີນ</p></div>
              </div>
            </div>
          </div>
          <div className="forget-password-invoice-detail">
            <p>ລະຫັດບໍ່ຖືກ <div className="back">/</div> <span>ລະຫັດຖືກຕ້ອງ</span></p> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceDetail;
