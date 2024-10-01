import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const menu = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Ui Components",
    link: "/ui-components",
    submenu: [
      {
        title: "Account",
        link: "/account",
      },
      {
        title: "Referral",
        link: "/referral",
      },
    ],
  },
];
function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((eachMenu, index) => {
              if (eachMenu.submenu) {
                return (
                  <NavDropdown
                    key={index}
                    title={eachMenu.title}
                    id="basic-nav-dropdown"
                  >
                    {eachMenu.submenu.map((submenu, sindex) => {
                      return (
                        <NavDropdown.Item
                          key={sindex}
                          as={Link}
                          to={submenu.link}
                        >
                          {submenu.title}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Link key={index} as={Link} to={eachMenu.link}>
                    {eachMenu.title}
                  </Nav.Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
