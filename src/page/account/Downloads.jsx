import React from "react";

export default function Downloads() {
  return (
    <div id="downloads" className="table-responsive">
      <table className="table border">
        <thead>
          <tr>
            <th className="text-light" scope="col">
              محصول
            </th>
            <th className="text-light text-nowrap" scope="col">
              دانلودهای باقی مونده
            </th>
            <th className="text-light" scope="col">
              انقضا
            </th>
            <th className="text-light" scope="col">
              دانلود
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="fw-normal" scope="row">
              فارسی ساز کامل The Witcher 3
            </th>
            <td>∞</td>
            <td>هرگز</td>
            <td>
              <button className="btn text-light">
                The-Witcher-3-Wild-Hunt-GameSub-FarsiSaz-V1.88-qrnmlj.zip
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
