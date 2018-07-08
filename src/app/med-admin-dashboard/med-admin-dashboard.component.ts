import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'med-admin-dashboard',
  templateUrl: './med-admin-dashboard.component.html',
  styleUrls: ['./med-admin-dashboard.component.css']
})
export class MedAdminDashboardComponent extends Common implements OnInit {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  constructor(public router: Router){
    super(router);
  }

  ngOnInit(){
    super.ngOnInit();
  }
}
