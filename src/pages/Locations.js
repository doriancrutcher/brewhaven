import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Locations.css';

const locations = [
  {
    name: "Brew Haven Downtown",
    address: "123 Main Street, Los Angeles, CA 90012",
    hours: "Mon-Fri: 6AM-8PM | Sat-Sun: 7AM-9PM",
    phone: "(123) 456-7890",
    mapImage: "https://i.imgur.com/sGPoHBU.png"
  },
  {
    name: "Brew Haven Santa Monica",
    address: "789 Ocean Avenue, Santa Monica, CA 90401",
    hours: "Mon-Sun: 6AM-10PM",
    phone: "(098) 765-4321",
    mapImage: "https://i.imgur.com/sGPoHBU.png"
  },
  {
    name: "Brew Haven Beverly Hills",
    address: "456 Rodeo Drive, Beverly Hills, CA 90210",
    hours: "Mon-Sun: 7AM-9PM",
    phone: "(000) 000-0000",
    mapImage: "https://i.imgur.com/sGPoHBU.png"
  }
];

function Locations() {
  return (
    <div className="locations-page">
      <div className="locations-hero">
        <h1>Our Locations</h1>
        <p className="lead">Find your nearest Brew Haven and come experience the perfect cup</p>
      </div>
      
      <Container className="py-5">
        <Row>
          {locations.map((location, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="location-card h-100">
                <Card.Img 
                  variant="top" 
                  src={location.mapImage} 
                  alt={`Map of ${location.name}`}
                  className="location-map"
                />
                <Card.Body>
                  <Card.Title className="location-title">{location.name}</Card.Title>
                  <Card.Text>
                    <div className="location-info">
                      <p><i className="fas fa-map-marker-alt"></i> {location.address}</p>
                      <p><i className="fas fa-clock"></i> {location.hours}</p>
                      <p><i className="fas fa-phone"></i> {location.phone}</p>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    Get Directions
                  </a>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Locations; 