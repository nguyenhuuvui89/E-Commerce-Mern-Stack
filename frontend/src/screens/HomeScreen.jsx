import { Row, Col, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react"; //We will use redux to fetch later
import Product from "../components/Product";
import axios from "axios";
import CarouselSlider from "../components/CarouselSlider";
import FilterProduct from "../components/FilterProduct";
// import { useParams } from "react-router-dom";

const HomeScreen = () => {
  // still missing config for filter routes
  // const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.log.error("Error fetching product data:", error.message);
      }
    };
    fetchProductsData();
  }, []); // Render only once // Fetch all products initially

  // Get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <CarouselSlider />
      <FilterProduct/>
      <Row>
        {currentProducts.map((product) => (
          <Col
            key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className="card-deck"
          >
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <Pagination.Item
            key={i + 1}
            active={i + 1 === currentPage}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default HomeScreen;
