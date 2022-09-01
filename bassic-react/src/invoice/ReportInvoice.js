import { useParams, useNavigate } from "react-router-dom";
import "./ReportInvoice.css";
import DataInvoice1 from "../data/DataInvoice1";
import { BsArrowLeftRight } from "react-icons/bs";

const ReportInvoice = () => {
  const { ReportId } = useParams();
  const Report = DataInvoice1.find(
    (element) => element.id === parseInt(ReportId)
  );
  const { image, name, department } = Report;
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
          <div className="title-report-invoice">Report</div>
        </div>
        <div className="container-body-report-invoice">
          <div className="body-header-report-invoice">
            <div className="title-header-report-invoice">
              <img src={image} alt="Title" />
              <div className="name-and-department-report-invoice">
                <div className="name-report-invoice">{name}</div>
                <p className="department-report-invoice">{department}</p>
              </div>
            </div>
          </div>
          <div className="body-body-report-invoice">
            <div className="input-title-report-invoice">
              <div className="container-lable-report">
                <label>ລາຍງານເລື່ອງ</label>
              </div>
              <div className="container-input-report">
                <input type="text" placeholder="ພິມຊື່ເລື່ອງລາຍງານ..." />
              </div>
            </div>
            <div className="input-text-report-invoice">
              <textarea name="message" placeholder="ພິມລາຍງານ..." />
{/*footttttttttttttttttttttttttttttttttttttttttttttttttttter*/ }
              <div className="body-footer-report-invoice">
                <div className="top-footer-report-invoice">
                  <div className="left-footer-report-invoice">
                    <div className="title-footer-report-invoice">
                      <p>ລະຫັດ</p>
                      <p className="pp">ພະນັກງານ</p>
                    </div>
                    <div className="password-footer-report-invoice">
                      <p>#xxx xxx</p>
                    </div>
                  </div>
                  <div className="right-footer-report-invoice">
                    <div className="cancel-footer-report-invoice">
                      <span>X</span>
                      <p>ຍົກເລີກ</p>
                    </div>
                    <div className="send-footer-report-invoice">
                      <span>
                        <BsArrowLeftRight />
                      </span>
                      <p>ສົ່ງລາຍງານ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="forget-password-report-invoice">
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
export default ReportInvoice;
