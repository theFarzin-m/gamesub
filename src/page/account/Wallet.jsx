import React from "react";
import { HiOutlinePrinter } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Wallet() {
  return (
    <div id="wallet">
      <div className="fs-4 bg-light my-4 p-3">
        میزان موجودی فعلی شما: <strong>154,000 تومان</strong>
      </div>
      <div className="text-scondary">
        <p className="fs-4">شارژ کیف پول با درگاه ایرانی:</p>
        <p>برای شارژ کیف پول از طریق درگاه ایرانی به این لینک مراجعه کنید.</p>
        <p className="text-danger">
          قبل از پرداخت حتما آدرس ایمیل حساب خود را در کادر "نام" وارد کنید. در
          غیر این صورت مبلغ به کیف پول شما اضافه نمیشود.
        </p>
        <p>
          مبلغ واریز شده پس از بررسی توسط مدیر سایت به کیف پول شما اضافه میشود.
        </p>
        <p>
          اضافه شدن مبلغ به کیف پول شما معمولا کمتر از یک ساعت زمان میبرد اما
          میتواند حداکثر تا 12 ساعت نیز طول بکشد.
        </p>
        <p>
          اگر پس از مدت ذکر شده مبلغ هنوز به کیف پول شما اضافه نشده بود، درخواست
          بررسی خود را از طریق ربات گیم ساب Gamesub_Support_Bot ارسال کنید.
        </p>
      </div>
      <hr />
      <div id="wallet-history" className="fs-4 mb-4 ">
        تاریخچه
      </div>

      <div className="table-responsive">
        <table className="table border">
          <thead>
            <tr>
              <th className="text-light" scope="col">
                شناسه
              </th>
              <th className="text-light" scope="col">
                شماره سفارش
              </th>
              <th className="text-light" scope="col">
                میزان
              </th>
              <th className="text-light" scope="col">
                توضیحات
              </th>
              <th className="text-light" scope="col">
                تاریخ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">46863</td>
              <td>#202002 - نمایش سفارش </td>
              <td>-72,000 تومان </td>
              <td>پرداخت با استفاده از موجودی کیف پول</td>
              <td>28 مهر 1403 - 18:12</td>
            </tr>

            <tr>
              <td scope="row">46863</td>
              <td>#202002 - نمایش سفارش </td>
              <td>-72,000 تومان </td>
              <td>پرداخت با استفاده از موجودی کیف پول</td>
              <td>28 مهر 1403 - 18:12</td>
            </tr>

            <tr>
              <td scope="row">46863</td>
              <td>#202002 - نمایش سفارش </td>
              <td>-72,000 تومان </td>
              <td>پرداخت با استفاده از موجودی کیف پول</td>
              <td>28 مهر 1403 - 18:12</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="py-2">
                <Link to="http://localhost:5173/profile/wallet#wallet-history?print=transactions">
                  <span className="mx-2">
                    <HiOutlinePrinter color="inherit" />
                  </span>
                  چاپ رسید
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
