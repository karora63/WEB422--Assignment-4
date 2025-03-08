import React from 'react';
import { useRouter } from 'next/router'; // Import the Next.js router to access route parameters
import { Row, Col } from 'react-bootstrap'; // Bootstrap components for layout
import ArtworkCardDetail from '../../src/components/ArtworkCardDetail'; // Import the ArtworkCardDetail component

const ArtworkById = () => {
  // Use useRouter to access the route parameter "objectID"
  const router = useRouter();
  const { objectID } = router.query; // The objectID is retrieved from the URL query parameters

  // Render the ArtworkCardDetail component with the objectID as a prop
  return (
    <Row>
      <Col>
        {objectID ? (
          <ArtworkCardDetail objectID={objectID} />
        ) : (
          <p>Loading...</p> // Optional loading state while the objectID is being fetched
        )}
      </Col>
    </Row>
  );
};

export default ArtworkById;
