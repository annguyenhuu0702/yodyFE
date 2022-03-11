import React, { useState } from "react";
import "../Login/_account.scss";
import { Link } from "react-router-dom";
import Input from "../../Components/InputField/Input";

const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [passWord, setPassWord] = useState();
  const [showPass, setShowPass] = useState(false);
  const plahoder = {
    firstName: "Tên",
    lastName: "Họ",
    phoneNumber: "Số điện thoại",
    email: "Địa chỉ email",
    password: "Mật khẩu",
  };

  return (
    <div className="page-content-account">
      <div className="container">
        <div className="d-group">
          <div className="group-account">
            <h2>
              <Link to="/account/login">
                <img
                  src="//bizweb.dktcdn.net/100/438/408/themes/848101/assets/back_page.svg?1646961127726"
                  alt=""
                />
              </Link>
              ĐĂNG KÝ THÀNH VIÊN MỚI
            </h2>
            <form className="account-form">
              <div className="row">
                <div className="col-lg-6 col-left">
                  <div className="form-group">
                    <Input
                      classStyle="form-control"
                      inputType="text"
                      data={firstName}
                      setData={setFirstName}
                      placeholder={plahoder.firstName}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <Input
                      classStyle="form-control"
                      inputType="text"
                      data={lastName}
                      setData={setLastName}
                      placeholder={plahoder.lastName}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Input
                  classStyle="form-control"
                  inputType="text"
                  data={phoneNumber}
                  setData={setPhoneNumber}
                  placeholder={plahoder.phoneNumber}
                />
              </div>
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
                <div className="form-group">
                  <Input
                    classStyle="form-control"
                    inputType="password"
                    data={passWord}
                    setData={setPassWord}
                    placeholder={plahoder.password}
                    showPass={showPass}
                  />
                </div>
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
              <button className="btn-login register" type="">
                Đăng ký
              </button>
            </form>
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

export default Register;
