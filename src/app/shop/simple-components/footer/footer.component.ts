import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from 'src/app/service/contact.service';
import { PopupContactComponent } from '../popup-contact/popup-contact.component';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isPopupOpened = true;
  constructor(
    private dialog: MatDialog,
    private contactService?: ContactService
  ) { }

  ngOnInit(): void {
  }
  addContact(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog?.open(PopupContactComponent, {
      data: {}
    });


    dialogRef?.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });

  }


}
