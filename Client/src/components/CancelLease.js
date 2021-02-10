import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
export default function CancelLease() {
  const history = useHistory();
  const url = window.location.href.split("/");
  let id = url[url.length - 1][0];
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .delete(`Rental/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Update Lease</Popover.Title>
      <Popover.Content>
        The Lease Has been Deleted Check Your List Please
      </Popover.Content>
    </Popover>
  );
  return (
    <Form>
      <p>Do You Want To Cancel Your Lease?</p>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button type="submit" onClick={handleClick}>
          YES
        </Button>
      </OverlayTrigger>
      <Button
        type="click"
        Onclick={() => {
          history.push("/rent");
          history.go(0);
        }}
      >
        NO
      </Button>
    </Form>
  );
}
