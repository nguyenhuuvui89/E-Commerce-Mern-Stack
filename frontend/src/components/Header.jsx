import { FaShoppingCart, FaUser } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.jpeg";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <header>
      <Navbar
        style={{ backgroundColor: "#001926" }}
        expand="lg"
        variant="dark"
        collapseOnSelect
      >
        <Container fluid>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <img
                src={logo}
                style={{
                  width: "50px",
                  height: "auto",
                  marginRight: "10px",
                  borderRadius: "3px",
                  filter: "blur(0.5px)",
                }}
                alt="Digital World"
              />{" "}
              iGadgetStore
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center ">
              <Form className="d-flex me-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="secondary">Search</Button>
              </Form>
              <LinkContainer to={"/cart"} className="me-3">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Sign in
                </Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
