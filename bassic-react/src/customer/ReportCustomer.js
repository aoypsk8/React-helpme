import { useNavigate,useParams } from "react-router-dom";
import DataCustomer1 from "../data/DataCustomer1";
import { BsArrowLeftRight } from "react-icons/bs";
import './ReportCustomer.css'

const ReportCustomer = () => {
  const { reportcustomerId } = useParams();
  const Detail = DataCustomer1.find(
    (element) => element.id === parseInt(reportcustomerId)
  );
  const {image,name,email}=Detail;
  const navigate = useNavigate();

  return (
    <div className="container-menu-right">
      <div className="container-report-customer">
        {/*Header Deatil */}
        <div className="header-report-customer">
          <div className="icon-report-customer" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-report-customer" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-report-customer">Report</div>
        </div>
        <div className="container-body-report-customer">
          <div className="body-header-report-customer">
            <div className="title-header-report-customer">
              <img src={image} alt="Title" />
              <div className="name-and-department-report-customer">
                <div className="name-report-customer">{name}</div>
                <p className="department-report-customer">{email}</p>
              </div>
            </div>
          </div>

          {/*body */}
          <div className="body-body-report-customer">
            <div className="input-title-report-customer">
              <div className="container-lable-report">
                <label>ລາຍງານເລື່ອງ</label>
              </div>
              <div className="container-input-report">
                <input type="text" placeholder="ພິມຊື່ເລື່ອງລາຍງານ..." />
              </div>
            </div>
            <div className="input-text-report-customer">
              <textarea name="message" placeholder="ພິມລາຍງານ..." />
{/*footttttttttttttttttttttttttttttttttttttttttttttttttttter*/ }
              <div className="body-footer-report-customer">
                <div className="top-footer-report-customer">
                  <div className="left-footer-report-customer">
                    <div className="title-footer-report-customer">
                      <p>ລະຫັດ</p>
                      <p className="pp">ພະນັກງານ</p>
                    </div>
                    <div className="password-footer-report-customer">
                      <p>#xxx xxx</p>
                    </div>
                  </div>
                  <div className="right-footer-report-customer">
                    <div className="cancel-footer-report-customer">
                      <span>X</span>
                      <p>ຍົກເລີກ</p>
                    </div>
                    <div className="send-footer-report-customer">
                      <span>
                        <BsArrowLeftRight />
                      </span>
                      <p>ສົ່ງລາຍງານ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="forget-password-report-customer">
                <p>
                  ລະຫັດບໍ່ຖືກ <div className="back">/</div>{" "}
                  <span>ລະຫັດຖືກຕ້ອງ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportCustomer;
