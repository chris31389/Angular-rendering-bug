import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Workflow } from "./item";
import { Observable } from "rxjs";

@Injectable()
export class WorkflowService {
  private readonly url = `${this.appUrl}/api/v1/workflows`;

  constructor(
    private readonly http: HttpClient,
    @Inject("ORIGIN_URL") private readonly appUrl: string
  ) {}

  get workflows(): Observable<Array<Workflow>> {
    return this.http.get(this.url).map(this.mapResponse);
  }

  get approvalsAppUrl(): Observable<string>{  
    return this.http.get<any>(`${this.url}/app-url`)
        .map(json => json.url);
  }

  remove = (workflowId: string): Observable<any> =>
    this.http.delete(`${this.url}/${workflowId}`);

  create = (workflowName: string): Observable<Workflow> =>
    this.http
      .post(this.url, { name: workflowName })
      .map(json => new Workflow(json));

  syncAll = (): Observable<Array<Workflow>> =>
    this.http.post(this.url + "/sync", {}).map(this.mapResponse);

  private mapResponse = (response: Workflow) =>
    Array.isArray(response)
      ? response.map<Workflow>(element => new Workflow(element))
      : new Array<Workflow>();
}
