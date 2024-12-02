import React from "react";
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AccountList() {
  const { uid } = useParams();
  // const userAccount = accountList.find((item) => item.userid === userid);
  // if(!userAccount){ }
  const tableExample = [
    {
      advertiser: {
        name: "제이노블",
        leader: "김명찬",
        rrn: "99999-1111111",
        phone: "010-6789-6740",
        businessNum: "739-86-00096",
        address: "서울특별시 강남구 압구정로30길 9, 4층(신사동)",
        type: "서비스업",
        item: "결혼정보",
        email: "bricktop@naver.com",
        userEmail: "15-11991@mleverage.co.kr",
      },
      importance: { monthSpending: 60000000, degree: 5 },
      manageInfo: {
        transferDate: "24/03/25 월",
        tax: "직접발행 or 위임",
        payback: 0.0,
        note: "-",
      },
      leaved: {
        transferedDate: "24/04/25 목",
        reason: "성과저조",
      },
      naver: {
        id: "jnoble1",
        pw: "noblenoble9345!!!",
      },
      naverGFA: {
        id: "jnoble3",
        pw: "Noble9345@!",
        accountNo: 1200305,
      },
      Kakao: {
        id: "remarier@naver.com",
        pw: "j15889345@",
        no: 482324,
        momentNo: 130801,
      },
      google: {
        id: "-",
        pw: "-",
      },
      etc: {
        id: "-",
        pw: "-",
      },
    },
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="strpied-tabled-with-hover ">
              <Card.Header>
                <Card.Title as="h4">계정 리스트</Card.Title>
                <p className="card-category">{/* 여기에 USERid 명 적기  */}</p>
              </Card.Header>
              <Card.Body className="table-full-width px-0 table-responsive">
                <Table className="table-hover table-striped text-nowrap">
                  <thead>
                    <tr>
                      <th colSpan={12}>광고주 정보</th>
                      <th colSpan={2}>중요도</th>
                      <th colSpan={4}>관리 정보</th>
                      <th colSpan={2}>이탈시</th>
                      <th colSpan={1}>홈페이지</th>
                      <th colSpan={2}>네이버</th>
                      <th colSpan={3}>네이버 GFA</th>
                      <th colSpan={4}>카카오/카카오 모먼트</th>
                      <th colSpan={2}>구글</th>
                      <th colSpan={2}>기타</th>
                    </tr>
                    <tr>
                      {/* 광고주 정보 */}
                      <th>업체명</th>
                      <th>대표자명</th>
                      <th>주민등록번호(신분증)</th>
                      <th>담당자명(주 소통)</th>
                      <th>연락처(담당자)</th>
                      <th>사업자등록증(업체명)</th>
                      <th>사업자등록번호</th>
                      <th>사업장주소</th>
                      <th>업태</th>
                      <th>종목</th>
                      <th>업체 이메일</th>
                      <th>마케팅레버리지 담당자 이메일</th>
                      {/* 중요도 */}
                      <th>월 스펜딩(10단위)</th>
                      <th>점수: 1~5</th>
                      {/* 관리정보 */}
                      <th>이관일자</th>
                      <th>세금계산서 발행정보</th>
                      <th>페이백(요율%)</th>
                      <th>비고</th>
                      {/* 이탈 시 */}
                      <th>피이관일자</th>
                      <th>사유</th>
                      {/* 홈페이지 */}
                      <th></th>
                      {/* 네이버 */}
                      <th>아이디</th>
                      <th>비밀번호</th>
                      <th>아이디</th>
                      <th>비밀번호</th>
                      <th>광고계정번호</th>
                      <th>아이디</th>
                      <th>비밀번호</th>
                      <th>카카오번호</th>
                      <th>모먼트번호</th>
                      <th>아이디</th>
                      <th>비밀번호</th>
                      <th>아이디</th>
                      <th>비밀번호</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableExample.map((item, index) => (
                      <tr key={index}>
                        {/* 광고주 정보 */}
                        <td>{item.advertiser.name}</td>
                        <td>{item.advertiser.leader}</td>
                        <td>{item.advertiser.rrn}</td>
                        <td>{item.advertiser.managerName}</td>
                        <td>{item.advertiser.phone}</td>
                        <td>{item.advertiser.certificate}</td>
                        <td>{item.advertiser.TIN}</td>
                        <td>{item.advertiser.address}</td>
                        <td>{item.advertiser.type}</td>
                        <td>{item.advertiser.item}</td>
                        <td>{item.advertiser.email}</td>
                        <td>{item.advertiser.userEmail}</td>
                        {/* 중요도 */}
                        <td>{item.importance.monthSpending}</td>
                        <td>{item.importance.degree}</td>
                        {/* 관리정보 */}
                        <td>{item.manageInfo.transferDate}</td>
                        <td>{item.manageInfo.tax}</td>
                        <td>{item.manageInfo.payback}</td>
                        <td>{item.manageInfo.note}</td>
                        {/* 이탈 시 */}
                        <td>{item.leaved.transferedDate}</td>
                        <td>{item.leaved.reason}</td>
                        {/* 홈페이지 */}
                        <td>{item.homepage}</td>
                        {/* 네이버 */}
                        <td>{item.naver.id}</td>
                        <td>{item.naver.pw}</td>
                        <td>{item.naverGFA.id}</td>
                        <td>{item.naverGFA.pw}</td>
                        <td>{item.naverGFA.accountNo}</td>
                        <td>{item.Kakao.id}</td>
                        <td>{item.Kakao.pw}</td>
                        <td>{item.Kakao.no}</td>
                        <td>{item.Kakao.momentNo}</td>
                        <td>{item.google.id}</td>
                        <td>{item.google.pw}</td>
                        <td>{item.etc.id}</td>
                        <td>{item.etc.pw}</td>
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

export default AccountList;
