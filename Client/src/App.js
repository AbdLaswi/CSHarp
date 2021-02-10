import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GetCars from "./components/GetCars";
import NavBar from "./components/NavBar";
import Rent from "./components/Rent/Rent";
import OrderList from "./components/OrderList";
import RentUpdate from "./components/RentUpdate";
import CancelLease from "./components/CancelLease";
import AddCars from "./components/AddCar"
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/">
          <GetCars />
        </Route>
        <Route path="/rent">
          <Rent />
        </Route>
        <Route path="/orderlist">
          <OrderList />
        </Route>
        <Route path="/rentedit/">
          <RentUpdate />
        </Route>
        <Route path="/rentcancellation">
          <CancelLease />
        </Route>
        <Route path="/cars/newcar">
          <AddCars />
        </Route>
      </Router>
    </div>
  );
};
export default App;
