import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaUserService } from '../Service/PharmaUser/pharma-user.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatDialog } from '../../../node_modules/@angular/material';
import { PharmaUser, Name, Phone } from '../Module/Model/PharmaUser';
import { Pharma, Address } from '../Module/Model/Pharma';

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
  private pharmauser: PharmaUser = new PharmaUser();  

  ngOnInit() {
    super.ngOnInit();

    this.activatedroute.params.subscribe((param) => {
      this.userid = param['id'];
    });

    this.pharmauser.Pharma = new Pharma();
    this.pharmauser.Pharma.Address = new Address();
    this.pharmauser.Name = new Name();
    this.pharmauser.Phone = new Phone();
    
    this.LoadUserDetail();
  }

  LoadUserDetail() {
    this.spinner.show();
    this.pharmauserservice.GetPharmaUserDetail(this.userid).subscribe((data) =>{
      this.pharmauser = data;      
      this.spinner.hide();
    }, (error) =>{
      this.OpenDialog(this.matdialog, error.message, "Error");
      this.spinner.hide();
    });
  }  
}
