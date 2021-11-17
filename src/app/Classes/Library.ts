export class Library {

  id: number;

  constructor(
    public name: string,
    public locale: string,
    public address: string,
    public organizationName?: string,
    public description?: string,
  ) {
    this.id = Date.now();
  }

}
