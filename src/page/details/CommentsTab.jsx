import React from 'react'

export default function CommentsTab() {
  return (
    <div id="comments">
    <div className="row g-2">
      <div className="col border border-2 p-3 rounded me-2">
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
      <div className="col d-flex flex-column justify-content-between p-3 border border-2 rounded">
        <div className="border rounded p-2 bg-secondary-subtle my-2">
          <div className="d-flex justify-content-between">
            <div>date</div>
            <div>username</div>
          </div>

          <div>commnet text</div>
        </div>

        <div className="border rounded p-2 bg-secondary-subtle my-2">
          <div className="d-flex justify-content-between">
            <div>date</div>
            <div>username</div>
          </div>

          <div>commnet text</div>
        </div>

        <div className="border rounded p-2 bg-secondary-subtle my-2">
          <div className="d-flex justify-content-between">
            <div>date</div>
            <div>username</div>
          </div>

          <div>commnet text</div>
        </div>

        <div className="border rounded p-2 bg-secondary-subtle my-2">
          <div className="d-flex justify-content-between">
            <div>date</div>
            <div>username</div>
          </div>

          <div>commnet text</div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination m-0">
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                >
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
  )
}
