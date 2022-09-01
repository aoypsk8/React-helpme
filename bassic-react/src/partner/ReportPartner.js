import { useNavigate,useParams } from "react-router-dom";
import DataCustomer1 from "../data/DataCustomer1";
import { BsArrowLeftRight } from "react-icons/bs";
import './ReportPartner.css'

const ReportPartner = () => {
  const { reportpartnerId } = useParams();
  const Detail = DataCustomer1.find(
    (element) => element.id === parseInt(reportpartnerId)
  );
  const {image,name,email}=Detail;
  const navigate = useNavigate();

  return (
    <div className="container-menu-right">
      <div className="container-report-partner1">
        {/*Header Deatil */}
        <div className="header-report-partner1">
          <div className="icon-report-partner1" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-report-partner1" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-report-partner1">Report</div>
        </div>
        <div className="container-body-report-partner1">
          <div className="body-header-report-partner1">
            <div className="title-header-report-partner1">
              <img src={image} alt="Title" />
              <div className="name-and-department-report-partner1">
                <div className="name-report-partner1">{name}</div>
                <p className="department-report-partner1">{email}</p>
              </div>
            </div>
          </div>

          {/*body */}
          <div className="body-body-report-partner1">
            <div className="input-title-report-partner1">
              <div className="container-lable-report">
                <label>ລາຍງານເລື່ອງ</label>
              </div>
              <div className="container-input-report">
                <input type="text" placeholder="ພິມຊື່ເລື່ອງລາຍງານ..." />
              </div>
            </div>
            <div className="input-text-report-partner1">
              <textarea name="message" placeholder="ພິມລາຍງານ..." />
{/*footttttttttttttttttttttttttttttttttttttttttttttttttttter*/ }
              <div className="body-footer-report-partner1">
                <div className="top-footer-report-partner1">
                  <div className="left-footer-report-partner1">
                    <div className="title-footer-report-partner1">
                      <p>ລະຫັດ</p>
                      <p className="pp">ພະນັກງານ</p>
                    </div>
                    <div className="password-footer-report-partner1">
                      <p>#xxx xxx</p>
                    </div>
                  </div>
                  <div className="right-footer-report-partner1">
                    <div className="cancel-footer-report-partner1">
                      <span>X</span>
                      <p>ຍົກເລີກ</p>
                    </div>
                    <div className="send-footer-report-partner1">
                      <span>
                        <BsArrowLeftRight />
                      </span>
                      <p>ສົ່ງລາຍງານ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="forget-password-report-partner1">
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
export default ReportPartner;
