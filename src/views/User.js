import React, { useState } from "react";
import { Card, Container, Row, Col, Table, Dropdown } from "react-bootstrap";
import Pagination from "../components/Pagination";

function User() {
  const tableExample = [
    {
      name: "홍길동",
      code: "01",
      birth: "20000101",
      position: "사원",
      dpt: "마케팅",
      phone: "010-1234-1234",
      tel: "02-0000-0000",
      businessEmail: "asd@mleverage.co.kr",
      email: "asd@naver.com",
      mbti: "ESFJ",
    },
    {
      name: "홍길동",
      code: "01",
      birth: "20000101",
      position: "사원",
      dpt: "마케팅",
      phone: "010-1234-1234",
      tel: "02-0000-0000",
      businessEmail: "asd@mleverage.co.kr",
      email: "asd@naver.com",
      mbti: "ESFJ",
    },
    {
      name: "홍길동",
      code: "01",
      birth: "20000101",
      position: "사원",
      dpt: "마케팅",
      phone: "010-1234-1234",
      tel: "02-0000-0000",
      businessEmail: "asd@mleverage.co.kr",
      email: "asd@naver.com",
      mbti: "ESFJ",
    },
  ];
  const [data, setData] = useState(tableExample);
  const [page, setPage] = useState(1);
  const count = 100;
  const pageSize = 10;
  const [editingRow, setEditingRow] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleEditClick = (id) => {
    setEditingRow(id);
    const rowToEdit = tableExample.find((row) => row.code === id);
    setEditedRow({ ...rowToEdit });
  };

  const handleSaveClick = (id) => {
    setData((prevData) =>
      prevData.map((row) => (row.code === id ? { ...editedRow } : row))
    );
    setEditingRow(null);
  };

  const handleChange = (e, field) => {
    setEditedRow({ ...editedRow, [field]: e.target.value });
  };

  const handleCancelClick = () => {
    setEditingRow(null);
    setEditedRow({});
  };
  const handleDeleteClick = (id) => {
    setData((prevData) => {
      prevData.filter((row) => row.code !== id);
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="strpied-tabled-with-hover ">
              <Card.Header className="d-flex justify-content-end">
                <div onClick={() => {}}>
                  <i
                    className="nc-icon nc-zoom-split "
                    style={{ fontSize: "20px", padding: "0.7rem" }}
                  />
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink"
                    variant="default"
                    className="m-0 text-primary rounded border"
                  >
                    <i className="nc-icon nc-align-left-2 mr-1" />
                    <span>정렬</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                    <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                      이름
                    </Dropdown.Item>
                    <Dropdown.Item href="#" onClick={(e) => e.preventDefault()}>
                      사번
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body className="table-full-width px-0 table-responsive">
                <Table className="table-hover table-striped text-nowrap text-center">
                  <thead>
                    <tr>
                      <th>이름</th>
                      <th>코드</th>
                      <th>생년월일</th>
                      <th>직책</th>
                      <th>부서</th>
                      <th>연락처</th>
                      <th>직통번호</th>
                      <th>회사 이메일</th>
                      <th>개인 이메일</th>
                      <th>MBTI</th>
                      <th>관리</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((row) => (
                        <tr key={row.code}>
                          {editingRow === row.code ? (
                            <>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.name}
                                  onChange={(e) => handleChange(e, "name")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.code}
                                  onChange={(e) => handleChange(e, "email")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.birth}
                                  onChange={(e) => handleChange(e, "birth")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.position}
                                  onChange={(e) => handleChange(e, "position")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.dpt}
                                  onChange={(e) => handleChange(e, "dpt")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.phone}
                                  onChange={(e) => handleChange(e, "phone")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.tel}
                                  onChange={(e) => handleChange(e, "tel")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.businessEmail}
                                  onChange={(e) =>
                                    handleChange(e, "businessEmail")
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.email}
                                  onChange={(e) => handleChange(e, "email")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.mbti}
                                  onChange={(e) => handleChange(e, "mbti")}
                                />
                              </td>
                              <td>
                                <button
                                  className="border rounded border-0 bg-primary text-white"
                                  onClick={() =>
                                    confirm("저장하시겠습니까?")
                                      ? handleSaveClick(row.code)
                                      : false
                                  }
                                >
                                  저장
                                </button>
                                <button
                                  className="border rounded border-0 bg-white "
                                  onClick={handleCancelClick}
                                >
                                  취소
                                </button>
                              </td>
                            </>
                          ) : (
                            <>
                              <td>{row.name}</td>
                              <td>{row.code}</td>
                              <td>{row.birth}</td>
                              <td>{row.position}</td>
                              <td>{row.dpt}</td>
                              <td>{row.phone}</td>
                              <td>{row.tel}</td>
                              <td>{row.businessEmail}</td>
                              <td>{row.email}</td>
                              <td>{row.mbti}</td>
                              <td>
                                <button
                                  className="border rounded border-0 bg-primary text-white"
                                  onClick={() => handleEditClick(row.code)}
                                >
                                  수정
                                </button>
                              </td>
                            </>
                          )}
                          <td>
                            <button
                              className="border rounded border-0 text-white bg-danger"
                              onClick={() => {
                                confirm("정말 삭제하시겠습니까?")
                                  ? handleDeleteClick(row.code)
                                  : false;
                              }}
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Pagination
          page={page}
          count={count}
          pageSize={pageSize}
          setPage={setPage}
        />
      </Container>
    </>
  );
}

export default User;
