import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Location from "./Location";
import { successOrder } from "../redux/actions/cart";

const Payment = () => {
  const dispatch = useDispatch();
  const [payment, setPayment] = useState("0");
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.data);
  const provisional = useSelector((state) => state.cart.total);
  const [ship, setShip] = useState(0);
  const changeStatusPayment = (e) => {
    setPayment(e.target.value);
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    address: {
      street: "",
      ward: "",
      district: "",
      province: "",
    },
    phone: "",
    product: products,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleDiscount = () => {
    data.current = 10;
    console.log(data.current);
  };
  const handleSendData = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    newData.product = products;
    setData(newData);
  };
  const handleAddress = (e) => {
    const newAddress = { ...data };
    newAddress.address[e.target.id] = e.target.value;
    setData(newAddress);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(successOrder());
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="check-out">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6 info-customer">
            <form action="" onSubmit={handleSubmit}>
              <h4>Thông tin thanh toán</h4>
              <input
                type="text"
                className="name-customer w-100 mb-3"
                placeholder="Họ và tên"
                onChange={(e) => handleSendData(e)}
                id="name"
              />
              <input
                type="text"
                className="name-customer w-100"
                placeholder="Email"
                onChange={(e) => handleSendData(e)}
                id="email"
              />
              <div className="row mt-3 mb-3 gx-2">
                <div className="col-lg-8 col-md-6">
                  <input
                    type="text"
                    className="address-customer w-100"
                    placeholder="Địa chỉ"
                    onChange={(e) => handleAddress(e)}
                    id="street"
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input
                    type="text"
                    className="number-phone w-100"
                    placeholder="Số điện thoại"
                    onChange={(e) => handleSendData(e)}
                    id="phone"
                  />
                </div>
              </div>
              <Location setShip={setShip} setData={setData} data={data} />
              <div
                className="transaction mt-4"
                onChange={(e) => changeStatusPayment(e)}
              >
                <h4>Phương thức thanh toán</h4>
                <label className="d-block mt-3">
                  <input
                    type="radio"
                    name="transaction"
                    id=""
                    value="0"
                    checked={payment === "0"}
                  />
                  Thanh toán tại nhà
                </label>
                <label>
                  <input type="radio" name="transaction" id="" value="1" />
                  Chuyển khoản qua ngân hàng
                </label>
                <div
                  className={
                    payment === "0"
                      ? "slideUp text-center slide-content"
                      : "slideDown text-center slide-content"
                  }
                >
                  <h5>NGÂN HÀNG TECHCOMBANK</h5>
                  <small>Số tài khoản: 19032733073012</small>
                  <h6>Chủ tài khoản: NGUYỄN ĐỨC DƯƠNG</h6>
                  <p>
                    Nội dung chuyển khoản quý khách vui lòng điền theo cú pháp:
                    "ID đơn hàng (đã được gửi tới mail) + Họ và tên"
                  </p>
                  <p>
                    Sau khi giao dịch, bạn chụp ảnh màn hình bill thanh toán và
                    liên hệ bộ phận chăm sóc khách hàng để được xác nhận thành
                    công. Candles sẽ liên hệ lại trong giờ hành chính, tối đa
                    không quá 12 tiếng. Quý khách vui lòng để ý điện thoại để
                    xác nhận đơn hàng.
                  </p>
                  <p>
                    Xin chân thành cảm ơn quý khách đã tin tưởng và đặt hàng tại
                    Candles !
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to="/cart">
                    <i class="bx bx-chevron-left"></i>
                    Giỏ hàng
                  </Link>
                  <button className="btn-complete-payment" type="submit">
                    HOÀN TẤT THANH TOÁN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className=" info-pay-pro">
              {products.map((item, index) => (
                <div
                  className="d-flex img-order-payment align-items-center mb-2"
                  key={index}
                >
                  <img src={item.image} alt="" />
                  <span>{item.title}</span>
                </div>
              ))}
              <div className="pt-2 pb-2 d-flex justify-content-between">
                <input type="text" placeholder="Mã giảm giá" className="w-75" />
                <button className="btn-use-discount" onClick={handleDiscount}>
                  Sử dụng
                </button>
              </div>
              <div className="d-flex justify-content-between pb-2">
                <span>Tạm tính</span>
                <strong>{provisional} đ</strong>
              </div>
              <div className="d-flex justify-content-between pt-2 pb-2">
                <span>Phí vận chuyển</span>
                <strong>{ship} đ</strong>
              </div>
              <div className="d-flex justify-content-between">
                <p>Tổng cộng</p>
                <p className="totalize">{ship + provisional} đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
