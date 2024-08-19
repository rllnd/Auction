import React from 'react';
import { Container, Carousel, Row, Col, Card, Button } from 'react-bootstrap';
import Countdown from 'react-countdown';

const Home = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Enchère Terminée</span>;
    } else {
      return <span>{hours}h {minutes}m {seconds}s</span>;
    }
  };

  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Top Enchères</h3>
            <p>Enchérissez sur des objets exclusifs dès aujourd'hui !</p>
            <Button variant="primary">Enchérir Maintenant</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x600"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Offres Spéciales</h3>
            <p>Ne manquez pas nos dernières offres !</p>
            <Button variant="primary">Voir Plus</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Catégories */}
      <Container className="mt-5">
        <h2 class="style: text-center">Catégories Populaires</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="./arrivals1.png" />
              <Card.Body>
                <Card.Title>Art</Card.Title>
                <Button variant="primary">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Musique</Card.Title>
                <Button variant="primary">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Sculpture</Card.Title>
                <Button variant="primary">Voir Plus</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Auctions */}
      <Container className="mt-5">
        <h2 class="style: text-center">Enchères en Vedette</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Tableau Abstrait</Card.Title>
                <Card.Text>Enchère Actuelle : 500€</Card.Text>
                <Card.Text>
                  <Countdown date={Date.now() + 5000000} renderer={renderer} />
                </Card.Text>
                <Button variant="primary">Enchérir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="@/arrivals1.png"/>
              <Card.Body>
                <Card.Title>Guitare Classique</Card.Title>
                <Card.Text>Enchère Actuelle : 700€</Card.Text>
                <Card.Text>
                  <Countdown date={Date.now() + 3000000} renderer={renderer} />
                </Card.Text>
                <Button variant="primary">Enchérir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="./arrivals3.png"/>
              <Card.Body>
                <Card.Title>Sculpture Moderne</Card.Title>
                <Card.Text>Enchère Actuelle : 1200€</Card.Text>
                <Card.Text>
                  <Countdown date={Date.now() + 7000000} renderer={renderer} />
                </Card.Text>
                <Button variant="primary">Enchérir</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <Container>
          <Row>
            <Col>© 2024 GTOKEN | Tous Droits Réservés</Col>
          </Row>
          <Row>
            <Col>
              <a href="/terms" className="text-white">Conditions d'Utilisation</a> | <a href="/privacy" className="text-white">Politique de Confidentialité</a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="https://facebook.com" className="text-white">Facebook</a> | <a href="https://twitter.com" className="text-white">Twitter</a> | <a href="https://instagram.com" className="text-white">Instagram</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;
