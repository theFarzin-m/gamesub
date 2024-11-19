// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Orders() {
  return (
    <div id="orders" className="table-responsive">
      <table className="table border">
        <thead>
          <tr>
            <th className="text-light" scope="col">سفارش</th>
            <th className="text-light" scope="col">تاریخ</th>
            <th className="text-light" scope="col">وضعیت</th>
            <th className="text-light" scope="col">مجموع</th>
            <th className="text-light" scope="col"> عملیات‌ها</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="fw-normal" scope="row">#202002</th>
            <td>1403-07-28</td>
            <td>تکمیل شده</td>
            <td>72,000 تومان برای 1 مورد</td>
            <td>
              <button className="btn btn-secondary">نمایش</button>
            </td>
          </tr>
          <tr>
            <th className="fw-normal" scope="row">#202002</th>
            <td>1403-07-28</td>
            <td>تکمیل شده</td>
            <td>72,000 تومان برای 1 مورد</td>
            <td>
              <button className="btn btn-secondary">نمایش</button>
            </td>
          </tr>
          <tr>
            <th className="fw-normal" scope="row">#202002</th>
            <td>1403-07-28</td>
            <td>تکمیل شده</td>
            <td>72,000 تومان برای 1 مورد</td>
            <td>
              <button className="btn btn-secondary">نمایش</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
