import React from "react";
import CardShop from "./CardShop";

import data from "../../../data/data.json";

export default function Shop() {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center my-2">
        <div className="col">
          <div className="h3 mb-4">مرتب سازی بر اساس</div>
          <div>
            <button className="btn btn-primary rounded-0 rounded-start">
              محبوبیت
            </button>
            <button className="btn btn-primary rounded-0">امتیاز</button>
            <button className="btn btn-primary rounded-0">آخرین</button>
            <button className="btn btn-primary rounded-0">ارزان ترین</button>
            <button className="btn btn-primary rounded-0 rounded-end">
              گران ترین
            </button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-4">
        {data.map((d) => (
          <div className="col" key={d.id}>
            <CardShop data={d} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4 py-4"></div>
    </div>
  );
}