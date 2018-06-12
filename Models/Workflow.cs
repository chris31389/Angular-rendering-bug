using System.Collections.Generic;

namespace Draycir.Approvals.DemoApp.Models
{
    public class Workflow : Entity
    {
        public string Name { get; set; }
        public bool DefaultApprove { get; set; }
        public ICollection<Field> Fields { get; set; }
    }
}