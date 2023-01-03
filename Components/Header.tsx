import Image from "next/image";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
declare const window:any;

const Header: React.FC = () => {
  // const [win, setWin] = useState<any>({})
  // useEffect(() => {
  //   setWin(window)
  //   console.log(win)
  // }, [])
  // if (win.innerWidth < 769) {
  //   return <>mobile</>
  // }
  // else {
  //   return <>desktop</>
  // }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/icons/logo.png"
            width="100"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="color_logo header_text">
            PNG SOFTWARE TECHNOLOGIES PVT. LTD.
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              <Nav.Link className="menuitems" href="#action1">
                About Us
              </Nav.Link>
              <Nav.Link className="menuitems" href="#action2">
                Our Clients
              </Nav.Link>
              <Nav.Link className="menuitems" href="#action3">
                Products
              </Nav.Link>
              <Nav.Link className="menuitems" href="#action4">
                Hire Us
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
  return <></>;
};

export default Header;
