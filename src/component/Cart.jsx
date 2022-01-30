import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePro } from "../redux/actions/cart";
const Cart = () => {
  const proOrder = useSelector((state) => state.cart.data);
  const number = useSelector((state) => state.cart.cartNumber);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(removePro(item));
  };
  const infoCart = () => {
    return (
      <div className="container">
        <div className="text-center">
          <h4>Giỏ Hàng của bạn</h4>
          <p>Hiện đang có {number} sản phẩm</p>
        </div>
        <div className="row item-info-order">
          <div className="col-1"></div>
          <div className="col-6"></div>
          <div className="col-3">
            <strong>Số lượng</strong>
          </div>
          <div className="col-2">
            <strong>Số tiền</strong>
          </div>
        </div>
        {proOrder.map((item) => (
          <div className="row item-info-order">
            <div className="col-2 img-ordered-pro">
              <img src={item.image} alt="" />
            </div>
            <div className="col-5">
              <small>
                Mã sản phẩm : {item.id}-{item.size}
              </small>
              <p>{item.title}</p>
              <button
                className="btn-remove-pro"
                onClick={() => handleRemove(item)}
              >
                Remove
              </button>
            </div>
            <div className="col-3 quantity-pro-order">
              <input type="number" value={item.quantity} />
            </div>
            <div className="col-2">
              <span>{item.price * item.quantity}</span>
              <u className="ps-1">đ</u>
            </div>
          </div>
        ))}
        <div className="row pt-3 pb-3">
          <div className="col-2"></div>
          <div className="col-3"></div>
          <div className="col-3"></div>
          <div className="col-4">
            <strong>Tổng tiền : </strong>
            <span>{total}</span>
            <u className="ps-1">đ</u>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center actions-order mt-2">
          <Link to="/">TIẾP TỤC MUA SẮM</Link>
          <Link to="/payment">
            <button className="btn-pay-now">THANH TOÁN NGAY</button>
          </Link>
        </div>
      </div>
    );
  };
  const emtyCart = () => {
    return (
      <div className="container">
        <div className="text-center empty-cart">
          <h4>Giỏ Hàng của bạn</h4>
          <p>Không có sản phẩm nào trong giỏ hàng!</p>
          <Link to="/" className="undo-buy-pro">
            <i class="bx bx-undo"></i>
            <span>Tiếp tục mua hàng</span>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="info-cart">{number !== 0 ? infoCart() : emtyCart()}</div>
  );
};

export default Cart;
