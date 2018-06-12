using System;
using Microsoft.AspNetCore.Mvc;

namespace Draycir.Approvals.DemoApp.Controllers
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class ApiV1RouteAttribute : RouteAttribute
    {
        public ApiV1RouteAttribute(string prefix, params string[] additionalprefixes)
            : base($"api/v1/{prefix}" +
                   $"{(additionalprefixes != null && additionalprefixes.Length > 0 ? "/" + string.Join("/", additionalprefixes) : "")}")
        {
        }
    }
}