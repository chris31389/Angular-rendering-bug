import { Field } from "../fields/field";

export class Workflow {
  defaultApprove: boolean;
  fields: Array<Field>;
  id: string;
  name: string;

  constructor(json: any) {
    if (!json) return;

    this.id = json.id;
    this.name = json.name;
    this.defaultApprove = json.defaultApprove;
    this.fields =
      Array.isArray(json.fields)
        ? json.fields.map(fieldJson => new Field(fieldJson))
        : new Array<Field>();
  }
}
