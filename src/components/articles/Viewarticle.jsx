import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Viewarticle = ({art}) => {
  
  const [article, setArticle] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    
  };
  
  const handleShow = () => {
  setArticle(art)
    
    setShow(true);
     
  };

  return (
    <div>
    
    <Button
    onClick={handleShow}
    variant="danger"
            size="md"
            className="text-danger btn-link warning"
    >
<i class="fa-solid fa-eye"></i>    
    </Button>

    <Modal show={show} onHide={handleClose}>
    <Form  >
    <Modal.Header closeButton>
    <h2>afficher Product</h2>
    </Modal.Header>
    <Modal.Body>
    <div className="container w-100 d-flex justify-content-center">
    <div>
    <div className='form mt-3'>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={article.imageart} />
      <Card.Body>
        <Card.Title>reference : {article.reference}</Card.Title>
        <Card.Text>
        {article.designation}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>marque : {article.marque}</ListGroup.Item>
        <ListGroup.Item>prix : {article.prix}</ListGroup.Item>
        <ListGroup.Item>quantité en stock : {article.qtestock}</ListGroup.Item>
        <ListGroup.Item>scategorie : {article.scategorieID?.['nomscategorie']}</ListGroup.Item>
        
      </ListGroup>

    </Card>
    
    </div>
    </div>
    </div>
    </Modal.Body>
    <Modal.Footer>
    
    
    </Modal.Footer>
    </Form>
    </Modal>
    </div>
  )
}

export default Viewarticle
