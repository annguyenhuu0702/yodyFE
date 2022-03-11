import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/InputField/Input";
import "./_account.scss";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();

  let plahoder = {
    email: "Email",
    password: "Mật khẩu",
  };

  return (
    <div className="page-content-account">
      <div className="container">
        <div className="d-group">
          <div className="group-account">
            <h2>ĐĂNG NHẬP</h2>
            <form className="account-form">
              <div className="form-group">
                <Input
                  classStyle="form-control"
                  inputType="text"
                  data={email}
                  setData={setEmail}
                  placeholder={plahoder.email}
                />
              </div>
              <div className="form-group">
                <Input
                  classStyle="form-control"
                  inputType="password"
                  data={passWord}
                  setData={setPassWord}
                  placeholder={plahoder.password}
                  showPass={showPass}
                />
                <span
                  className="show-pass"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
              <button className="btn-login" type="">
                Đăng nhập
              </button>
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
  );
};

export default Login;
