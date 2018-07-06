import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends Common implements OnInit {

  constructor(public router: Router,
    private authService: AuthService) {
    super(router);
   }

  ngOnInit() {
    super.ngOnInit();    
  }

}
