import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Searchform() {
  const [searchparams, setSearchparams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?q=${searchQuery}`);
  };

  return (
    <form className="d-flex" role="search" onSubmit={handelSubmit}>
      <div className="input-group rounded-0 rounded-start border">
        <input
          className="form-control rounded-0 rounded-start border-0"
          type="search"
          placeholder="جستجو"
          aria-label="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary me-2 rounded-0 rounded-end"
        type="submit"
      >
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
