using Portfolio___Solution.Repository;
using Portfolio___Solution.Services;
using System.Runtime.CompilerServices;

namespace Portfolio___Solution
{
    public static class ServiceExtension
    {
        public static void customServices(this IServiceCollection service)
        {
            service.AddScoped<ILoginService, LoginService>();
            service.AddScoped<IGlimpsesService, GlimpsesService>();
            service.AddScoped<IPortfolioRepository, PortfolioRepository>();
        }
    }
}
