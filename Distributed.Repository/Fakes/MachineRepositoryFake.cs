using Distributed.Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Distributed.Repository
{
    public class MachineRepositoryFake : IMachineRepository
    {
        public static List<Machine> _Machines = new List<Machine>();

        static MachineRepositoryFake()
        {
            _Machines.Add(new Machine()
            {
                Id = 1,
                LastPing = new DateTime(2017, 3, 25, 18, 0, 0),
                Name = "First OEM"
            });
            _Machines.Add(new Machine()
            {
                Id = 2,
                LastPing = new DateTime(2017, 3, 26, 19, 0, 0),
                Name = "NT Blazer 3000"
            });
        }

        public IQueryable<Machine> All()
        {
            return _Machines.AsQueryable();
        }
    }
}
