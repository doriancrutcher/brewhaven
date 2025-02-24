import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Hero />
      <Container className="py-5">
        <Row>
          <Col lg={4} md={4} sm={12}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <MenuCard
              image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              header="We're Here for Your Events"
              description="At Mystic Mugs, we can offer our space for your special occasions. Just give us a call!"
            />
            </Link>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <MenuCard
              image="https://images.unsplash.com/photo-1535662981753-4a2258f677e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              header="Come See What's On The Menu"
              description="Check out our menu to see what we have to offer!"
            />
            </Link>
          </Col>
          <Col lg={4} md={4} sm={12}>
          <Link to="/menu" style={{ textDecoration: 'none' }}>

            <MenuCard 
              image="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              header="Organic Taste in Every Cup"
              description="We grow every bean right here in your backyard to make sure every cup is as fresh as can be."
            />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home; 