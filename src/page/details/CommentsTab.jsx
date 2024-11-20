import React from "react";
import Avatar from "../../ui/Avatar";

export default function CommentsTab() {
  return (
    <div id="comments">
      <div className="row row-cols-1 row-cols-lg-2 g-2">
        <div className="col pe-0 pe-lg-2">
          <div className="border h-100 w-100 border-2 p-3 rounded">
            <form className="w-100" action="">
              <div className="h2 text-center mb-3">نظر بزار</div>
              <textarea
                className="w-100 bg-secondary-subtle rounded"
                style={{ resize: "none", height: "200px" }}
                name=""
                id=""
              ></textarea>
              <button className="btn btn-primary mt-4 w-100 fw-bold">
                ثبت نظر
              </button>
            </form>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-between p-3 border border-2 rounded">
          <div className="border rounded p-2 bg-secondary-subtle my-2">
            <div className="d-flex justify-content-between  mb-2">
              <small>2/7/1403</small>
              <div className="d-flex flex-nowrap justify-content-start align-items-center">
                <span className="me-2">bruce wayne</span>
                <Avatar width="40px" />
              </div>
            </div>

            <div>خیلی ممنون</div>
          </div>

          <div className="border rounded p-2 bg-secondary-subtle my-2">
            <div className="d-flex justify-content-between  mb-2">
              <small>24/2/1403</small>
              <div className="d-flex flex-nowrap justify-content-start align-items-center">
                <span className="me-2">kratos</span>
                <Avatar width="40px" />
              </div>
            </div>

            <div>لطفا dlc جدید هم زیرنویس کنید.</div>
          </div>

          <div className="border rounded p-2 bg-secondary-subtle my-2">
            <div className="d-flex justify-content-between mb-2">
              <small>25/12/1402</small>
              <div className="d-flex flex-nowrap justify-content-start align-items-center">
                <span className="me-2">john marston</span>
                <Avatar width="40px" />
              </div>
            </div>

            <div>
              سلام من نسخه اصلی بازیو از استیم خریداری کردم فایلی نداره بازی که
              برای برنامهopenivپیدا کنم فقط فایل استخراجیه بازیه چیکار کنم؟
            </div>
          </div>

          <div className="border rounded p-2 bg-secondary-subtle my-2">
            <div className="d-flex justify-content-between  mb-2">
              <small className="smale">22/11/1402</small>
              <div className="d-flex flex-nowrap justify-content-start align-items-center">
                <span className="me-2">cap.price</span>
                <Avatar width="40px" />
              </div>
            </div>

            <div>
              با سلام من طبق آموزش نصب کردن حین ورود به بازی هم لوگو گیم ساب رو
              دیدم ولی هیچ متنی و زیرنویسی فارسی نشده
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <nav aria-label="Page navigation example">
              <ul className="pagination m-0">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
