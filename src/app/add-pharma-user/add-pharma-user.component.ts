import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-pharma-user',
  templateUrl: './add-pharma-user.component.html',
  styleUrls: ['./add-pharma-user.component.css']
})
export class AddPharmaUserComponent extends Common implements OnInit {

  constructor(public router: Router, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private spinner: NgxSpinnerService) {
    super(router);
  }

  private PharmaId: any;
  private PharmaUser: any = {};
  private PersonalInfo: FormGroup;
  private ContactInfo: FormGroup;
  private AccessInfo: FormGroup;
  private AccountInfo: FormGroup;

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
      Email: ['', [Validators.required]],
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
  }

}
