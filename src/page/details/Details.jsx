// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import data from "../../../data/data.json";

import Informations from "./Informations";
import SetupGuideTab from "./SetupGuideTab";
import ChangesTab from "./ChangesTab";
import ImageTab from "./ImageTab";
import CommentsTab from "./CommentsTab";
import CardShop from "../Shop/CardShop";

import "./Details.css";
import NotFound from "../errorpages/NotFound";

export default function Details() {
  const { id } = useParams();
  const [tab, setTab] = useState("setup-guide");
  const detail = data.filter((game) => game.id === Number(id));

  if (detail.length <= 0) {
    return <NotFound />;
  }

  return (
    <>
      <div id="details">
        <Informations data={detail} />
        <div className="custom-creators container py-4 my-4">
          <div className="fw-bold text-black text-center">
            <div className="h1 w-100">
              <span className="custom-creator-text">سازندگان</span>
            </div>
            <div className="d-flex justify-content-center">
              <div className="m-4">
                <div className="h4 custom-creator-text">ترجمه زیرنویس ها:</div>
                <p className="custom-creator-text">مرتضی جزینی</p>
                <p className="custom-creator-text">علیرضا رحیم زاده</p>
                <p className="custom-creator-text">وحید مستغیث</p>
              </div>
              <div className="m-4">
                <div className="h4 custom-creator-text">تست و تنظيم:</div>
                <p className="custom-creator-text">Dante H3</p>
              </div>
            </div>
          </div>
        </div>

        <div id="details-tap">
          <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    tab === "setup-guide" ? "active border-bottom-0" : ""
                  }`}
                  aria-current="page"
                  onClick={() => setTab("setup-guide")}
                >
                  راهنمای نصب
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    tab === "changes" ? "active border-bottom-0" : ""
                  }`}
                  onClick={() => setTab("changes")}
                >
                  لیست تغییرات
                </button>
              </li>
              {detail[0].images && (
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      tab === "pictures" ? "active border-bottom-0" : ""
                    }`}
                    onClick={() => setTab("pictures")}
                  >
                    تصاویر
                  </button>
                </li>
              )}
              <li className="nav-item">
                <button
                  onClick={() => setTab("comments")}
                  className={`nav-link ${
                    tab === "comments" ? "active border-bottom-0" : ""
                  }`}
                >
                  نظرات
                </button>
              </li>
            </ul>
            <div className="custom-details-tab border p-3 rounded-bottom border-top-0">
              {tab === "setup-guide" && <SetupGuideTab />}
              {tab === "changes" && <ChangesTab />}
              {tab === "pictures" && <ImageTab data={detail[0]} />}
              {tab === "comments" && <CommentsTab />}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="h2">محصولات مرتبط</div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 my-4 gx-3">
            <div className="col">
              <CardShop data={data[Math.floor(Math.random() * data.length)]} />
            </div>
            <div className="col">
              <CardShop data={data[Math.floor(Math.random() * data.length)]} />
            </div>
            <div className="col">
              <CardShop data={data[Math.floor(Math.random() * data.length)]} />
            </div>
            <div className="col">
              <CardShop data={data[Math.floor(Math.random() * data.length)]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
