import React from "react";

export default function SocialSection() {
  return (
    <div id="social" className="mt-4">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column text-light text-center">
        <div>
          <div className="fs-3 fw-bold mb-3">
            ما را در شبکه های اجتماعی دنبال کنید!
          </div>
          <p>
            با دنبال کردن گیم ساب در تلگرام و اینستاگرام از آخرین اخبار و
            تخفیفات مطلع باشید.
          </p>
        </div>
        <div className="custom-social-button mt-4">
          <button
            className="btn border-2 border-light text-light mx-md-3 fw-bold w-100 mx-0 mb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            تلگرام
          </button>
          <button
            className="btn border-2 border-light text-light mx-md-3 fw-bold w-100 mx-0 mt-2"
            data-aos="fade-up"
          >
            اینستاگرام
          </button>
        </div>
      </div>
    </div>
  );
}
