export class Field {
  id: string;
  name: string;
  key: string;
  isOptional: boolean;

  constructor(json?: any) {
    if (!json) {
      this.name = "";
      this.isOptional = false;
      return;
    }
    this.id = json.id;
    this.name = json.name;
    this.key = json.key;
    this.isOptional = json.isOptional;
  }

  get isValid(): boolean {
    return (
      this.name !== undefined &&
      this.name.length > 0 &&
      this.isOptional !== undefined
    );
  }
}
