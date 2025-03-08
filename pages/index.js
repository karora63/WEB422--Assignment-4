/*********************************************************************************
*  WEB422 – Assignment 4
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: ___Khushi Arora___________________ Student ID: ____146209234______________ Date: ____03-07-2025________________
   github : https://github.com/karora63/WEB422--Assignment-4
   publish :  https://web422-assignment-4-q27r.onrender.com
*
********************************************************************************/ 

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* Display the image of the Metropolitan Museum of Art */}
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
            alt="Metropolitan Museum of Art"
            fluid
            rounded
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          {/* Description from Wikipedia */}
          <p>
            The Metropolitan Museum of Art of New York City, commonly known as the Met, is the largest art museum in the United States and one of the largest in the world. Its permanent collection contains over two million works of art, divided among seventeen curatorial departments. The Mets collections include works from ancient Egypt, classical Greece and Rome, European painting and sculpture, American decorative arts, and many more.
          </p>
        </Col>
        <Col md={6}>
          {/* Additional information with a link to the Wikipedia entry */}
          <p>
            For more information, visit the <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Metropolitan Museum of Art Wikipedia entry</a>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
