import { Component, OnInit, Input } from "@angular/core";
import { FieldService } from "./field.service";
import { Field } from "./field";
import { ReferenceData } from "../reference-data";

@Component({
  selector: "sample-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.css"]
})
export class FieldsComponent implements OnInit {
  private _workflowId : string;
  public get workflowId() : string {
    return this._workflowId;
  }

  @Input()
  public set workflowId(value : string) {
    this.loading = true;
    this._workflowId = value;
    this.fieldService.getAll(this.workflowId).subscribe(this.setupFields);
  }
  
  loading = true;
  originalFields: Array<Field>;
  fields = new Array<Field>();

  constructor(private readonly fieldService: FieldService) {}

  ngOnInit() {
    this.fieldService.getAll(this.workflowId).subscribe(this.setupFields);
  }

  addField = () => this.fields.push(new Field());

  onFieldIsOptionalUpdate = (field: Field) =>
    (field.isOptional = !field.isOptional);

  nameKeyPress = (event: any) => this.keyPress(event, /[0-9a-zA-Z ]/);

  private keyPress(event: any, pattern: RegExp) {
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  private setupFields = (fields: Array<Field>) => {
    this.loading = true;
    this.originalFields = fields;
    this.reset();
    this.loading = false;
  };

  reset = () => {
    if (this.fields && this.fields.length > 0)
      this.fields.splice(0, this.fields.length);
    this.originalFields.forEach(originalField =>
      this.fields.push(new Field(originalField))
    );
  };
}
