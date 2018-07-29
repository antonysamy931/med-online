import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-pharma-user',
  templateUrl: './update-pharma-user.component.html',
  styleUrls: ['./update-pharma-user.component.css']
})
export class UpdatePharmaUserComponent extends Common implements OnInit {

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    super(router);
  }

  private UserId : any;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.UserId = param['id'];
    });
  }

}
