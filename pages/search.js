import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import { useRouter } from 'next/router'; // Import useRouter from Next.js for redirection
import { Form, Button, Col, Row } from 'react-bootstrap'; // Import Bootstrap components

const AdvancedSearch = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize react-hook-form
  const router = useRouter(); // Use the useRouter hook for navigation

  // Function to handle form submission
  const submitForm = (data) => {
    let queryString = "searchBy=true"; // Initialize query string with searchBy=true
    
    // Conditionally append other parameters to the query string
    if (data.geoLocation) queryString += `&geoLocation=${data.geoLocation}`;
    if (data.medium) queryString += `&medium=${data.medium}`;
    if (data.isOnView) queryString += `&isOnView=${data.isOnView}`;
    if (data.isHighlight) queryString += `&isHighlight=${data.isHighlight}`;
    if (data.q) queryString += `&q=${data.q}`;
    
    // Redirect to the "/artwork" page with the generated query string
    router.push(`/artwork?${queryString}`);
  };

  return (
    <div>
      <h2>Advanced Search</h2>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formGeoLocation">
              <Form.Label>Geo Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Geo Location"
                {...register('geoLocation')}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formMedium">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Medium"
                {...register('medium')}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formIsOnView">
              <Form.Label>Is On View</Form.Label>
              <Form.Control
                as="select"
                {...register('isOnView')}
              >
                <option value="">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formIsHighlight">
              <Form.Label>Is Highlight</Form.Label>
              <Form.Control
                as="select"
                {...register('isHighlight')}
              >
                <option value="">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group controlId="formSearchBy">
              <Form.Label>Search By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Search Term"
                {...register('q', { required: "Search term is required" })} // Adding validation for required field
                className={errors.q ? "is-invalid" : ""}
              />
              {errors.q && <div className="invalid-feedback">{errors.q.message}</div>} {/* Show error message */}
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="mt-3">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default AdvancedSearch;
