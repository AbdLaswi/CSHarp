using System.Data.Entity;
using Server.Models;
namespace Server.Context
{
    public class DataBaseContext :DbContext
    {
        public DataBaseContext() : base("RentalCar") { }
        public DbSet<Entites.Car> Cars { get; set; }
        public DbSet<Entites.Rented> Renteds { get; set; }
    }
}