using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;


namespace Server.Models
{
    public class Entites
    {
        public class Car
        {
            [Key]
            public int ID { get; set; }
            public string Model { get; set; }
            public string Company { get; set; }
            public string Color { get; set; }
            public string IsRented { get; set; }
            public Int64 Phone { get; set; }
            //foregin key
            public ICollection<Rented> Renteds { get; set; }
            // Default value for is rented to be false(NO)
            public Car()
            {
                IsRented = "NO";
            }
        }
        public class Rented
        {
            [Key]
            public int ID { get; set; }
            public string Renter { get; set; }
            public string RentDateStart { get; set; }
            public string RentDateEnd { get; set; }
            //foregin key
            public int CarID { get; set; }
            public Car Car { get; set; }

        }
    }
}