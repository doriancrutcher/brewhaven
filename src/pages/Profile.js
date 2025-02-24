import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import '../styles/Profile.css';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    preferredLocation: 'Mystic Mugs Downtown'
  });

  // Sample order history
  const orderHistory = [
    {
      id: '#BH001',
      date: '2024-03-15',
      items: 'Large Cappuccino, Chocolate Croissant',
      total: '$12.50',
      location: 'Downtown'
    },
    {
      id: '#BH002',
      date: '2024-03-14',
      items: 'Medium Latte, Blueberry Muffin',
      total: '$9.75',
      location: 'Beverly Hills'
    },
    // Add more orders as needed
  ];

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Here you would typically save to backend
  };

  return (
    <div className="profile-page">
      <Container className="py-5">
        <h1 className="profile-title mb-4">Profile Management</h1>
        
        <Row>
          {/* User Info Section */}
          <Col lg={6} className="mb-4">
            <Card className="profile-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Personal Information</h2>
                <Button 
                  variant="outline-primary"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSave}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={userInfo.name}
                      disabled={!editMode}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={userInfo.email}
                      disabled={!editMode}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      value={userInfo.phone}
                      disabled={!editMode}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Location</Form.Label>
                    <Form.Select
                      value={userInfo.preferredLocation}
                      disabled={!editMode}
                      onChange={(e) => setUserInfo({...userInfo, preferredLocation: e.target.value})}
                    >
                      <option>Mystic Mugs Downtown</option>
                      <option>Mystic Mugs Santa Monica</option>
                      <option>Mystic Mugs Beverly Hills</option>
                    </Form.Select>
                  </Form.Group>
                  
                  {editMode && (
                    <Button type="submit" variant="primary">
                      Save Changes
                    </Button>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Preferences Section */}
          <Col lg={6} className="mb-4">
            <Card className="profile-card">
              <Card.Header>
                <h2 className="mb-0">Preferences</h2>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="email-notifications"
                    label="Email Notifications"
                    className="mb-3"
                  />
                  <Form.Check 
                    type="switch"
                    id="sms-notifications"
                    label="SMS Notifications"
                    className="mb-3"
                  />
                  <Form.Check 
                    type="switch"
                    id="promotional-emails"
                    label="Promotional Emails"
                    className="mb-3"
                  />
                  <Form.Check 
                    type="switch"
                    id="order-updates"
                    label="Order Updates"
                    className="mb-3"
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Order History Section */}
        <Card className="profile-card mt-4">
          <Card.Header>
            <h2 className="mb-0">Order History</h2>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Table className="order-history-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {orderHistory.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.items}</td>
                      <td>{order.total}</td>
                      <td>{order.location}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Profile; 