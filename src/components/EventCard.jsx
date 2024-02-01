import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EventCard.css'; // CSSファイルをインポート

function EventCard() {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('EventDetails');
  };

  return (
    <div className="event-card-container">
      <Card className="event-card">
        <Card.Img variant="top" src="no2.png" /> 
        <Card.Body>
          <Card.Title>桃山テック部　春合宿_2024</Card.Title>
          <Card.Text>
            2024年2月23日から24日にかけて、桃山学院大学で開催されるハッカソン合宿。技術者としてのスキルを磨き、新しいアイデアを形にしよう。
          </Card.Text>
          <Button variant="primary" onClick={handleViewDetails}>詳細を見る</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
