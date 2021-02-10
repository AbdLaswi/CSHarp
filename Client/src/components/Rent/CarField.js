import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
export default function CarField() {
  const url = window.location.href.split("/");
  let id = url[url.length - 1][0];
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`Cars/${id}`)
      .then((response) => {
        setCars([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  console.log(cars)
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Company</th>
            <th>Color</th>
            <th>Owner Number</th>
            <th>rented?</th>
          </tr>
        </thead>
        {cars.map((car, index) => {
          return (
            <tbody style={{ textAlign: "center" }}>
              <tr key={index}>
                <td>{car.id}</td>
                <td>{car.model}</td>
                <td>{car.company}</td>
                <td>{car.color}</td>
                <td>{car.phone}</td>
                <td>{car.isRented}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
