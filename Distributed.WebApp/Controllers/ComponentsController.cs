using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Distributed.WebApp.Controllers
{
    public class ComponentsController : Controller
    {
        public IActionResult AppComponent() => PartialView();

        public IActionResult IndexComponent() => PartialView();

        public IActionResult MachinesComponent() => PartialView();
    }
}