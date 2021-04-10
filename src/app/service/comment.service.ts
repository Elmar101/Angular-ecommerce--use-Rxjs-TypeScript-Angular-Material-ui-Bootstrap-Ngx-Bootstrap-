import { Injectable } from '@angular/core';
import { Comment } from '../model/Comment';
@Injectable()
export class CommentService {
  comment= new Comment();

  constructor() { }

  clearComment(){
    this.comment.id = null;
    this.comment.name = this.comment.email =this.comment.comment = this.comment.text = null;
    this.comment.isSent = false;
  }

}
