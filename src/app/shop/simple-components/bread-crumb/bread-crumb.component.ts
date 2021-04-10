import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  breadcrumbs$!: Observable<any[]>;

  constructor(private xngBreadCrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbs$ = this.xngBreadCrumbService.breadcrumbs$;
  }

}
