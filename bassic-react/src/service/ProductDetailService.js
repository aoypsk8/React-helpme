import { useNavigate, useParams } from "react-router-dom";
import DataService from "../data/DataService";
import { AiFillStar } from "react-icons/ai";
const ProductDetailService = () => {
  const { productId } = useParams();
  const singleProduct = DataService.find(
    (product) => product.id === parseInt(productId)
  );
  const { image, title, star, amountstart, price,subimage1,subimage2,subimage3 ,user,addressDistrict,addressProvince,phone} = singleProduct;

  const navigate = useNavigate();
  return (
    <div className="container-menu-right">
      <div className="container-product-detail-service">
        <div className="header-product-detail-service">
          <div className="icon-service" onClick={() => navigate(-1)}>
            ==
          </div>
          <div className="icon-service" onClick={() => navigate(+1)}>
            ==
          </div>
          <div className="title-service">Service detaill</div>
        </div>
        <div className="body-product-detail-service">
          <div className="item-product-detail-service">
            <div className="content-left-product-detail-service">
              <img src={image} alt={title} />
            </div>
            <div className="content-right-product-detail-service">
              <h2>{title}</h2>
              <div className="star-service">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                {star}
                <span className="user-star-service">({amountstart})</span>
              </div>
              <div className="price-product-detail-service">
                <p>ລາຄ່າເລີ່ມຕົ້ນ</p>
                <p>$ {price}</p>
              </div>
              <div className="list-image-product-detail-service">
                <img src={subimage1} alt="gg" className="list-image" />
                <img src={subimage2} alt="gg" className="list-image" />
                <img src={subimage3} alt="gg" className="list-image" />
              </div>
            </div>
          </div>
          <div className="text-product-detail-service">
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
            <div className="service-provider-service">
              <h2>ຜູ້ໃຫ້ບໍລິການ</h2>
              <div>
                <p>{user}</p>
                <p>{addressDistrict}, {addressProvince}</p>
                <p>{phone}</p>
              </div>
            </div>
            <hr />
            <div className="service-type-service">
              <h2>ປະເພດບໍລິການ</h2>
              <p>ຖ່າຍພາບ</p>
            </div>
            <hr />
            <div className="service-detail-service">
              <h2>ລາຍລະອຽດການບໍລິການ</h2>
              <div>
                <p>ຊ່າງພາບ 2 ຄົນ</p>
                <p>ໄລຍະເວລາ 1 ວັນ</p>
              </div>
            </div>
            <hr />
            <div className="scope-service-service">
              <h2>ຂອບເຂດບໍລິການ</h2>
              <div>
                <p>ໄຊທານີ, ສີສັດຕະນາດ</p>
                <p>ໄຊເສາດຖາ, ສີໂຄດຕະບອງ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailService;
