import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Menu.css';

const menuItems = {
  coffee: [
    {
      name: "Classic Espresso",
      description: "Rich and bold single shot of espresso",
      price: "3.50",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800"
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "4.50",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800"
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with vanilla, milk and caramel drizzle",
      price: "5.00",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800"
    }
  ],
  pastries: [
    {
      name: "Butter Croissant",
      description: "Flaky, buttery traditional croissant",
      price: "3.75",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800"
    },
    {
      name: "Blueberry Muffin",
      description: "Fresh baked muffin loaded with blueberries",
      price: "3.25",
      image: "http://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Chocolate Danish",
      description: "Flaky pastry filled with chocolate",
      price: "4.00",
      image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800"
    }
  ]
};

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>Our Menu</h1>
        <p className="lead">Crafted with passion, served with pride</p>
      </div>

      <Container className="py-5">
        <section className="menu-section">
          <h2 className="section-title">Coffee & Espresso</h2>
          <Row>
            {menuItems.coffee.map((item, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="menu-item-card">
                  <Card.Img variant="top" src={item.image} className="menu-item-image" />
                  <Card.Body>
                    <div className="menu-item-header">
                      <Card.Title>{item.name}</Card.Title>
                      <span className="menu-item-price">${item.price}</span>
                    </div>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="menu-section mt-5">
          <h2 className="section-title">Fresh Pastries</h2>
          <Row>
            {menuItems.pastries.map((item, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="menu-item-card">
                  <Card.Img variant="top" src={item.image} className="menu-item-image" />
                  <Card.Body>
                    <div className="menu-item-header">
                      <Card.Title>{item.name}</Card.Title>
                      <span className="menu-item-price">${item.price}</span>
                    </div>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Menu; 