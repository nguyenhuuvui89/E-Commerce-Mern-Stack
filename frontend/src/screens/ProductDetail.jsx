import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams(); // Get id from the front end URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${productId}`); //fetching data from backend
        // using proxy in package.json in frontend
        // don't have to hardcode const { data } = await axios.get(`http://localhost:8000/api/products/${productId}`)
        // "name": "frontend",
        // "version": "0.1.0",
        // "proxy": "http://localhost:8000",
        // "private": true,
        setProduct(data);
      } catch (error) {
        console.log.error("Error fetching product data:", error.message);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Link className="btn btn-light my-3 a" to="/">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <div className="d-flex justify-content-center align-items-center"style={{ height: '300px' }}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              style={{
                width: "100%",
                height: "100%",
                objectFit: 'contain'
              }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Card as="div" className="border-1 d-flex ">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4 class="pro-title">{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Price:</strong> ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity:</Col>
                    <Col>
                      <input type="number" className="form-control" value={1} />
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  className="btn-block btn-danger aaa"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetail;
