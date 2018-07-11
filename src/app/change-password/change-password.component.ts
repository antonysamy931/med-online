import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends Common implements OnInit {

  constructor(public router: Router) { 
    super(router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
