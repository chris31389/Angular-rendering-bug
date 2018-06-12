import { Component, OnInit } from "@angular/core";
import { WorkflowService } from "./workflow.service";
import { Workflow } from "./workflow";

@Component({
    selector: "sample-workflows",
    templateUrl: "./workflows.component.html",
    styleUrls: ["./workflows.component.css"]
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

    get canGetAppUrlLink(): boolean {
        return (
            this.approvalsAppUrlTemplate !== null &&
            this.approvalsAppUrlTemplate !== undefined
        );
    }

    getAppUrlLink = (workflowId: string): string => `https://localhost.com/${workflowId}`;

    selectWorkflow = (workflow: Workflow) => (this.selectedWorkflow = workflow);

    private selectDefaultWorkflow = (): void => {
        if (this.workflows && this.workflows.length > 0) {
            this.selectedWorkflow = this.workflows[0];
        }
    };

    addWorkflow = (workflow: Workflow) => {
        if (!this.workflows) this.workflows = new Array<Workflow>();
        this.workflows.push(workflow);
        this.selectedWorkflow = workflow;
    };

    showNewWorkflowForm = () => {
        this.selectedWorkflow = undefined;
    };

    removeWorkflow = (workflow: Workflow, event: Event) => {
        event.stopPropagation();
        this.workflowService.remove(workflow.id).subscribe(() => {
            const indexToRemove = this.workflows.indexOf(workflow);
            this.workflows.splice(indexToRemove, 1);
        });
    };

    syncWorkflows = () =>
        this.workflowService.syncAll().subscribe(workflows => {
            this.workflows = workflows;
            this.selectDefaultWorkflow();
        });
}
