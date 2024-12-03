import React from "react";

const Pagination = ({ page, totalCount, setPage, pageSize }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // 현재 페이지 기준으로 표시할 페이지 번호 계산
    const startPage = Math.floor((page - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: i === page ? "#007BFF" : "#FFF",
            color: i === page ? "#FFF" : "#000",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => handleClick(Math.max(1, page - 10))}
        disabled={page === 1}
        style={{
          margin: "0 5px",
          padding: "5px 10px",
          backgroundColor: "#FFF",
          color: "#000",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: page === 1 ? "not-allowed" : "pointer",
        }}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(Math.min(totalPages, page + 10))}
        disabled={page === totalPages}
        style={{
          margin: "0 5px",
          padding: "5px 10px",
          backgroundColor: "#FFF",
          color: "#000",
          border: "1px solid #ddd",
          borderRadius: "4px",
          cursor: page === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
