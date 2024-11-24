import React from "react";
import { ImRedo2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 m-4"
      style={{ height: "80vh" }}
    >
      <img src="/img/404.png" alt="code 404" className="mx-3" />
      <div className="text-start text-scondary">
        <p className="fs-2 fw-bold"> 404: صفحه پیدا نشد. </p>
        <p>با عرض پوزش، ما نمی توانیم آن صفحه را پیدا کنیم.</p>
        <p className="fw-bold">
          متاسفانه صفحه ای که به دنبال آن هستید ممکن است پاک شده باشد، نام آن
          تغییر کرده باشد و یا موقتا قابل دسترسی نباشد. لطفاً موارد زیر را
          امتحان کنید:
        </p>
        <ul>
          <li>
            اطمینان حاصل کنید که آدرس در نوار مرورگرتان را صحیح وارد کرده باشید
          </li>
          <li>
            اگر شما این صفحه را با کلیک کردن یک لینک باز کردید٫ به ما اعلام کنید
            چون آن لینک غیر معتبر و اشتباه است.
          </li>
          <li>هر اتفاقی که افتاده است را فراموش کنید.</li>
        </ul>
      </div>
      <button
        className="btn btn-primary rounded-pill border border-light-subtle px-4 py-3"
        onClick={() => navigate(-1)}
      >
        برگشت به قبل
        <ImRedo2 className="ms-3" />
      </button>
    </div>
  );
}
