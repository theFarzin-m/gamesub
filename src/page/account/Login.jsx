import React, { useState } from "react";

import "./Login.css";
import { useForm } from "react-hook-form";

export default function Login() {
  const [singUp, setSingUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  if (window.innerWidth < 768) {
    return (
      <div className="container-xxl py-4">
        <form action="/" className="mb-4">
          <a
            href="/"
            className="custom-home-btn btn position-absolute top-0 end-0"
          >
            <span>خانه</span>
            <i className="bi bi-arrow-left ms-1"></i>
          </a>
          <h1 className="mb-3">ورود</h1>
          <div className="mb-2 form-floating w-100">
            <input
              type="text"
              placeholder="نام کاربری یا آدرس ایمیل"
              className="form-control"
              {...register("username", {
                required: "نام کاربری یا ایمیل حتما باید وارد شود",
              })}
            />
            <label className="form-label w-100  custom-required">
              نام کاربری یا آدرس ایمیل
            </label>
          </div>
          <div className="mb-2 form-floating w-100">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز"
              className="form-control"
              {...register("password", {
                required: "رمز نمیتواند کمتر از 8 کراکتر باشد",
                minLength: 8,
              })}
            />
            <label className="form-label w-100  custom-required">رمز</label>
          </div>
          <div className="d-flex align-items-center w-100">
            <span className="me-1">نمایش رمز</span>
            <input
              type="checkbox"
              onChange={() => setShowPassword((p) => !p)}
              checked={showPassword}
            />
          </div>
          <div>
            <a href="#" className="text-start w-100 fw-bold text-dark">
              فراموشی رمز
            </a>
          </div>
          <button className="btn btn-primary mt-3">تایید</button>
        </form>
        <hr />
        <form action="/">
          <h1 className="mb-3">ثبت نام</h1>
          <div className="mb-2 form-floating w-100">
            <input
              type="text"
              placeholder="نام کاربری"
              className="form-control"
              {...register("username", {
                required: "نام کاربری حتما باید وارد شود",
              })}
            />
            <label className="form-label w-100  custom-required">
              نام کاربری
            </label>
          </div>
          <div className="mb-2 form-floating w-100">
            <input
              type="email"
              placeholder="آدرس ایمیل"
              className="form-control"
              {...register("email", {
                required: "ایمیل حتما باید وارد شود",
              })}
            />
            <label className="form-label w-100  custom-required">
              آدرس ایمیل
            </label>
          </div>
          <div className="mb-2 form-floating w-100">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمزعبور"
              className="form-control"
              {...register("password", {
                required: "رمزعبور نمیتواند کمتر از 8 کراکتر باشد",
                minLength: 8,
              })}
            />
            <label className="form-label w-100  custom-required">
              رمز 
            </label>
          </div>
          <div className="mb-2 form-floating w-100">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="تکرار رمز "
              className="form-control"
              {...register("confirmation", {
                required: "تایید رمز عبور نمیتواند کمتر از 8 کراکتر باشد",
              })}
            />
            <label className="form-label w-100  custom-required">
              تکرار رمز 
            </label>
          </div>
          <div className="d-flex align-items-center w-100">
            <span className="me-1">نمایش رمز </span>
            <input
              type="checkbox"
              onChange={() => setShowPassword((p) => !p)}
              checked={showPassword}
            />
          </div>
          <button className="btn btn-primary mt-3">تکمیل ثبت نام</button>
        </form>
      </div>
    );
  }

  return (
    <div
      id="login"
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className={`login-container position-relative w-100 overflow-hidden ${
          singUp ? "right-panel-active" : ""
        }`}
      >
        <div
          className={`form-container sign-up-container col ${
            singUp ? "" : "opacity-0"
          }`}
        >
          <form action="/">
            <a
              href="/"
              className="custom-home-btn btn position-absolute top-0 end-0"
            >
              <span>خانه</span>
              <i className="bi bi-arrow-left ms-1"></i>
            </a>
            <h1>ورود</h1>
            <div className="mb-2 form-floating w-100">
              <input
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                className="form-control"
                {...register("username", {
                  required: "نام کاربری یا ایمیل حتما باید وارد شود",
                })}
              />
              <label className="form-label w-100  custom-required">
                نام کاربری یا آدرس ایمیل
              </label>
            </div>
            <div className="mb-2 form-floating w-100">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="رمز"
                className="form-control"
                {...register("password", {
                  required: "رمز نمیتواند کمتر از 8 کراکتر باشد",
                  minLength: 8,
                })}
              />
              <label className="form-label w-100  custom-required">
                رمز 
              </label>
            </div>
            <div className="d-flex align-items-center w-100">
              <span className="me-1">نمایش رمز </span>
              <input
                type="checkbox"
                onChange={() => setShowPassword((p) => !p)}
                checked={showPassword}
              />
            </div>
            <a href="#" className="text-start w-100 fw-bold text-dark">
              فراموشی رمز 
            </a>
            <button className="btn btn-primary mt-3">تایید</button>
          </form>
        </div>
        <div
          className={`form-container sign-in-container col ${
            singUp ? "opacity-0" : ""
          }`}
        >
          <form action="/">
            <a
              href="/"
              className="custom-home-btn btn position-absolute top-0 end-0"
            >
              <span>خانه</span>
              <i className="bi bi-arrow-left ms-1"></i>
            </a>
            <h1>ثبت نام</h1>
            <div className="mb-2 form-floating w-100">
              <input
                type="text"
                placeholder="نام کاربری"
                className="form-control"
                {...register("username", {
                  required: "نام کاربری حتما باید وارد شود",
                })}
              />
              <label className="form-label w-100  custom-required">
                نام کاربری
              </label>
            </div>
            <div className="mb-2 form-floating w-100">
              <input
                type="email"
                placeholder="آدرس ایمیل"
                className="form-control"
                {...register("email", {
                  required: "ایمیل حتما باید وارد شود",
                })}
              />
              <label className="form-label w-100  custom-required">
                آدرس ایمیل
              </label>
            </div>
            <div className="mb-2 form-floating w-100">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="رمز"
                className="form-control"
                {...register("password", {
                  required: "رمز نمیتواند کمتر از 8 کراکتر باشد",
                  minLength: 8,
                })}
              />
              <label className="form-label w-100  custom-required">
                رمز عبور
              </label>
            </div>
            <div className="mb-2 form-floating w-100">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="تکرار رمز"
                className="form-control"
                {...register("confirmation", {
                  required: "تایید رمز نمیتواند کمتر از 8 کراکتر باشد",
                })}
              />
              <label className="form-label w-100  custom-required">
                تکرار رمز
              </label>
            </div>
            <div className="d-flex align-items-center w-100">
              <span className="me-1">نمایش رمز</span>
              <input
                type="checkbox"
                onChange={() => setShowPassword((p) => !p)}
                checked={showPassword}
              />
            </div>
            <button className="btn btn-primary mt-3">تکمیل ثبت نام</button>
          </form>
        </div>
        <br />
        <div className="overlay-container col">
          <div className="overlay-content">
            <div className="overlay-panel overlay-right">
              <h1>سلام رفیق</h1>
              <p>اطلاعات خواسته شده را وارد کن و بازی ها را فارسی تجربه کن</p>
              <button
                className="ghost btn btn-primary"
                id="signUp"
                onClick={() => setSingUp(true)}
              >
                قبلا ثبت نام کرده‌ام
              </button>
            </div>
            <div className="overlay-panel overlay-left">
              <h1 className="fs-3">خوشحالم دوباره میبنمت</h1>
              <p>لطفا اطلاعات خواسته شده را وارد کن و وارد شو</p>
              <button
                className="ghost btn btn-primary"
                id="signIn"
                onClick={() => setSingUp(false)}
              >
                قبلا ثبت نام نکرده‌ام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
