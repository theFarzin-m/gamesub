import React from "react";
import CardShop from "./CardShop";

import data from "../../../data/data.json";
import { useSearchParams } from "react-router-dom";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase();
  let datas = data;
  if (query) {
    datas = data.filter((d) => d.title.toLowerCase().includes(query));
  }

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
      {datas.length ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-4">
          {datas.map((d) => (
            <div className="col" key={d.id}>
              <CardShop data={d} />
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <div className="fs-2">چیزی پیدا نشد</div>
        </div>
      )}
      <div className="d-flex justify-content-center mt-4 py-4"></div>
    </div>
  );
}
