import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const FilterProduct = () => {
  return (
    <ListGroup
      className="d-flex font-italic justify-content-between mt-3"
      style={{ borderRadius: '0', backgroundColor: 'rgba(43, 48, 53, 0.3)'}}
      horizontal
    >
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Iphone`}
      >
        <ListGroup.Item className="  bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
          Iphone
        </ListGroup.Item>
      </Link>
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Ipad`}
      >
        <ListGroup.Item className="bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
          Ipad
        </ListGroup.Item>
      </Link>
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Macbook`}
      >
        <ListGroup.Item className="bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
          Macbook
        </ListGroup.Item>
      </Link>
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Cover`}
      >
        <ListGroup.Item className="bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
        Cover
        </ListGroup.Item>
      </Link>
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Accessories`}
      >
        <ListGroup.Item className="bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
        Accessories
        </ListGroup.Item>
      </Link>
      <Link
        className="text-decoration-none "
        to={`/product/productName?name=Accessories`}
      >
        <ListGroup.Item className="bg-transparent text-white flex-grow-1 flex-shrink-1 text-center border-0">
        Accessories
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};

export default FilterProduct;
