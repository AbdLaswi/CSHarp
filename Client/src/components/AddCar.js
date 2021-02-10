import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
export default function AddCar() {
  const [data, setData] = useState({
    model: "",
    company: "",
    color: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("Cars", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Update Lease</Popover.Title>
      <Popover.Content>
        The Car Has been Added Check Successfully
      </Popover.Content>
    </Popover>
  );
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Car Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Car Model"
          onChange={(e) => setData({ ...data, model: e.target.value })}
          value={data.model}
          required
          style={{ width: "225px" }}
        />
      </Form.Group>{" "}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Company Name"
          onChange={(e) => setData({ ...data, company: e.target.value })}
          value={data.company}
          required
          style={{ width: "225px" }}
        />
      </Form.Group>{" "}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="Color"
          onChange={(e) => setData({ ...data, color: e.target.value })}
          value={data.color}
          required
          style={{ width: "225px" }}
        />
      </Form.Group>{" "}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          value={data.phone}
          required
          style={{ width: "225px" }}
        />
      </Form.Group>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "10%" }}
        >
          Create
        </Button>
      </OverlayTrigger>
    </Form>
  );
}
