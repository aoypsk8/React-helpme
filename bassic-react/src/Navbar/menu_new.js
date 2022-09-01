import { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { FiLogOut } from "react-icons/fi";

const Menu = () => {
  const [openBooking, setOpenBooking] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [opentExport, setOpenExport] = useState(false);
  return (
    <div className="menu">
      <div className="Web">
        <div className="web-title">Web</div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-web">
              <div className="icon-web">
                <FiLogOut />
              </div>
              <div className="web-menu">Home</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-web">
              <div className="icon-web">
                <FiLogOut />
              </div>
              <div className="web-menu">Admin</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-web">
              <div className="icon-web">
                <FiLogOut />
              </div>
              <div className="web-menu">User</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-web">
              <div className="icon-web">
                <FiLogOut />
              </div>
              <div className="web-menu">Hotel</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-web">
              <div className="icon-web">
                <FiLogOut />
              </div>
              <div className="web-menu">Reviewer</div>
            </div>
          </Link>
        </div>
      </div>
      {/*===============General=================== */}
      <div className="General">
        <div className="general-title">General</div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-general">
              <div className="icon-general">
                <FiLogOut />
              </div>
              <div className="general-menu">Banner</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" style={{ textDecoration: "none" }}>
            <div className="sub-general">
              <div className="icon-general">
                <FiLogOut />
              </div>
              <div className="general-menu">Notification</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="Manage-Booking">
        <div className="booking-title">Manage Booking</div>
        <div
          className={
            openBooking ? "sidebar-item-booking open" : "sidebar-item-booking"
          }
        >
          <div onClick={() => setOpenBooking(!openBooking)}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-bookings">
                <div className="icon-bookings">
                  <FiLogOut />
                </div>
                <div className="bookings-menu">Booking</div>
              </div>
            </Link>
          </div>
          {/* =====================================*/}
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-booking">
                <div className="icon-booking">
                  <FiLogOut />
                </div>
                <div className="booking-menu">Invoice</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-booking">
                <div className="icon-booking">
                  <FiLogOut />
                </div>
                <div className="booking-menu">Confirm booking</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-booking">
                <div className="icon-booking">
                  <FiLogOut />
                </div>
                <div className="booking-menu">new booking</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-booking">
                <div className="icon-booking">
                  <FiLogOut />
                </div>
                <div className="booking-menu">Bookings</div>
              </div>
            </Link>
          </div>
          {/* =====================================*/}

          <div>
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-bookings">
                <div className="icon-bookings">
                  <FiLogOut />
                </div>
                <div className="bookings-menu">Service</div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-bookings">
                <div className="icon-bookings">
                  <FiLogOut />
                </div>
                <div className="bookings-menu">Status</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="Unit">
        <div className="unit-title">Manage Booking</div>
        <div
          className={
            openReport ? "sidebar-item-unit open" : "sidebar-item-unit"
          }
        >
          <div onClick={() => setOpenReport(!openReport)}>
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-units">
                <div className="icon-units">
                  <FiLogOut />
                </div>
                <div className="units-menu">Report</div>
              </div>
            </Link>
          </div>

          {/* =====================================*/}
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-unit">
                <div className="icon-unit">
                  <FiLogOut />
                </div>
                <div className="unit-menu">booking</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-unit">
                <div className="icon-unit">
                  <FiLogOut />
                </div>
                <div className="unit-menu">hotel</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-unit">
                <div className="icon-unit">
                  <FiLogOut />
                </div>
                <div className="unit-menu">reviewer</div>
              </div>
            </Link>
          </div>
          <div className="sidebar-content">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-unit">
                <div className="icon-unit">
                  <FiLogOut />
                </div>
                <div className="unit-menu">top view</div>
              </div>
            </Link>
          </div>
          {/*============================================== */}
          <div
            className={
              opentExport ? "sidebar-item-unit open" : "sidebar-item-unit"
            }
          >
            <div onClick={() => setOpenExport(!opentExport)}>
              <Link to="#" style={{ textDecoration: "none" }}>
                <div className="sub-units">
                  <div className="icon-units">
                    <FiLogOut />
                  </div>
                  <div className="units-menu">Export</div>
                </div>
              </Link>
            </div>

            <div className="sidebar-content">
              <Link to="#" style={{ textDecoration: "none" }}>
                <div className="sub-unit">
                  <div className="icon-unit">
                    <FiLogOut />
                  </div>
                  <div className="unit-menu">top view</div>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="#" style={{ textDecoration: "none" }}>
              <div className="sub-units">
                <div className="icon-units">
                  <FiLogOut />
                </div>
                <div className="units-menu">Role</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
