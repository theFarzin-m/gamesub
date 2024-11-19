import React from "react";
import {
  HiArrowDownTray,
  HiChevronDoubleDown,
  HiOutlineBanknotes,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="custom-recent-action row row-cols-1 row-cols-sm-3 gx-2 my-4 ">
        <div className="col">
          <div
            className="card text-center border-0 text-light"
            data-aos="fade-up"
          >
            <div className="card-body d-flex justify-content-center flex-column align-items-center pb-0">
              <h5 className="card-title rounded-circle d-flex justify-content-center align-items-center w-100">
                <HiOutlineBanknotes color="green" className="w-50 h-50" />
              </h5>
              <h6 className="card-subtitle mb-2 mt-1">تاریخچه کیف پول</h6>
              <ul className="list-unstyled text-start fs-6 w-100 mb-2">
                <li className="list-item my-2 pb-2 text-truncate">
                  72,000 تومان پرداخت از موجودی کیف پول
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  89,000 تومان پرداخت از موجودی کیف پول
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  315,000 تومان مدیر این وجوه را اضافه کرده است
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  100,000 تومان پرداخت از موجودی کیف پول
                </li>
                <li className="list-item my-2 border-0 text-truncate">
                  100,000 تومان مدیر این وجوه را اضافه کرده است
                </li>
              </ul>
              <div className="text-center w-100">
                <Link
                  to="/profile/wallet#wallet-history"
                  className="btn p-0 w-100"
                >
                  <HiChevronDoubleDown
                    color="white"
                    className="custom-more-recently"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card text-center border-0 text-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card-body d-flex justify-content-center flex-column align-items-center pb-0">
              <h5 className="card-title rounded-circle d-flex justify-content-center align-items-center w-100">
                <HiArrowDownTray color="white" className="w-50 h-50" />
              </h5>
              <h6 className="card-subtitle  mb-2 mt-1">دانلود های اخیر</h6>
              <ul className="list-unstyled text-start fs-6 w-100 mb-2">
                <li className="list-item my-2 pb-2 text-truncate">
                  فارسی ساز کامل The Witcher 3
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  فارسی ساز کامل Fallout 4
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  فارسی ساز کامل god of war
                </li>
                <li className="list-item my-2 pb-2 text-truncate">
                  فارسی ساز کامل Red dead redemption
                </li>
                <li className="list-item my-2 border-0 text-truncate">
                  فارسی ساز کامل cyberpunck
                </li>
              </ul>
              <div className="text-center w-100">
                <button className="btn p-0 w-100">
                  <HiChevronDoubleDown
                    color="white"
                    className="custom-more-recently"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card text-center border-0 text-light"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card-body d-flex justify-content-start flex-column align-items-center pb-0">
              <h5 className="card-title rounded-circle d-flex justify-content-center align-items-center w-100">
                <HiOutlineBanknotes color="green" className="w-50 h-50" />
              </h5>
              <h6 className="card-subtitle mb-2 mt-1">سفارشات اخیر</h6>
              <ul className="list-unstyled text-start fs-6 w-100 mb-2">
                <li className="list-item my-2 pb-2">
                  72,000 تومان برای 1 مورد
                </li>
                <li className="list-item my-2 pb-2">
                  89,000 تومان برای 1 مورد
                </li>
              </ul>
              <div className="text-center w-100">
                <button className="btn p-0 w-100">
                  <HiChevronDoubleDown
                    color="white"
                    className="custom-more-recently"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="my-4">
        از حساب کاربری خود می‌توانید سفارش‌های اخیر خود را مشاهده کنید، محصولات
        خریداری شده را دانلود کنید، و رمز عبور و جزئیات حساب خود را ویرایش کنید.
      </p>
    </>
  );
}
