import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '../../../node_modules/@angular/router';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-add-pharma',
  templateUrl: './add-pharma.component.html',
  styleUrls: ['./add-pharma.component.css']
})
export class AddPharmaComponent extends Common implements OnInit {

  pharma = {};

  constructor(public router: Router, 
    private pharmaService: PharmaService, 
    private spinner: NgxSpinnerService) {
    super(router);
  }

  name = new FormControl('name', [Validators.required]);
  description = new FormControl('description', [Validators.required]);
  address = new FormControl('address', [Validators.required]);
  city = new FormControl('city', [Validators.required]);
  state = new FormControl('state', [Validators.required]);
  country = new FormControl('country', [Validators.required]);
  zip = new FormControl('zip', [Validators.required]);

  ngOnInit() {
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
    this.name.reset();
    this.description.reset();
    this.address.reset();
    this.city.reset();
    this.state.reset();
    this.country.reset();
    this.zip.reset();
  }

}
