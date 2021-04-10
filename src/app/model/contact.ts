export class Contact {
  public id!: number | null;
  public firstName!: string | null;
  public lastName!: string | null;
  public phone!: string | null;
  public email!: string | null;

  public isSent: boolean = false;
}
