import { AiFillStar } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import "./TransferInvoice.css";
import DataInvoice2 from "../data/DataInvoice2";
const TransferInvoice = () => {
  const { TransferId } = useParams();
  const Transfer = DataInvoice2.find((e) => e.id === parseInt(TransferId));
  const { id } = Transfer;
  const { image, name, department} = Transfer;

  const navigate = useNavigate();
  return (
    <div className="container-menu-right">
      <div className="container-report-invoice">
        {/*Header Deatil */}
        <div className="header-report-invoice">
          <div className="icon-report-invoice" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-report-invoice" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-report-invoice">Transfer</div>
        </div>
        {/*Body Deatil */}
        <div className="body-transfer-invoice">
          <div className="body-header-transfer-invoice">
            <div className="title-header-transfer-invoice">
              <img src={image} alt="Title" />
              <div className="name-and-department-transfer-invoice">
                <div className="name-transfer-invoice">{name}</div>
                <p className="department-transfer-invoice">{department}</p>
              </div>
            </div>
          </div>

          <div className="account-transfer-invoice">
            <div className="top-account-transfer-invoice">
              <p className="title-account-transfer-invoice">ເລກບັນຊີ</p>
              <p className="icon-account-transfer-invoice"><AiFillStar/></p>
              <p className="number-account-transfer-invoice"><span>1601200016873560001</span></p>
            </div>
            <div className="bottom-account-transfer-invoice">
              <p className="name-account-transfer-invoice">ຊື່ບັນຊີ</p>
              <p className="user-name-acctoun-transfer-invoice">{name}</p>
            </div>
          </div>
          <div className="body-center-transfer-invoice">
            <div className="amount-money-transfer-invoice">
              <p className="text-transfer-invoice">ຈຳນວນເງີນ</p>
              <p className="amount-transfer-invoice"><span>5,000,000</span></p>
              <p className="currency-transfer-invoice">₭ ( ກີບລາວ )</p>
            </div>
            <div className="order-account-transfer-invoice">
              <p className="order-transfer-invoice">ຈຳນວນອໍເດີ</p>
              <p className="amount-order-transfer-invoice">5</p>
            </div>
            <div className="times-account-transfer-invoice">
              <p className="text-time-transfer-invoice">ງວດທີ່</p>
              <p className="time-transfer-invoice">04/5</p>
            </div>
            <div className="times-account-transfer-invoice">
              <p className="text-time-transfer-invoice">ເລກບິນ</p>
              <p className="time-transfer-invoice">a68c7k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};                    
export default TransferInvoice;
