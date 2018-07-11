import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent extends Common implements OnInit {

  constructor(public router: Router) {
    super(router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
