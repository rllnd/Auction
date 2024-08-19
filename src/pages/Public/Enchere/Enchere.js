import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Enchere = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the auction creation logic
    console.log({ title, description, startingPrice, category });
  };

  return (
    <Container className="mt-5">
      <h2>Créer une Nouvelle Enchère</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Titre de l'Article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez le titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description de l'article"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="startingPrice">
          <Form.Label>Prix de Départ (€)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Entrez le prix de départ"
            value={startingPrice}
            onChange={(e) => setStartingPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Catégorie</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choisissez une catégorie...</option>
            <option value="art">Art</option>
            <option value="musique">Musique</option>
            <option value="sculpture">Sculpture</option>
            <option value="vêtements">Vêtements</option>
            <option value="autres">Autres</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Créer l'Enchère
        </Button>
      </Form>
    </Container>
  );
};

export default Enchere;
