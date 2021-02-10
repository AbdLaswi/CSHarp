import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GetCars() {
  const history = useHistory();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
    .get("cars")
      .then((response) => {
        setCars([...response.data]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);
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
            <th>Rented</th>
            <th>Want to rent?</th>
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

                <Button
                  type="submit"
                  onClick={() => {
                    history.push(`/rent/${car.id}`);
                    history.go(0);
                  }}
                >
                  Rent
                </Button>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}
