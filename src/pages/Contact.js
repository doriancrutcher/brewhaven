import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p className="lead">We'd love to hear from you</p>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={6} className="mb-4">
            <Card className="contact-card">
              <Card.Body>
                <h2>Send us a Message</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="contact-card">
              <Card.Body>
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3>Visit Us</h3>
                      <p>123 Main Street<br />Los Angeles, CA 90012</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>info@brewhaven.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h3>Hours</h3>
                      <p>Monday - Friday: 6AM - 8PM<br />
                         Saturday - Sunday: 7AM - 9PM</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact; 