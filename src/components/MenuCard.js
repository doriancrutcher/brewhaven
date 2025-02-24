import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/MenuCard.css';

function MenuCard({ image, header, description }) {
  return (
    <Card className="menu-card">
      <Card.Img 
        variant="top" 
        src={image} 
        className="menu-card-image"
      />
      <Card.Body className="menu-card-body">
        <Card.Title className="menu-card-title">{header}</Card.Title>
        <Card.Text className="menu-card-text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MenuCard; 