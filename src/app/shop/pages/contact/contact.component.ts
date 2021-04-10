import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from 'src/app/service/comment.service';
import { CommentRepoService } from 'src/app/service/repository-service/commentRepo.service';
import { ServicesRepositoryService } from 'src/app/service/repository-service/servicesRepo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  submitted: boolean = false;

  constructor(public serviceRepozitory: ServicesRepositoryService,
    private commentRepoService: CommentRepoService,
    public commentService: CommentService) { }

  ngOnInit(): void {
  }

  saveMessages(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.commentRepoService.saveComment(this.commentService)
      .subscribe(response => {
        this.commentService.clearComment();
        this.submitted = false;
        form.reset();
      })

    }
  }

}
