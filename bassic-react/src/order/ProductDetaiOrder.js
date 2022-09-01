import { useNavigate, useParams } from "react-router-dom";
import DataOrder from "../data/DataOrder";
import { AiFillStar } from "react-icons/ai";
const ProductDetailOrder = () => {
  const { orderId } = useParams();
  const singleProduct = DataOrder.find(
    (product) => product.id === parseInt(orderId)
  );
  const { image, title, star, amountstart, price,subimage1,subimage2,subimage3 } = singleProduct;

  const navigate = useNavigate();
  return (
    <div className="container-menu-right">
      <div className="container-product-detail-order">
        <div className="header-product-detail-order">
          <div className="icon-order" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-order" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-order">Service detaill</div>
        </div>
        <div className="body-product-detail-order">
          <div className="item-product-detail-order">
            <div className="content-left-product-detail-order">
              <img src={image} alt={title} />
            </div>
            <div className="content-right-product-detail-order">
              <h2>{title}</h2>
              <div className="star-order">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                {star}
                <span className="user-star-order">({amountstart})</span>
              </div>
              <div className="price-product-detail-order">
                <p>ລາຄ່າເລີ່ມຕົ້ນ</p>
                <p>$ {price}</p>
              </div>
              <div className="list-image-product-detail-order">
                <img src={subimage1} alt="gg" className="list-image" />
                <img src={subimage2} alt="gg" className="list-image" />
                <img src={subimage3} alt="gg" className="list-image" />
              </div>
            </div>
          </div>
          <div className="text-product-detail-order">
            <h2>ກ່ຽວກັບ</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit . Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
            </p>
            <hr />
            <div className="service-provider-order">
              <h2>ຜູ້ໃຫ້ບໍລິການ</h2>
              <div>
                <p>Bounmy xaypanya</p>
                <p>ໄຊທານີ, ນະຄອນຫລວງ</p>
                <p>030 95 088 23</p>
              </div>
            </div>
            <hr />
            <div className="service-type-order">
              <h2>ປະເພດບໍລິການ</h2>
              <p>ຖ່າຍພາບ</p>
            </div>
            <hr />
            <div className="service-detail-order">
              <h2>ລາຍລະອຽດການບໍລິການ</h2>
              <div>
                <p>ຊ່າງພາບ 2 ຄົນ</p>
                <p>ໄລຍະເວລາ 1 ວັນ</p>
              </div>
            </div>
            <hr />
            <div className="scope-service-order">
              <h2>ຂອບເຂດບໍລິການ</h2>
              <div>
                <p>ໄຊທານີ, ສີສັດຕະນາດ</p>
                <p>ໄຊເສາດຖາ, ສີໂຄດຕະບອງ</p>
              </div>
            </div>
            <hr/>
            <div className="total-order">
              <p>ລາຄ່າລວມ : <span>K 190.000</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailOrder;
