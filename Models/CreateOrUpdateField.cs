using System;

namespace Draycir.Approvals.DemoApp.Models
{
    public class CreateOrUpdateField
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public int DataType { get; set; }
        public bool IsOptional { get; set; }
    }
}