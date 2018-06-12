import { Injectable } from "@angular/core";
import { Workflow } from "./item";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

@Injectable()
export class WorkflowService {
  private listItems = [new Workflow({ id: "abc123", name: "bob" })];

  constructor(
  ) {}

  get workflows(): Observable<Array<Workflow>> {
    return of(this.listItems);
  }

  get approvalsAppUrl(): Observable<string>{  
    return of("some-app-url");
  }
}
