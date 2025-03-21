import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to process form data and generate query string
  const submitForm = (data) => {
    let queryString = `searchBy=${data.searchBy}`;

    if (data.geoLocation) queryString += `&geoLocation=${data.geoLocation}`;
    if (data.medium) queryString += `&medium=${data.medium}`;
    if (data.isOnView) queryString += `&isOnView=true`;
    if (data.isHighlight) queryString += `&isHighlight=true`;
    queryString += `&q=${data.q}`;

    // Redirect to the artwork search page with the query string
    router.push(`/artwork?${queryString}`);
  };

  return (
    <Container>
      <h1 className="mt-4 text-dark">Advanced Search</h1> {/* Darkened the text */}
      <Form>
  <Row>
    <Col>
      <Form.Group className="mb-3">
        <Form.Label>Search Query</Form.Label>
        <Form.Control type="text" placeholder="" name="q" />
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col md={4}>
      <Form.Label>Search By</Form.Label>
      <Form.Select name="searchBy" className="mb-3">
        <option value="title">Title</option>
        <option value="tags">Tags</option>
        <option value="artistOrCulture">Artist or Culture</option>
      </Form.Select>
    </Col>
    <Col md={4}>
      <Form.Group className="mb-3">
        <Form.Label>Geo Location</Form.Label>
        <Form.Control type="text" placeholder="" name="geoLocation" />
        <Form.Text className="text-muted">
        Case Sensitive String (ie &quot;Europe&quot;, &quot;France&quot;, &quot;Paris&quot;, &quot;China&quot;, &quot;New York&quot;, etc.), with multiple values separated by the | operator
      </Form.Text>
      </Form.Group>
    </Col>
    <Col md={4}>
      <Form.Group className="mb-3">
        <Form.Label>Medium</Form.Label>
        <Form.Control type="text" placeholder="" name="medium"/>
        <Form.Text className="text-muted">
        Case Sensitive String (ie: &quot;Ceramics&quot;, &quot;Furniture&quot;, &quot;Paintings&quot;, &quot;Sculpture&quot;, &quot;Textiles&quot;, etc.), with multiple values separated by the | operator
      </Form.Text>
      </Form.Group>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Check
        type="checkbox"
        label="Highlighted"
        name="isHighlight"
      />
      <Form.Check
        type="checkbox"
        label="Currently on View"
        name="isOnView"
      />
    </Col>
  </Row>
  <Row>
    <Col>
      <br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Col>
  </Row>
</Form>
     
    </Container>
  );
}

