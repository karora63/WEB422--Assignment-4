import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    let queryString = `searchBy=true`;

    if (data.geoLocation) {
      queryString += `&geoLocation=${data.geoLocation}`;
    }
    if (data.medium) {
      queryString += `&medium=${data.medium}`;
    }
    queryString += `&isOnView=${data.isOnView}`;
    queryString += `&isHighlight=${data.isHighlight}`;
    queryString += `&q=${data.q}`;

  router.push(`/artwork?${queryString}`);
  };

  return (
    <div>
      <h2>Advanced Search</h2>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSearch">
            <Form.Label>Search Query</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter search term"
              {...register("q", { required: true })}
              className={errors.q ? 'is-invalid' : ''}
            />
            {errors.q && <div className="invalid-feedback">Search term is required.</div>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGeoLocation">
            <Form.Label>Geolocation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location (optional)"
              {...register("geoLocation")}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMedium">
            <Form.Label>Medium</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter medium (optional)"
              {...register("medium")}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridIsOnView">
            <Form.Label>On View</Form.Label>
            <Form.Control
              as="select"
              {...register("isOnView")}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridIsHighlight">
            <Form.Label>Highlight</Form.Label>
            <Form.Control
              as="select"
              {...register("isHighlight")}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}
