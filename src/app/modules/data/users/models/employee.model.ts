export class EmployeeModel {
  id: number;
  fullname: string;
  age: number;
  address: string;
  phone: string;

  constructor(
    id?: number,
    fullname?: string,
    age?: number,
    address?: string,
    phone?: string
  ) {
    this.id = id || 0;
    this.fullname = fullname || '';
    this.age = age || 0;
    this.address = address || '';
    this.phone = phone || '';
  }
}
