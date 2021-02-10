using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using Server.Context;
using Server.Models;


namespace Server.Controllers
{
[EnableCors("*","*","*")]
    public class CarsController : ApiController
    {
        public readonly DataBaseContext db = new DataBaseContext();
        [HttpGet]
        public IHttpActionResult GetAvalableCars()
        {
            try
            {
                //get all cars taht are not rented yet in home pages 
                var query = from Car in db.Cars
                            where Car.IsRented =="NO"
                            select new {Car.ID, Car.Company, Car.Model,Car.Color, Car.IsRented, Car.Phone };
                return Ok(query);
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }

        [HttpGet]
        public IHttpActionResult GetCar(int id)
        {
            try
            {
                //get car by id
                var data = db.Cars.Find(id);
                if(data != null)
                {
                return Ok(data);
                }
                return Ok("The Car Does Not Exist");
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }
        [HttpPost]
        public IHttpActionResult AddCar([FromBody]Entites.Car car)
        {
            try
            {
                db.Cars.Add(car);
                db.SaveChanges();
                return Ok("The Car has been Added");
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }

        }

    }
}
