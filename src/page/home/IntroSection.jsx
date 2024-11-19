import React from "react";
import { ImRedo2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <div id="intro">
      <div className="custom-intro-first custom-vertical-slide">
        <div className="custom-nested-vertical">
          <div className="container-xxl">
            <div className="custom-section-wrapper row justify-content-center flex-wrap flex-row-reverse g-0 text-center">
              <div className="custom-text-half col text-light  text-lg-start">
                <h2 className="">بزرگترین سرقت تاریخ</h2>
                <div className="mt-4" />
                <div className="custom-divider mx-auto"></div>
                <div className="custom-oranged mb-4" />
                <div className="fs-4 mt-4 pt-3">
                  <p>هیچ محدودیتی گریبان گیر شما نمیشود!</p>
                  <p>
                    ماشین بدزدید، بانک بزنید، مسابقه دهید، شکار کنید، غواصی کنید
                    و در دل آسمان پرواز کنید. در شهر لس سانتس تنها آزادی و تفریح
                    منتظر شماست.
                  </p>
                  <p>
                    با نصب این فارسی ساز میتوانید تمامی مراحل اصلی بازی را به
                    زبان فارسی تجربه کنید!
                  </p>
                </div>
                <Link
                  to="/shop/3"
                  className="custom-goto-product-btn btn text-body-secondary mt-3 mb-4 float-end fw-bold text-nowrap"
                >
                  ورود به صفحه محصول
                  <ImRedo2 className="d-inline-block ms-3" />
                </Link>
              </div>
              <div className="col" data-aos="fade-left">
                <img className="img-fluid" src="/img/franklin.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-intro-second custom-vertical-slide">
        <div className="custom-nested-vertical">
          <div className="container-xxl">
            <div className="custom-section-wrapper row flex-wrap flex-row-reverse text-center">
              <div className="col" data-aos="fade-right">
                <img className="img-fluid" src="/img/game3.png" alt="" />
              </div>
              <div className="custom-text-half col my-auto  text-lg-start pb-4">
                <h2 className="text-nowrap">شهری در ابرها</h2>
                <div className="" />
                <div className="custom-divider mx-auto"></div>
                <div className="custom-oranged mb-4" />
                <div className="fs-4 mx-auto">
                  <p>در بازی بایوشاک قدم به شهری در میان ابرها بگذارید!</p>
                  <p>
                    آرمان شهری خیالی به نام کلمبیا مملو از مردمانی متعصب که از
                    پیامبری دروغین پیروی میکنند.
                  </p>
                </div>
                <Link
                  to="/shop/7"
                  className="custom-goto-product-btn btn text-body-secondary mt-3 float-end fw-bold text-nowrap"
                >
                  ورود به صفحه محصول
                  <ImRedo2 className="d-inline-block ms-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-intro-third custom-vertical-slide" id="intro">
        <div className="custom-nested-vertical">
          <div className="container-xxl">
            <div className="custom-section-wrapper row flex-wrap flex-row-reverse g-0 mt-4 pt-4 px-4 px-lg-0 text-center">
              <div className="custom-text-half col text-light my-auto text-lg-start">
                <h2 className="">مردی از جنس درد</h2>
                <div className="mt-4" />
                <div className="custom-divider mx-auto"></div>
                <div className="custom-oranged mb-4" />
                <div className="fs-4 mt-4 pt-3">
                  <p>
                    مردی که بخاطر از دست دادن همسر و فرزندش به الکل و باروت روی
                    آورده تا گذشته ی خود را به فراموشی بسپارد.
                  </p>
                  <p>
                    در مکس پین 3 داستان مکس را ادامه دهید و شاهد سرنوشت او
                    باشید.
                  </p>
                </div>
                <Link
                  to="/shop/6"
                  className="custom-goto-product-btn btn text-body-secondary mt-3 mb-4 float-end fw-bold text-nowrap"
                >
                  ورود به صفحه محصول
                  <ImRedo2 className="d-inline-block ms-3" />
                </Link>
              </div>
              <div className="col" data-aos="fade-left">
                <img className="img-fluid" src="/img/max-Payne.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="custom-intro-therd custom-vertical-slide"></div>
      </div>
    </div>
  );
}
