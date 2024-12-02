import React from "react";

// react-bootstrap components
import { Card, Container, Row, Col, Table } from "react-bootstrap";

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
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="strpied-tabled-with-hover ">
              <Card.Header className="d-flex justify-content-end">
                <i className="nc-icon nc-zoom-split" />
                <button>
                  <i className="nc-icon nc-align-left-2 mr-1" />
                  <span>정렬</span>
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
                    {tableExample.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.birth}</td>
                        <td>{item.position}</td>
                        <td>{item.dpt}</td>
                        <td>{item.phone}</td>
                        <td>{item.tel}</td>
                        <td>{item.businessEmail}</td>
                        <td>{item.email}</td>
                        <td>{item.mbti}</td>
                        <td>
                          <button>수정</button>
                        </td>
                        <td>
                          <button>삭제</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
