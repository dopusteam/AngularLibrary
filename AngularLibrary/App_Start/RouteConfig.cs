using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngularLibrary
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "routeOne",
                url: "Home/One",
                defaults: new {controller = "Home", action = "One"}
            );

            routes.MapRoute(
                name: "routeTwo",
                url: "Home/Two/{donuts}",
                defaults: new { controller = "Home", action = "Two", donuts = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "routeThree",
                url: "Home/Three",
                defaults: new { controller = "Home", action = "Three" }
            );

            routes.MapRoute(
                name: "routeFour",
                url: "Home/Four",
                defaults: new { controller = "Home", action = "Four" }
            );

            routes.MapRoute(
                name: "login",
                url: "Account/Login",
                defaults: new { controller = "Account", action = "Login" }
            );

            routes.MapRoute(
                name: "register",
                url: "Account/Register",
                defaults: new { controller = "Account", action = "Register" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
