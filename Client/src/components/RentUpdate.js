import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
import axios from "axios";

export default function RentUpdate() {
  const url = window.location.href.split("/");
  let id = url[url.length - 1][0];
  const [data, setData] = useState({
    carID: id,
    rentDateStart: "",
    rentDateEnd: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`Rental`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        throw error;
      });
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Update Lease</Popover.Title>
      <Popover.Content>
        The Lease Has been updated Check Your List Please
      </Popover.Content>
    </Popover>
  );
  return (
    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>From</Form.Label>
        <input
          type="date"
          onChange={(e) =>
            setData({ ...data, rentDateStart: e.target.value })
          }
          value={data.rentDateStart}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>To</Form.Label>
        <input
          type="date"
          onChange={(e) => setData({ ...data, rentDateEnd: e.target.value })}
          value={data.rentDateEnd}
          required
        />
      </Form.Group>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button type="submit" onClick={handleSubmit}>
          Save
        </Button>
      </OverlayTrigger>
    </Form>
  );
}
