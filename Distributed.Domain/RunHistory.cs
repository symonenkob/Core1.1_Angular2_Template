using System;
using System.Collections.Generic;
using System.Text;

namespace Distributed.Domain
{
    public class RunHistory
    {
        public int Id { get; set; }

        public int TaskId { get; set; }
        public DateTime Time { get; set; }

        public int Result { get; set; }
        public string ResultMessage { get; set; }

        public virtual Task Task { get; set; }
    }
}
