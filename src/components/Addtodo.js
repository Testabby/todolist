import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Addtodo = () => {
    let addForm = {
    margin: "4vh",
    }
  return (
    <div style={addForm}>
        <h3  className="text-center">Add A To Do</h3>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>To Do Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter Title Here..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>To Do Description</Form.Label>
        <Form.Control type="Text" placeholder="Enter Description Here..." />
      </Form.Group>
    
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form> 
    </div>
  )
}
