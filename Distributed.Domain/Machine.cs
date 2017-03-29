using System;

namespace Distributed.Domain
{
    public class Machine
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime LastPing { get; set; }
    }
}
