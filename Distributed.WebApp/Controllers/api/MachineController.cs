using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Distributed.Repository;
using Distributed.Domain;

namespace Distributed.WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/Machine")]
    public class MachineController : Controller
    {
        private readonly IMachineRepository _machineRepo;

        public MachineController(IMachineRepository machineRepo)
        {
            _machineRepo = machineRepo;
        }

        [HttpGet]
        public IEnumerable<Machine> GetAll()
        {
            return _machineRepo.Get();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var machine =  _machineRepo.GetById(id);

            return machine == null ? NotFound() : (IActionResult)new ObjectResult(machine);
        }
    }
}