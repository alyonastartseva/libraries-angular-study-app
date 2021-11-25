import { Employee } from "./employee";

export interface ILibrary {

  id: number;
  name: string;
  locale: string;
  address: string;
  organizationName?: string;
  description?: string;
  employees: Employee[];

}
