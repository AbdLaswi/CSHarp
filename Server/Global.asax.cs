using System.Web;
using System.Linq;
using System.Web.Http;
using System.Data.Entity;
using Server.Context;

namespace Server
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            Database.SetInitializer(new DataBaseInitializer());
        
        }
        
    }

}
