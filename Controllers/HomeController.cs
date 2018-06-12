using Microsoft.AspNetCore.Mvc;

namespace Draycir.Approvals.DemoApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}