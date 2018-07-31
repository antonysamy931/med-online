import { Component, OnInit, ViewChild } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatStepper, MatDialog } from '../../../node_modules/@angular/material';
import { UtilityService } from '../Service/Utility/utility.service';

@Component({
  selector: 'app-add-pharma',
  templateUrl: './add-pharma.component.html',
  styleUrls: ['./add-pharma.component.css']
})
export class AddPharmaComponent extends Common implements OnInit {

  pharma = {};

  pharmainfo: FormGroup;
  addressinfo: FormGroup;

  countiresobj: any;
  countries: any = [];
  cities: any = [];
 
  @ViewChild(MatStepper) stepper: MatStepper;

  constructor(public router: Router, 
    private pharmaService: PharmaService, 
    private spinner: NgxSpinnerService,
    private formbuilder: FormBuilder,
    private utilityService: UtilityService,
    private matDialog: MatDialog) {
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

    this.LoadCountries();
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

  LoadCountries(){
    this.spinner.show();
    this.utilityService.GetCountries().subscribe((data) => {
      this.countiresobj = data;
      data.forEach(element => {
        this.countries.push(element.country);
      });      
      this.spinner.hide();
    }, (error) => {
      this.OpenDialog(this.matDialog, error.message, 'Error');
    });
  }

  LoadCities(country){
    this.cities = this.countiresobj.find(x => x.country == country)
  }

}
