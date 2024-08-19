import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Tokens = () => {
  return (
    <Container className="mt-5">
      <h2>Gestion des Tokens</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Acheter des Tokens</Card.Title>
              <Form>
                <Form.Group controlId="formTokenAmount">
                  <Form.Label>Montant</Form.Label>
                  <Form.Control type="number" placeholder="Entrez le montant en GTokens" />
                </Form.Group>
                <Button variant="primary" type="submit">Acheter</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Vendre des Tokens</Card.Title>
              <Form>
                <Form.Group controlId="formTokenAmountSell">
                  <Form.Label>Montant</Form.Label>
                  <Form.Control type="number" placeholder="Entrez le montant en GTokens" />
                </Form.Group>
                <Button variant="primary" type="submit">Vendre</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tokens;
