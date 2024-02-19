import {Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react' //We will use redux to fetch later
import Product from "../components/Product"
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] =useState([])
  useEffect(()=> {
    const fetchProductsData = async () => {
      try {
        const {data} = await axios.get('/api/products');
        setProducts(data)

      } catch (error) {
        console.log.error('Error fetching product data:', error.message);
      }
    }
    fetchProductsData();
  }, []) // Render only once
  return (
    <>
    <h1> The latest  products</h1>
      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl ={3} className='card-deck'>
            <Product product={product}></Product>
            
          </Col>
        ))}
      </Row>
   
    </>

  )
}

export default HomeScreen
