export class Library {

  imageUrl: string;

  constructor(
    public name: string,
    public locale: string,
    public address: string,
    public organizationName?: string,
    public description?: string,
  ) {
    this.imageUrl = "https://all.culture.ru/uploads/f4141dae0c06262f263c4d0bbe86509c.jpg";
  }

}
