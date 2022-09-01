import "./ItemPayment.css";
const ItemPayment1 = (props) => {
  const { data } = props;
  return (
    <div className="container-item-payment">
        {/*++++++++++++++++++=======++++++ */}
        {/*++++++++++++++++++=======++++++ */}
        {/*++++++++++++++++++=======++++++ */}
        {/*++++++++++++++++++=======++++++ */}
        <div className="Item-payment">
          <div className="title-item-payment">
            <div className="title-icon"><p>{data.icon}</p></div>
            <div className="title-title">
              <p className="title-title-item P1">{data.title}</p>
            </div>
          </div>
          <div className="payer-item-payment">
            <p className="name-payer-item P1">{data.payer}</p>
            <p className="phone-payer-item P2">{data.payerPhone}</p>
          </div>
          <div className="receiver-item-payment">
            <p className="name-receiver-item P1">{data.receiver}</p>
            <p className="department-receiver-item P2">{data.department}</p>
          </div>
          <div className="money-item-payment">
            <p className="money-item P1">₭ {data.money}</p>
            <p className="money-item P2">ເລກບິນ {data.bill}</p>
          </div>
          <div className="time-item-payment">
            <p className="time-item P1">{data.time}</p>
            <p className="date-item P2">{data.date}</p>
          </div>
        </div>
    </div>
  );
};
export default ItemPayment1;
