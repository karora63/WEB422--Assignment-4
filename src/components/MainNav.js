import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainNav() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  

  // Handle search submission
  const handleSearch = (event) => {
    event.preventDefault();
    router.push(`/artwork?title=true&q=${search}`);
  };

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-primary" expand="lg" expanded={isExpanded}>
        <Navbar.Brand>Khushi Arora </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
            <Nav.Link onClick={() => setIsExpanded(false)}>Advanced Search</Nav.Link>
            </Link>
           

          </Nav>
          &nbsp;<Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" variant="outline-light">Search</Button>
          </Form>&nbsp;
        </Navbar.Collapse>
      </Navbar>
      <br /><br />
    </>
  );
}

