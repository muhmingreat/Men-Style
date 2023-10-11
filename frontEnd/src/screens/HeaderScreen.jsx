import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomeScreen } from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import CartScreen from "../screens/CartScreen";
import SigninScreen from "../screens/SigninScreen";
import ShippingAddressScreen from "../screens/ShippingAddressScreen";
import Button from "react-bootstrap/Button";
import { getError } from "../utils";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import Sticky from "../components/Sticky";


const HeaderScreen = () => {
    const {
      state: { mode, cart, userInfo, fullBox },
      dispatch,
    } = useContext(Store);
    const switchModeHandler = () => {
      dispatch({ type: "SWITCH_MODE" });
    };
    const signoutHandler = () => {
      dispatch({ type: "USER_SIGNOUT" });
      localStorage.removeItem("userInfo");
      localStorage.removeItem("shippingAddress");
      localStorage.removeItem("paymentMethod");
      window.location.href = "/signin";
    };
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
      const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;

          // You can adjust this threshold as needed
          if (offset > 100) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    useEffect(() => {
      document.body.setAttribute("data-bs-theme", mode);
      const fetchCategories = async () => {
        try {
          const { data } = await axios.get(`/api/products/categories`);
          setCategories(data);
        } catch (err) {
          toast.error(getError(err));
        }
      };
      fetchCategories();
    }, [mode]);
  return (
    <div
      className={
        sidebarIsOpen
          ? fullBox
            ? "site-container active-cont d-flex flex-column full-box"
            : "site-container active-cont d-flex flex-column"
          : fullBox
          ? "site-container d-flex flex-column full-box"
          : "site-container d-flex flex-column"
      }
    >
      <ToastContainer position="bottom-center" limit={1} />
      <Sticky>
        <header
          style={{ width: "100vw", position: "sticky", top: 0, zIndex: 1 }}
        >
          <Navbar bg="primary" variant="light" expand="lg">
            <Container>
              <Button
                variant="light"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>

              <LinkContainer to="/home">
                <Navbar.Brand>
                  {" "}
                  <p className="headerName">
                    <strong className="black">A</strong>
                    <strong className="green">B</strong>
                    {""}
                    <strong className="red">S</strong>{" "}
                    Style's Spot
                  </p>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link
                    to="#"
                    className="nav-link header-link"
                    onClick={switchModeHandler}
                  >
                    <i
                      style={{ fontSize: "2rem", marginTop: "26px" }}
                      className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}
                    ></i>{" "}
                    {mode === "light" ? "Light" : "Dark"}
                  </Link>
                  <Link to="/cart" className="nav-link">
                    <i
                      className="bi bi-cart4"
                      style={{ color: "#fff", fontSize: "3rem" }}
                    ></i>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  <nav className="info">
                    {userInfo ? (
                      <NavDropdown
                        title={userInfo.name}
                        id="basic-nav-dropdown"
                      >
                        <LinkContainer to="/profile">
                          <NavDropdown.Item>User Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/orderhistory">
                          <NavDropdown.Item>Order History</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign Out
                        </Link>
                      </NavDropdown>
                    ) : (
                      <Link className="nav-link" to="/signin">
                        Sign In
                      </Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to="/admin/dashboard">
                          <NavDropdown.Item>Dashboard</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/products">
                          <NavDropdown.Item>Products</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orders">
                          <NavDropdown.Item>Orders</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/users">
                          <NavDropdown.Item>Users</NavDropdown.Item>
                        </LinkContainer>
                      </NavDropdown>
                    )}
                  </nav>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <nav className="sub-header">
            <SearchBox />
          </nav>
        </header>
      </Sticky>
      <div
        className={
          sidebarIsOpen
            ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
            : "side-navbar d-flex justify-content-between flex-wrap flex-column"
        }
      >
        <Nav className="flex-column text-white w-100 p-5">
          <Nav.Item>
            <strong>Categories</strong>
          </Nav.Item>
          {categories.map((category) => (
            <Nav.Item key={category}>
              <LinkContainer
                to={{ pathname: "/search", search: `category=${category}` }}
                onClick={() => setSidebarIsOpen(false)}
              >
                <Nav.Link>{category}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default HeaderScreen;
