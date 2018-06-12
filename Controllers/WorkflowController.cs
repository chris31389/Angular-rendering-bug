using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Draycir.Approvals.DemoApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Draycir.Approvals.DemoApp.Controllers
{
    [ApiV1Route("workflows")]
    public class WorkflowController : Controller
    {
        private readonly List<Workflow> _workflows = new List<Workflow>
        {
            new Workflow { Id = new Guid("d823c994-c35f-4086-86dd-b5f94856e81d"), Name = "AAAA", DefaultApprove = false },
            new Workflow { Id = new Guid("d823c994-c35f-4086-86dd-b5f94856e81e"), Name = "BBBB", DefaultApprove = false },
            new Workflow { Id = new Guid("d823c994-c35f-4086-86dd-b5f94856e81f"), Name = "CCCC", DefaultApprove = false }
        };

        public WorkflowController()
        { }

        [HttpPost("")]
        public  IActionResult Create([FromBody] CreateWorkflow createWorkflow)
        {
            return Ok(new Workflow { Id = Guid.NewGuid(), Name = "Random", DefaultApprove = false });
        }

        [HttpPost("sync")]
        public  IActionResult SyncAll()
        {
            return Ok(_workflows);
        }

        [HttpPut("{workflowId:guid}/fields")]
        public  IActionResult Update(Guid workflowId, [FromBody] IEnumerable<CreateOrUpdateField> createOrUpdateFields)
        {
            return Ok(null);
        }

        [HttpGet("{workflowId:guid}/fields")]
        public  IActionResult GetFields(Guid workflowId)
        {
            Workflow workflow = _workflows.FirstOrDefault(x => x.Id == workflowId);

            if (workflow == null)
            {
                return NotFound();
            }

            return Ok(workflow.Fields);
        }

        [HttpGet("app-url")]
        public IActionResult GetAppTemplateUrl() =>
            Ok(new AppInfo { Url = $"https://randomUrl.com/workflow/{{workflowId}}" });

        [HttpGet("")]
        public  IActionResult GetAll()
        {
            return Ok(_workflows);
        }

        [HttpDelete("{workflowId:guid}")]
        public  IActionResult Remove(Guid workflowId)
        {
            return NoContent();
        }

        [HttpGet("fields/data-types")]
        public  IActionResult GetFieldTypes()
        {
            Dictionary<int, string> dataTypes = new Dictionary<int,string>{
                { 1, "dataType1"}
            };
            return Ok(dataTypes);
        }
    }
}