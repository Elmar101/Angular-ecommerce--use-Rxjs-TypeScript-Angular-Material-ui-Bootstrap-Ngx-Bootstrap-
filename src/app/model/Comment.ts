export class Comment {
  public id!: number | null ;
  public name!: string | null ;

  public email!: string | null ;
  public comment!: string | null ;

  public subject!: string | null;
  public text!: string | null;

  public isSent: boolean = false;

}
