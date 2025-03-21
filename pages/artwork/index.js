import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Row, Col, Pagination, Card, Button, Form } from 'react-bootstrap';
import validObjectIDList from '@/public/data/validObjectIDList.json'
import ArtworkCard from '../../src/ArtworkCard';
import Error from 'next/error';

const PER_PAGE = 12; // Number of artworks per page

export default function Artwork() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [artworkList, setArtworkList] = useState([]);
  const [page, setPage] = useState(1);
  const [isSearchClicked, setIsSearchClicked] = useState(false); // Track search action

  // Disable search button if searchQuery is empty
  const isSearchDisabled = !searchQuery.trim();

  // Redirect to Advanced Search page if search query is empty
  useEffect(() => {
    if (!searchQuery.trim()) {
      router.push('/search'); // Redirect to advanced search page
    }
  }, [searchQuery, router]);
  

  const { data, error } = useSWR(
    searchQuery
      ? `https://collectionapi.metmuseum.org/public/collection/v1/search?${searchQuery}`
      : null
  );

  let filteredResults = validObjectIDList.objectIDs.filter(x => data.objectIDs?.includes(x));


  // Triggered when search is clicked
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchClicked(true); // Set search flag to true
      const queryParams = new URLSearchParams();
      queryParams.set('q', searchQuery);

      // Add other search criteria if available, like geoLocation, medium, etc.
      router.push(`/artwork?${queryParams.toString()}`);
    }
  };

  if (error) return <Error statusCode={404} />;

  return (
    <>
      {/* Search Input and Button */}
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search Artwork</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button 
          type="submit" 
          variant="primary" 
          className="mt-3" 
          disabled={isSearchDisabled} // Disable button if no search query
        >
          Search
        </Button>
      </Form>

      {/* Search Results */}
      {isSearchClicked && searchQuery.trim() && (
        <Row className="gy-4 mt-4">
          {artworkList.length > 0 ? (
            artworkList[page - 1].map((id) => (
              <Col lg={3} key={id}>
                <ArtworkCard objectID={id} />
              </Col>
            ))
          ) : (
            <Card>
              <h4>Nothing Here</h4>
              <p>Try searching for something else.</p>
            </Card>
          )}
        </Row>
      )}

      {/* Pagination (Visible only after search and results available) */}
      {isSearchClicked && artworkList.length > 0 && (
        <Row>
          <Col>
            <Pagination>
              <Pagination.Prev onClick={() => setPage(page > 1 ? page - 1 : 1)} />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next onClick={() => setPage(page < artworkList.length ? page + 1 : page)} />
            </Pagination>
          </Col>
        </Row>
      )}
    </>
  );
}
