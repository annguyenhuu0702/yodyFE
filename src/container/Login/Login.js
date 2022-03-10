import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_login.scss";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();

  return (
    <div className="page-login">
      <div className="container">
        <div className="login-content">
          <div className="group-login">
            <h2>ĐĂNG NHẬP</h2>
            <form className="login-form">
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  type="text"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type={showPass ? "text" : "password"}
                  value={passWord}
                  placeholder="Mật khẩu"
                  onChange={(e) => {
                    setPassWord(e.target.value);
                  }}
                />

                <span
                  className="show-pass"
                  onClick={() => setShowPass(!showPass)}
                >
                  <i className="fa-solid fa-eye"></i>
                </span>
              </div>
              <div className="btn-login">
                <button className="login" type="">
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="forgot">
              <a href=" " className="forgot-text left">
                Quên mật khẩu
              </a>
              <Link to="/account/register" className="forgot-text right">
                Đăng ký
              </Link>
            </div>
            <div className="social-login">
              <p className="social-text">
                <span>--- Hoặc ---</span>
              </p>
              <div className="login-with">
                <a href=" " className="with-facebook">
                  <img
                    className="w-25"
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                    alt=""
                  />
                </a>
                <a href=" " className="with-google">
                  <img
                    className="w-25"
                    src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
