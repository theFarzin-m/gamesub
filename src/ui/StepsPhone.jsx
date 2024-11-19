import React, { useEffect, useRef, useState } from "react";

import "./StepsPhone.css";

export default function StepsPhone() {
  const [steps, setSteps] = useState(2);

  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRect.height > 179) {
            setSteps(entry.target.dataset.number);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
    <div className="custom-steps-phone container-xxl d-lg-none">
      <ul className="row text-light g-0 list-unstyled flex-column align-items-end justify-content-center my-4 py-4">
        <li className={`custom-start-end ${steps > 0 ? "active" : ""} `}></li>
        {stepsObject.map((step) => (
          <li
            key={step.num}
            className={`custom-step col text-center d-flex justify-content-end align-items-center ${
              steps >= step.num ? "active" : ""
            }`}
            ref={(el) => (elementsRef.current[step.num] = el)}
            data-number={step.num}
          >
            <div className="custom-line position-relative z-n1" />
            <div className="custom-vertical-line z-n1" />
            <div className="custom-text text-secondary text-start position-absolute right-0">
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
        <li className={`custom-start-end ${steps == 5 ? "active" : ""}`}></li>
      </ul>
    </div>
  );
}
