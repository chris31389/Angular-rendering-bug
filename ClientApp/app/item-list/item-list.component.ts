import { Component, OnInit } from "@angular/core";
import { WorkflowService } from "./item.service";
import { Workflow } from "./item";

@Component({
    selector: "sample-workflows",
    templateUrl: "./item-list.component.html",
    styleUrls: ["./item-list.component.css"]
})
export class WorkflowsComponent implements OnInit {
    private workflows: Array<Workflow>;
    private selectedWorkflow: Workflow;
    private approvalsAppUrlTemplate: string;

    constructor(private readonly workflowService: WorkflowService) {}

    ngOnInit() {
        this.workflowService.workflows.subscribe(workflows => {
            this.workflows = workflows;
            this.selectDefaultWorkflow();
        });

        this.workflowService.approvalsAppUrl.subscribe(
            url => (this.approvalsAppUrlTemplate = url)
        );
    }

    getAppUrlLink = (workflowId: string): string => `https://localhost.com/${workflowId}`;

    selectWorkflow = (workflow: Workflow) => (this.selectedWorkflow = workflow);

    private selectDefaultWorkflow = (): void => {
        if (this.workflows && this.workflows.length > 0) {
            this.selectedWorkflow = this.workflows[0];
        }
    };

    showNewWorkflowForm = () => {
        this.selectedWorkflow = undefined;
    };
}
