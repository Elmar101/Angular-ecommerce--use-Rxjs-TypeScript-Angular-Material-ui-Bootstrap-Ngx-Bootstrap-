import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { ContactRepoService } from 'src/app/service/repository-service/contact-repo.service';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'popup-contact',
  templateUrl: './popup-contact.component.html',
  styleUrls: ['./popup-contact.component.scss']
})
export class PopupContactComponent implements OnInit {

  contactSent: boolean = false;
  submitted: boolean = false;
 /*  public _contactForm!: FormGroup;
 */
  constructor(
      public  contactService: ContactService,
      private contactRepoService: ContactRepoService,
      private _formBuilder: FormBuilder,
      private dialogRef: MatDialogRef<PopupContactComponent>,
  //private _contactService: ContactService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {
  }
  submitContact(form:NgForm){
    this.submitted = true;
    if(form.valid){
      this.contactRepoService.saveContacts( this.contactService )
           .subscribe(contact=> {
             this.contactSent = true;
             this.submitted = false;
             this.dialogRef.close();
           });
    }else {
      this.dialogRef.close();
    }
  }

}
