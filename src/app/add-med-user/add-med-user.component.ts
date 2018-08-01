import { Component, OnInit, ViewChild } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatDialog, MatStepper } from '../../../node_modules/@angular/material';
import { MedUserService } from '../Service/MedUser/meduser.service';
import MedUserRole from '../Module/Model/MedUserRoles';

@Component({
  selector: 'app-add-med-user',
  templateUrl: './add-med-user.component.html',
  styleUrls: ['./add-med-user.component.css']
})
export class AddMedUserComponent extends Common implements OnInit {

  constructor(public router: Router, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private spinner: NgxSpinnerService,
    private matdialog: MatDialog,
    private meduserservice: MedUserService) {
      super(router);
    }

  private User: any = {};

  private PersonalInfo: FormGroup;
  private ContactInfo: FormGroup;
  private AccessInfo: FormGroup;
  private AccountInfo: FormGroup;
  
  private role: any = MedUserRole;
  private hide: boolean = true;
  private confirmhide: boolean = true;

  @ViewChild(MatStepper) stepper: MatStepper;

  ngOnInit() {
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

    this.AccountInfo = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    });

    this.User.DOB = "";
  }

  Save(){
    this.spinner.show();
    this.meduserservice.Create(this.User).subscribe((data) => {
      this.router.navigateByUrl('/med-users');
      this.spinner.hide();
    }, (error) => {
      this.spinner.hide();
    })
  }

  Reset(){
    this.User = {};
    this.stepper.reset();
  }

}
