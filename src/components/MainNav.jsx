import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap'; // Importing Form from react-bootstrap
import Link from 'next/link';

export default function MainNav({sName = "Gurmehak Kaur Uppal"}) {
  const [searchField, setSearchField] = useState('');
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to /artwork?title=true&q=searchField
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>{sName}</Navbar.Brand> {/* Displaying the student name */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link legacyBehavior passHref href="/">
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link legacyBehavior passHref href="/search">
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>

            </Nav>

            {/* Form for search */}
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              />
              <button type="submit" className="btn btn-outline-success">Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Two line breaks to ensure content is visible below the fixed navbar */}
      <br />
      <br />
    </>
  );
}
