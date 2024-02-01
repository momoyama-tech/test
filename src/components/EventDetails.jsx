import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import './EventDetails.css'; 


const EventHeader = () => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>春合宿マニュアル_2024</Card.Title>
      <Card.Text>
        <strong>期間:</strong> 2024年2月23日(金)〜2024年2月24日<br />
        <strong>開催場所:</strong> 桃山学院大学
      </Card.Text>
    </Card.Body>
  </Card>
);

const Schedule = () => (
    <Card className="mb-3">
    <Card.Header>スケジュール</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>2月23日（金）</ListGroup.Item>
      <ListGroup.Item>9:30 - 開場　〇号館　ー号室</ListGroup.Item>
      <ListGroup.Item>10:00 - 集合完了、説明、各自自己紹介、テーマ発表、案出し</ListGroup.Item>
      <ListGroup.Item>11:00 - 案発表、チーム決め、チーム企画決め、メンター配属先決定、稼働時間の相談、企画発表資料作り（14:00まで考える）</ListGroup.Item>
      <ListGroup.Item>12:00 - メンター陣打ち合わせ 全体スケジュール</ListGroup.Item>
      <ListGroup.Item>12:30 - お昼休憩（自費）</ListGroup.Item>
      <ListGroup.Item>14:00 - 企画発表</ListGroup.Item>
      <ListGroup.Item>14:30 - 開発開始</ListGroup.Item>
      <ListGroup.Item>18:00 - 中間発表</ListGroup.Item>
      <ListGroup.Item>各自お風呂（20時まで）</ListGroup.Item>
      <ListGroup.Item>22:00 - 消灯時間（仮）</ListGroup.Item>
      <ListGroup.Item>24:00 - 魔材注入</ListGroup.Item>
      <ListGroup.Item>2月24日（土）</ListGroup.Item>
      <ListGroup.Item>8:00 - ラジオ第四体操</ListGroup.Item>
      <ListGroup.Item>14:30 - 開発終了、成果発表</ListGroup.Item>
      <ListGroup.Item>メンター陣の話し合い、審査結果発表、表彰式</ListGroup.Item>
      <ListGroup.Item>16:00 - イベント終了、部長終了の挨拶、打ち上げ</ListGroup.Item>
    </ListGroup>
  </Card>
);

const Fees = () => (
  <Card className="mb-3">
    <Card.Header>参加費</Card.Header>
    <Card.Body>
      2000円＋宿泊費（桃山の学生500円、外部の学生1000円、社会人1500円）
      {/* その他の費用についての詳細 */}
    </Card.Body>
  </Card>
);

const Preparation = () => (
  <Card className="mb-3">
    <Card.Header>用意するもの</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>気持ち</ListGroup.Item>
      <ListGroup.Item>パソコン</ListGroup.Item>
      <ListGroup.Item>着替え</ListGroup.Item>
      <ListGroup.Item>お風呂セット（シャンプー、バスタオル、ドライヤー）</ListGroup.Item>
    </ListGroup>
  </Card>
);

const Notes = () => (
  <Card className="mb-3">
    <Card.Header>注意</Card.Header>
    <Card.Body>
      <p>公序良俗に反しない範囲で作品を作りましょう。</p>
    </Card.Body>
  </Card>
);

const EventDetails = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs={12} md={8}>
        <EventHeader />
        <Schedule />
        <Fees />
        <Preparation />
        <Notes />
      </Col>
    </Row>
  </Container>
);

export default EventDetails;
