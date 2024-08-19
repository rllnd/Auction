import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';

const Detail = () => {
  // Example data
  const userCreatedAuctions = [
    { id: 1, title: 'Ancient Vase', currentBid: '€200', status: 'Ended' },
    { id: 2, title: 'Renaissance Painting', currentBid: '€1000', status: 'Active' }
  ];

  const userParticipatingAuctions = [
    { id: 3, title: 'Classic Guitar', currentBid: '€500', status: 'Active' },
    { id: 4, title: 'Modern Sculpture', currentBid: '€750', status: 'Ended' }
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h2>My Auctions</h2>
          <p>Here are the auctions you have created:</p>
          <ListGroup>
            {userCreatedAuctions.map(auction => (
              <ListGroup.Item key={auction.id}>
                <strong>{auction.title}</strong> - Current Bid: {auction.currentBid} - Status: {auction.status}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <h2>Participating Auctions</h2>
          <p>Here are the auctions you are participating in:</p>
          <ListGroup>
            {userParticipatingAuctions.map(auction => (
              <ListGroup.Item key={auction.id}>
                <strong>{auction.title}</strong> - Current Bid: {auction.currentBid} - Status: {auction.status}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12} className="text-center">
          <Button href="/encheres" variant="primary">Create New Auction</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail ;
