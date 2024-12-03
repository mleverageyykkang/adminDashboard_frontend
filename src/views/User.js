import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table, Dropdown } from "react-bootstrap";
import Pagination from "../components/Pagination";
import "../assets/scss/custom/user.scss";

function User() {
  const tableExample = [
    {
      uuid: "1",
      name: "홍길동",
      code: 1,
      birthday: "20000101",
      positionUuid: "1",
      departmentUuid: "1",
      phone: "010-1234-1234",
      directPhone: "02-0000-0000",
      companyEmail: "asd@mleverage.co.kr",
      personalEmail: "asd@naver.com",
      mbti: "ESFJ",
    },
    {
      uuid: "2",
      name: "홍길동",
      code: 2,
      birthday: "20000101",
      positionUuid: "1",
      departmentUuid: "1",
      phone: "010-1234-1234",
      directPhone: "02-0000-0000",
      companyEmail: "asd@mleverage.co.kr",
      personalEmail: "asd@naver.com",
      mbti: "ESFJ",
    },
    {
      uuid: "3",
      name: "홍길동",
      code: 3,
      birthday: "20000101",
      positionUuid: "1",
      departmentUuid: "1",
      phone: "010-1234-1234",
      directPhone: "02-0000-0000",
      companyEmail: "asd@mleverage.co.kr",
      personalEmail: "asd@naver.com",
      mbti: "ESFJ",
    },
  ];
  const positionSelect = [
    {
      uuid: "1",
      value: "대표",
    },
    {
      uuid: "2",
      value: "실장",
    },
    {
      uuid: "3",
      value: "부장",
    },
    {
      uuid: "4",
      value: "차장",
    },
    {
      uuid: "5",
      value: "대리",
    },
    {
      uuid: "6",
      value: "사원",
    },
  ];
  const departmentSelect = [
    {
      uuid: "1",
      value: "본부",
    },
    {
      uuid: "2",
      value: "경영관리",
    },
    {
      uuid: "3",
      value: "개발",
    },
    {
      uuid: "4",
      value: "마케팅",
    },
  ];
  const [data, setData] = useState(tableExample);
  const [page, setPage] = useState(1);
  const count = 10; // context>count를 통해 백에서 받음.
  const pageSize = 10;
  const [editingRow, setEditingRow] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleEditClick = (id) => {
    setEditingRow(id);
    const rowToEdit = data.find((row) => row.uuid === id);
    setEditedRow({ ...rowToEdit });
  };

  const handleSaveClick = (id) => {
    setData((prevData) =>
      prevData.map((row) => (row.uuid === id ? { ...editedRow } : row))
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
      return prevData.filter((row) => row.uuid !== id);
    });
  };
  useEffect(() => {
    console.log("실시간:", data);
  }, [data]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="strpied-tabled-with-hover">
              <Card.Header className="d-flex justify-content-end">
                <div onClick={() => {}}>
                  <i
                    className="nc-icon nc-zoom-split "
                    style={{ fontSize: "20px", padding: "0.7rem 30px" }}
                  />
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    data-toggle="dropdown"
                    id="navbarDropdownMenuLink"
                    variant="default"
                    className="m-0 rounded border"
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
                <button
                  className="ml-2 border-0 bg-primary-subtle rounded"
                  onClick={() => {
                    alert("등록버튼");
                  }}
                >
                  등록
                </button>
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
                        <tr key={row.uuid}>
                          {editingRow === row.uuid ? (
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
                                  onChange={(e) => handleChange(e, "code")}
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.birthday}
                                  onChange={(e) => handleChange(e, "birthday")}
                                />
                              </td>
                              <td>
                                <select
                                  name="positionSelect"
                                  onChange={(e) =>
                                    handleChange(e, "positionUuid")
                                  }
                                >
                                  <option value="" disabled selected>
                                    직책 선택
                                  </option>
                                  {positionSelect.map((pos) => (
                                    <option key={pos.uuid} value={pos.uuid}>
                                      {pos.value}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <select
                                  name="departmentSelect"
                                  onChange={(e) =>
                                    handleChange(e, "departmentUuid")
                                  }
                                >
                                  <option value="" disabled selected>
                                    부서 선택
                                  </option>
                                  {departmentSelect.map((dpt) => (
                                    <option key={dpt.uuid} value={dpt.uuid}>
                                      {dpt.value}
                                    </option>
                                  ))}
                                </select>
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
                                  value={editedRow.directPhone}
                                  onChange={(e) =>
                                    handleChange(e, "directPhone")
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.companyEmail}
                                  onChange={(e) =>
                                    handleChange(e, "companyEmail")
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={editedRow.personalEmail}
                                  onChange={(e) =>
                                    handleChange(e, "personalEmail")
                                  }
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
                                  className="border rounded border-0 bg-primary text-white mr-2"
                                  onClick={() =>
                                    confirm("저장하시겠습니까?")
                                      ? handleSaveClick(row.uuid)
                                      : false
                                  }
                                >
                                  저장
                                </button>
                                <button
                                  className="border rounded border-muted bg-white "
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
                              <td>{row.birthday}</td>
                              <td>
                                {
                                  positionSelect.find(
                                    (pos) => pos.uuid == row.positionUuid
                                  )?.value
                                }
                              </td>
                              <td>
                                {
                                  departmentSelect.find(
                                    (dpt) => dpt.uuid == row.departmentUuid
                                  )?.value
                                }
                              </td>
                              <td>{row.phone}</td>
                              <td>{row.directPhone}</td>
                              <td>{row.companyEmail}</td>
                              <td>{row.personalEmail}</td>
                              <td>{row.mbti}</td>
                              <td>
                                <button
                                  className="border rounded border-0 bg-primary text-white"
                                  onClick={() => handleEditClick(row.uuid)}
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
                                  ? handleDeleteClick(row.uuid)
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
