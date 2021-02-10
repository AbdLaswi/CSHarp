import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import axios from "axios";
export default function OrderList() {
  const [list, setList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("Rental")
      .then((response) => {
        setList([...response.data]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <Router>
      <Table striped bordered hover variant="dark">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>#</th>
            <th>Model</th>
            <th>Company</th>
            <th>Color</th>
            <th>Owner Number</th>
            <th>From</th>
            <th>To</th>
            <th>Edit Your Lease</th>
            <th>Delete Your Lease</th>
          </tr>
        </thead>
        {list.map((car, index) => {
          return (
            <tbody style={{ textAlign: "center" }}>
              <tr key={index}>
                <td>{car.id}</td>
                <td>{car.model}</td>
                <td>{car.company}</td>
                <td>{car.color}</td>
                <td>{car.phone}</td>
                <td>{car.rentDateStart}</td>
                <td>{car.rentDateEnd}</td>
                <td>
                  <Route>
                    <Button
                      onClick={() => {
                        history.push(`/rentedit/${car.id}`);
                        history.go(0);
                      }}
                    >
                      Update Rent
                    </Button>
                  </Route>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      history.push(`/rentcancellation/${car.id}`);
                      history.go(0);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Router>
  );
}
