import "./setting.css";
const SettingDetail = () => {
  return (
    <div className="container-setting">
      <div className="title-setting">ຕັ້ງຄ່າ</div>
      <div className="content-setting">
        <div className="language-setting">
          <p className="text-language">ພາສາ</p>
          <div className="option-language">
            <select>
              <option value="ກີບລາວ">ລາວ</option>
              <option value="บาดไทย">ไทย</option>
              <option value="dollar">English</option>
            </select>
          </div>
        </div>

        <div className="currency-setting">
          <p className="text-currency">ສະກຸນເງີນ</p>
          <div className="option-currency">
            <select>
            <option value="ກີບລາວ">₭ (ກີບລາວ)</option>
              <option value="บาดไทย">฿ (บาดไทย)</option>
              <option value="dollar">$ (dollar)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="setting-user">
        <div className="image-user-setting">
            <img src="https://cdn.pixabay.com/photo/2022/07/04/04/37/musician-7300353__340.jpg" alt="1"/>
        </div>
        <div className="name-user-setting">
            <h3>Bounmy Xaypanya</h3>
            <p>#Someting</p>
        </div>
      </div>
    </div>
  );
};
export default SettingDetail;
