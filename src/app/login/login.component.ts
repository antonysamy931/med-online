import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Common implements OnInit {

  constructor(public router: Router) {
    super(router);
   }

  ngOnInit() {
  }

}
