import React from "react";
const Login = () => {
  return (
    <div>
      <div className="account-sign">
        <div className="btn-sign">
          <p className="title-assign">Đăng nhập</p>
          <p>Email</p>
          <input type="email" placeholder="Nhập email" className="w-100" />
          <p>Mật khẩu</p>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-100"
          />
          <button className="mt-4 btn-sign-in">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
