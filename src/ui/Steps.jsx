import React, { useRef, useState } from "react";

import "./Steps.css";

export default function Steps() {
  const [steps, setSteps] = useState(5);
  const stepsObject = [
    {
      num: 1,
      head: "خرید محصول",
      text: "محصول را به سبد خرید خود اضافه کرده و مراحل پرداخت را تکمیل کنید.",
    },
    {
      num: 2,
      head: "دانلود فارسی ساز",
      text: 'به بخش "دانلودها" موجود در پروفایل کاربری خود رفته و محصول را دانلود کنید.',
    },
    {
      num: 3,
      head: "نصب فارسی ساز",
      text: "فارسی ساز را مطابق راهنمای موجود در صفحه ی محصول نصب کنید.",
    },
    {
      num: 4,
      head: "فعال کردن زیرنویس",
      text: "به داخل بازی رفته و از تنظیمات آن گزینه ی زیرنویس را فعال کنید.",
    },
    { num: 5, head: "پایان!", text: "ازبازی بذت ییرید!" },
  ];

  return (
    <div className="custom-steps container-xxl d-none d-lg-block">
      <ul className="row text-light g-0 list-unstyled">
        <li
          className={`custom-start-end  my-auto ${steps > 0 && "active"} `}
        ></li>
        {stepsObject.map((step) => (
          <li
            key={step.num}
            className={`custom-step col text-center ${
              steps >= step.num && "active"
            }`}
          >
            <div className="custom-line z-n1" />
            <div className="custom-vertical-line z-n1" />
            <div className="custom-text text-secondary text-start position-absolute">
              <h3 className="fs-5"> {step.head} </h3>
              <p> {step.text} </p>
            </div>
            <span
              className="custom-number d-inline-flex justify-content-center align-items-center px-3 py-2 rounded-circle"
              onClick={() =>
                setSteps(() => (steps == step.num ? step.num - 1 : step.num))
              }
            >
              {steps <= step.num ? (
                step.num
              ) : (
                <i className="bi bi-check fs-4"></i>
              )}
            </span>
          </li>
        ))}
        <li
          className={`custom-start-end my-auto ${steps == 5 && "active"}`}
        ></li>
      </ul>
    </div>
  );
}
