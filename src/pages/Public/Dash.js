import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartLine, FaHistory, FaWallet } from 'react-icons/fa';
import './Dash.css';

const Dash = () => {
  return (
    <Container className="mt-5">
      <h2 className="tab">Tableau de Bord Utilisateur</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaChartLine size={50} />
              <Card.Title>Solde du Compte</Card.Title>
              <Card.Text>100 GTokens</Card.Text>
              <Button variant="primary" href="/article">Acheter des Tokens</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <FaHistory size={50} />
              <Card.Title>Historique des Transactions</Card.Title>
              <Card.Text>Voir l'historique complet de vos transactions sur la plateforme.</Card.Text>
              <Button variant="primary" href="/historique">Voir l'Historique</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <FaWallet size={50} />
              <Card.Title>Gestion des Tokens</Card.Title>
              <Card.Text>Gérer vos tokens ici, y compris l'achat, la vente, et l'échange.</Card.Text>
              <Button variant="primary" href="/tokens">Gérer les Tokens</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaChartLine size={50} />
              <Card.Title>Taux de Conversion</Card.Title>
              <Card.Text>Consulter les taux de conversion actuels pour vos tokens.</Card.Text>
              <Button variant="primary" href="/tokens/conversion">Voir les Taux</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <FaHistory size={50} />
              <Card.Title>Mes Enchères</Card.Title>
              <Card.Text>Voir et gérer vos enchères en cours et passées.</Card.Text>
              <Button variant="primary" href="/mes-encheres">Gérer Mes Enchères</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <FaWallet size={50} />
              <Card.Title>Profil Utilisateur</Card.Title>
              <Card.Text>Gérer votre profil et vos informations personnelles.</Card.Text>
              <Button variant="primary" href="/profil">Gérer le Profil</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dash;
