using System;
using System.Collections.Generic;
using System.Text;

namespace Distributed.Domain
{
    public class Task
    {
        public int Id { get; set; }

        public string Description { get; set; }
        public int DurationSec { get; set; }

        public string TypeName { get; set; }
        public string AssemblyName { get; set; }
    }
}
