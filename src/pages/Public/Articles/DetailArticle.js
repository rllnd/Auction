import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailArticle = () => {
  const { id } = useParams();

  // Supposons qu'on récupère l'article par son ID
  const article = {
    id,
    nom: 'Tableau Abstrait',
    prix: '150€',
    description: 'Un magnifique tableau abstrait...',
    images: [
    './arrivals/arrivals1.png',
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ],
    vendeur: 'Artiste1',
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={article.images[0]} fluid />
          <Row className="mt-3">
            {article.images.slice(1).map((img, index) => (
              <Col key={index}>
                <Image src={img} thumbnail />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <h2>{article.nom}</h2>
          <p>{article.description}</p>
          <h4>Prix: {article.prix}</h4>
          <p>Vendu par: {article.vendeur}</p>
          <Button variant="primary">Ajouter au Panier</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailArticle;
