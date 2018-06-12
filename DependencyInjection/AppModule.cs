using Draycir.Approvals.DemoApp.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace Draycir.Approvals.DemoApp.DependencyInjection
{
    public static class ApprovalsApiModule
    {
        public static IServiceCollection AddAppModule(this IServiceCollection serviceCollection) =>
            serviceCollection
                .AddSingleton<IActionContextAccessor, ActionContextAccessor>()
                .AddTransient<IHttpContextAccessor, HttpContextAccessor>()
                .AddScoped(serviceProvider =>
                {
                    IUrlHelperFactory urlHelperFactory = serviceProvider.GetService<IUrlHelperFactory>();
                    IActionContextAccessor actionContextAccessor = serviceProvider.GetService<IActionContextAccessor>();
                    return urlHelperFactory.GetUrlHelper(actionContextAccessor.ActionContext);
                });
    }
}