export class Signin{
  public id!: number | null;
  public name!: string | null;
  public email!: string | null;
  public password!: string | null;

  public isSent: boolean = false;
  public authorization!: {
   name?: string,
    email?: string ,
     password?: string
  } ;
}
