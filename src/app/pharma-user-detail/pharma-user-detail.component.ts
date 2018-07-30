import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaUserService } from '../Service/PharmaUser/pharma-user.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatDialog } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-pharma-user-detail',
  templateUrl: './pharma-user-detail.component.html',
  styleUrls: ['./pharma-user-detail.component.css']
})
export class PharmaUserDetailComponent extends Common implements OnInit {

  constructor(public router: Router, 
    private activatedroute: ActivatedRoute, 
    private pharmauserservice: PharmaUserService, 
    private spinner: NgxSpinnerService, private matdialog: MatDialog) {
    super(router);
  }

  private userid: any;
  private pharmauser: any;

  ngOnInit() {
    super.ngOnInit();

    this.activatedroute.params.subscribe((param) => {
      this.userid = param['id'];
    });

    this.LoadUserDetail();
  }

  LoadUserDetail() {
    this.spinner.show();
    this.pharmauserservice.GetPharmaUserDetail(this.userid).subscribe((data) =>{
      this.pharmauser = data;
      console.log(this.pharmauser);
      this.spinner.hide();
    }, (error) =>{
      this.OpenDialog(this.matdialog, error.message, "Error");
      this.spinner.hide();
    });
  }  
}
