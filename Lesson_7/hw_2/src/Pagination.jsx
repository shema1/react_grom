import React, { Component } from "react";

const Pagination = ({goPrev , goNext,page,itemsPerPage, users}) => {
   const checkPage = page == 0 
    const lastPage = itemsPerPage * (page+1) >=users;
  return (
    <div className="pagination">
<button className="btn" onClick={goPrev}  disabled={checkPage}>{checkPage?"":"←"}</button>
  <span className="pagination__page">{page}</span>
  <button className="btn" onClick={goNext} disabled={lastPage}>{lastPage?"":"→"}</button>
    </div>
  );
};

export default Pagination;
