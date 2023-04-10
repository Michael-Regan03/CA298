import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function DegreeForm() {
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      full_name: formData.get('full_name'),
      shortcode: formData.get('shortcode'),
    };
  
    fetch('http://127.0.0.1:8000/api/degree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Data sent successfully');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Create New Degree</h2>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Enter full name</Form.Label>
          <Form.Control type="text" name="full_name" placeholder="Enter full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter short code</Form.Label>
          <Form.Control type="text" name="shortcode" placeholder="Enter short code" />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default DegreeForm;