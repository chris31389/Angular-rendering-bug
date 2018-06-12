import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Field } from "./field";
import { Observable } from "rxjs";

@Injectable()
export class FieldService {
  constructor(
    private readonly http: HttpClient,
    @Inject("ORIGIN_URL") private readonly appUrl: string
  ) {}

  getAll = (workflowId: string): Observable<Array<Field>> => {
    if (!workflowId) {
      throw new Error("workflowId is required");
    }
    return this.http.get(this.getUrl(workflowId)).map(this.mapResponse);
  };

  private mapResponse = (response: any): Array<Field> =>
    Array.isArray(response)
      ? response.map<Field>(element => new Field(element))
      : new Array<Field>();

  private getUrl = (workflowId: string): string =>
    `${this.appUrl}/api/v1/workflows/${workflowId}/fields`;
}
