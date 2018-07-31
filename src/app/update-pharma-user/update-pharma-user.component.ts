import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PharmaUserService } from '../Service/PharmaUser/pharma-user.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { PharmaUser, Name, Phone } from '../Module/Model/PharmaUser';
import { Pharma, Address } from '../Module/Model/Pharma';
import { MatDialog } from '../../../node_modules/@angular/material';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import PharmaUserRole from '../Module/Model/PharmaUserRoles';

@Component({
  selector: 'app-update-pharma-user',
  templateUrl: './update-pharma-user.component.html',
  styleUrls: ['./update-pharma-user.component.css']
})
export class UpdatePharmaUserComponent extends Common implements OnInit {

  constructor(public router: Router, 
    private activatedRoute: ActivatedRoute,
    private pharmauserservice: PharmaUserService,
    private spinner: NgxSpinnerService,
    private matdialog: MatDialog,
    private formBuilder: FormBuilder) {
    super(router);
  }

  private userid : any;
  private pharmauser: PharmaUser = new PharmaUser();  

  private PersonalInfo: FormGroup;
  private ContactInfo: FormGroup;
  private AccessInfo: FormGroup;

  private role: any = PharmaUserRole;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.userid = param['id'];
    });

    this.pharmauser.Pharma = new Pharma();
    this.pharmauser.Pharma.Address = new Address();
    this.pharmauser.Name = new Name();
    this.pharmauser.Phone = new Phone();
    
    this.PersonalInfo = this.formBuilder.group({
      FirstName: ['',[Validators.required]],
      LastName: ['', [Validators.required]],
      MiddleName: ['', []],
      FamilyName: ['', []],
      DOB: ['', []]
    });

    this.ContactInfo = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      PersonalNumber: ['', [Validators.required]],
      HomeNumber: ['', []],
      OfficeNumber: ['', []]
    });

    this.AccessInfo = this.formBuilder.group({
      Role: ['', [Validators.required]]
    });

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

  Save(){    
    this.spinner.show();
    this.pharmauserservice.UpdatePharmaUser(this.pharmauser).subscribe((data) => {
      this.spinner.hide();
      this.router.navigateByUrl(`/pharma-user-detail/${this.userid}`);
    }, (error) => {
      this.OpenDialog(this.matdialog, error.message, 'Error');
      this.spinner.hide();
    });
  }

}
