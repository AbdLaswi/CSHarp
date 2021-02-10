using System.Collections.Generic;
using System.Data.Entity;
using Server.Models;
namespace Server.Context
{
    public class DataBaseInitializer : DropCreateDatabaseIfModelChanges<DataBaseContext>
    {
        protected override void Seed(DataBaseContext context)
        {
            var Cars = new List<Entites.Car>
            {
                new Entites.Car{Model = "Fusion 2017", Company ="Ford", Color ="Black",Phone =00962788174310},
                new Entites.Car{Model = "Fusion 2017", Company ="Ford", Color ="Blue",Phone =00962788174310},
                new Entites.Car{Model = "Fusion 2017", Company ="Ford", Color ="Red",Phone =00962788174310},
                new Entites.Car{Model = "Bolt ev 2017", Company ="Chevorlot", Color ="Red",Phone =00962788174310},
                new Entites.Car{Model = "Volt ev 2019", Company ="Chevorlot", Color ="Black",Phone =00962788174310},
                new Entites.Car{Model = "Focus 2017", Company ="Ford", Color ="White",Phone =00962788174310},
                new Entites.Car{Model = "Focus 2016", Company ="Ford", Color ="Red",Phone =00962788174310},
                new Entites.Car{Model = "Fusion 2017", Company ="Ford", Color ="Black",Phone =00962788174310},
                new Entites.Car{Model = "Sephia 2018", Company ="Kia", Color ="Black",Phone =00962788174310},
                new Entites.Car{Model = "Niro 2019", Company ="Kia", Color ="Black",Phone =00962788174310},
                new Entites.Car{Model = "Model x", Company ="Tesla", Color ="Black",Phone =00962788174310},
            };
            Cars.ForEach(car => context.Cars.Add(car));
            context.SaveChanges();

        }
    }
}