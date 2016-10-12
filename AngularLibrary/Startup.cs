using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularLibrary.Startup))]
namespace AngularLibrary
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
