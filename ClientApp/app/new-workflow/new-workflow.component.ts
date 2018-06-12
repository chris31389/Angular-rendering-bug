import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WorkflowService } from '../workflows/workflow.service';
import { Workflow } from '../workflows/workflow';

@Component({
  selector: 'sample-new-workflow',
  templateUrl: './new-workflow.component.html',
  styleUrls: ['./new-workflow.component.css']
})
export class NewWorkflowComponent implements OnInit {
  newWorkflowName = "";
  formSubmitting = false;

  @Output()
  onCreate = new EventEmitter<Workflow>();

  constructor(private readonly workflowService: WorkflowService) { }

  ngOnInit() {
  }

  create = () => {
    this.formSubmitting = true;
    this.workflowService.create(this.newWorkflowName).subscribe(workflow => {
      this.reset();
      this.onCreate.emit(workflow);
    });
  };

  private reset = () => {
    this.formSubmitting = false;
    this.newWorkflowName = "";
  }
}
