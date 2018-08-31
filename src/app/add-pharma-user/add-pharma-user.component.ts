import { Component, OnInit, ViewChild } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { PharmaUserService } from '../Service/PharmaUser/pharma-user.service';
import { MatDialog, MatStepper } from '../../../node_modules/@angular/material';
import PharmaUserRole from '../Module/Model/PharmaUserRoles';

@Component({
  selector: 'app-add-pharma-user',
  templateUrl: './add-pharma-user.component.html',
  styleUrls: ['./add-pharma-user.component.css']
})
export class AddPharmaUserComponent extends Common implements OnInit {

  constructor(public router: Router, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private spinner: NgxSpinnerService, 
    private pharmaUserService: PharmaUserService,
    private matDialoge: MatDialog) {
    super(router);
  }

  private PharmaId: any;
  private PharmaUser: any = {};
  private PersonalInfo: FormGroup;
  private ContactInfo: FormGroup;
  private AccessInfo: FormGroup;
  private AccountInfo: FormGroup;

  private role: any = PharmaUserRole;
  private hide: boolean = true;
  private confirmhide: boolean = true;

  @ViewChild(MatStepper) stepper: MatStepper;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.PharmaId = param["id"];
    });

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
      HomeNumber: ['',[]],
      OfficeNumber: ['',[]]
    });

    this.AccessInfo = this.formBuilder.group({
      Role: ['', [Validators.required]]
    });

    this.AccountInfo = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });

    this.PharmaUser.DOB = "";
  }

  Save(){    
    this.spinner.show();
    this.PharmaUser.Pharma = this.PharmaId;
    this.pharmaUserService.Create(this.PharmaUser).subscribe((data) => {
      this.spinner.hide();
      this.router.navigateByUrl(`/view-pharma/${this.PharmaId}`);
    }, (error) => {
      this.OpenDialog(this.matDialoge,error, "error");
      this.spinner.hide();
    });
  }

  Reset(){
    this.PharmaUser = {};
    this.stepper.reset();
  }

}
