import React from "react";
import { Form } from "react-bootstrap";
import RentField from "./RentField";
import CarField from "./CarField";

export default function Rent() {
  return (
    <Form>
      <CarField />
      <RentField />
    </Form>
  );
}
