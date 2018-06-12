using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Draycir.Approvals.DemoApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Draycir.Approvals.DemoApp.Controllers
{
    [ApiV1Route("users")]
    public class UserController : Controller
    {
        private readonly List<User> _users = new List<User>{
            new User{ Name = "Chris", Id = new Guid("595a4ceb-5192-4b00-b79d-f67e2252f76b")}
        };

        public UserController()
        {
        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            return Ok(_users);
        }
    }
}