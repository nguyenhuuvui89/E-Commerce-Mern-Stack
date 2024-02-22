import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card ">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} className="card-img"/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div" className="fs-7 fw-light tittle ">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h5">${product.price}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Product;
