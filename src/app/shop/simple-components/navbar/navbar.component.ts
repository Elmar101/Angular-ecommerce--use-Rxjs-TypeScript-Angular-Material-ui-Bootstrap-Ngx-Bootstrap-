import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'shop-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () =>{
    this.sidenavToggle.emit();
  }
}
