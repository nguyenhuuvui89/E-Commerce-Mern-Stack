import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 py-3 card " style={{ borderRadius: '0', backgroundColor: '#2b3035'}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="card-img mb-0"/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none ">
          <Card.Title as="div" className="fs-7 fw-light tittle mb-1" style={{ color: 'white' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text className="mb-1" style={{ color: '#dee2e6' }}>
          <Rating
            value={product.rating}
            text={`(${product.numReviews} reviews)`}
          />
        </Card.Text>
        <Card.Text style={{ color: '#dee2e6' }}>${product.price}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Product;
