import React from "react";

const Pagination = ({ page, count, setPage, pageSize }) => {
  const totalPages = Math.ceil(count / pageSize);

  const handleClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // 현재 페이지를 기준으로 3개의 페이지를 표시 (앞, 현재, 뒤)
    const startPage = Math.max(1, page - 9);
    const endPage = Math.min(totalPages, page + 9);

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
        onClick={() => handleClick(page - 1)}
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
        onClick={() => handleClick(page + 1)}
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
