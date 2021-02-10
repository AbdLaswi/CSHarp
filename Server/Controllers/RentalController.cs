using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Server.Context;
using Server.Models;

namespace Server.Controllers
{
[EnableCors("*", "*", "*")]
    public class RentalController : ApiController
    { 
        
        private readonly DataBaseContext db = new DataBaseContext();
        [HttpGet]
        public IHttpActionResult GetRentedCars()
            
        {
            try
            {
                //to get all rented car
                var query = from Car in db.Cars
                            join Rented in db.Renteds on Car.ID equals Rented.CarID
                            where Car.IsRented == "YES"
                            select new { Car.ID, Car.Model, Car.Company, Car.Color, Car.Phone, Rented.RentDateStart, Rented.RentDateEnd };
                return Ok(query);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }
        [HttpPost]
        public IHttpActionResult RentCar([FromBody] Entites.Rented car)
        {
            try
            {
                //update the value of that car that has been rented in isRented colomn to YES
                var data = db.Cars.Find(car.CarID);

                data.IsRented = "YES";
                db.Renteds.Add(car);
                db.SaveChanges();

                return Ok(car);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }
        [HttpPut]
        public IHttpActionResult EditLease([FromBody] Entites.Rented car)
        {
            try
            {
                //update the value of that car that has been rented in isRented colomn to YES
                var data = db.Renteds.Find(car.CarID);
                data.RentDateStart = car.RentDateStart;
                data.RentDateEnd = car.RentDateEnd;
                db.SaveChanges();
                return Ok(car);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }
        [HttpDelete]
        public IHttpActionResult DeleteLease(int id)
        {
            try
            {
                //update the value of that car that has been rented in isRented colomn to YES
                var data = db.Renteds.Find(id);
                var deleteLease = db.Cars.Find(id);
                deleteLease.IsRented = "NO";
                db.Renteds.Remove(data);
                db.SaveChanges();
                return Ok("The Lease has bee deleted" );
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }

    }
}
