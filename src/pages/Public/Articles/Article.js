import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Article = () => {
  // Liste des articles pour les acheteurs
  const articles = [
    {
      id: 1,
      nom: 'Tableau Abstrait',
      prix: '150€',
      image: 'https://via.placeholder.com/300x200',
      vendeur: 'Artiste1',
    },
    {
      id: 2,
      nom: 'Sculpture Moderne',
      prix: '250€',
      image: 'https://via.placeholder.com/300x200',
      vendeur: 'Artiste2',
    },
  ];

  return (
    <Container className="mt-5">
      <h2>Gestion des Articles</h2>
      <Row>
        {articles.map((article) => (
          <Col md={4} key={article.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={article.image} />
              <Card.Body>
                <Card.Title>{article.nom}</Card.Title>
                <Card.Text>Prix: {article.prix}</Card.Text>
                <Button variant="primary"  href={`/detail/${article.id}`}>
                  Voir les Détails
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Article;
