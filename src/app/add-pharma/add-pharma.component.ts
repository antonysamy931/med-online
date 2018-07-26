import { Component, OnInit, ViewChild } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatStepper } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-add-pharma',
  templateUrl: './add-pharma.component.html',
  styleUrls: ['./add-pharma.component.css']
})
export class AddPharmaComponent extends Common implements OnInit {

  pharma = {};

  pharmainfo: FormGroup;
  addressinfo: FormGroup;
 
  @ViewChild(MatStepper) stepper: MatStepper;

  constructor(public router: Router, 
    private pharmaService: PharmaService, 
    private spinner: NgxSpinnerService,
    private formbuilder: FormBuilder) {
    super(router);
  }

  ngOnInit() {
    this.pharmainfo = this.formbuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });

    this.addressinfo = this.formbuilder.group({
      address: ['',[Validators.required]],
      address1: [''],
      city: ['',[Validators.required]],
      state: ['',[Validators.required]],
      country: ['',[Validators.required]],
      zip: ['',[Validators.required]]
    });
    super.ngOnInit();
  }

  Save(){
    this.spinner.show();
    this.pharmaService.Insert(this.pharma).subscribe((data) => {
      this.spinner.hide();
      this.router.navigateByUrl('/pharmas');
    },(error) => {
      console.log(error);
    })
  }

  Reset(){    
    this.pharma = {};
    this.stepper.reset();
  }

}
