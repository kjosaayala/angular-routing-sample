export class ColumnDTO {
  fieldName: string;
  label?: string;
  actionEdit?: boolean;
  /**
   *
   */
  constructor() {
    this.fieldName = '';
  }
}
