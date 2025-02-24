import React from 'react';
import { Card, Button } from 'react-bootstrap';

function LocationCard({ name, address, phone, hours }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="bg-dark text-light border-secondary">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{hours}</p>
        </Card.Text>
        <Button variant="outline-light">Get Directions</Button>
      </Card.Body>
    </Card>
  );
}

export default LocationCard; 