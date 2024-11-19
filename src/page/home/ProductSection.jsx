import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import datas from "../../../data/data.json";

export default function ProductSection() {
  return (
    <div className="container" id="products">
      <ul className="custom-category-list row row-cols-2 row-cols-md-6 justify-content-center list-unstyled py-2">
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3">
            آخرین ها
          </button>
        </li>
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3 active">
            تجاری
          </button>
        </li>
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3">
            رایگان
          </button>
        </li>
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3"> pc </button>
        </li>
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3">ps4</button>
        </li>
        <li className="custom-category p-0">
          <button className="btn text-secondary fw-medium mx-sm-3">ps3</button>
        </li>
      </ul>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-4">
        {datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Link
          to={"/shop"}
          className="btn btn-primary my-4 px-4 py-3 fw-bold bg-secondary-custom w-100"
          style={{ transition: "all 1s" }}
        >
          محصولات بیشتر
        </Link>
      </div>
    </div>
  );
}
