import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';

@Injectable()
export class CommentRepoService {

  private comments: CommentService[] = [];

  constructor(
              private restService: RestService,
             ) { }

  getComments(): CommentService[]{
    return this.comments;
  }

  saveComment(comments: CommentService): Observable< CommentService>{
    return this.restService.getSaveComments(comments);
  }

}
