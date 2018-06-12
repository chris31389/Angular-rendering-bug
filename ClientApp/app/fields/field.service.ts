import { Injectable } from "@angular/core";
import { Field } from "./field";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

@Injectable()
export class FieldService {
  private fields = [new Field({ id: "field123", name: "bob", key: "key" })];
  constructor(
  ) {}

  getAll = (workflowId: string): Observable<Array<Field>> => {
    return of(this.fields)
  };
}
