import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { Pharma, Address } from '../Module/Model/Pharma';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-update-pharma',
  templateUrl: './update-pharma.component.html',
  styleUrls: ['./update-pharma.component.css']
})
export class UpdatePharmaComponent extends Common implements OnInit {
  private PharmaId: any;
  private pharma: Pharma = new Pharma();  
  
  constructor(public router: Router, private route: ActivatedRoute, 
    private pharmaservice: PharmaService,
    private matDialog: MatDialog, private spinner: NgxSpinnerService) { 
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
    this.pharma.Address = new Address();
    this.route.params.subscribe((param) => {
      this.PharmaId = param["id"];
    });

    this.LoadPharma();
  }

  LoadPharma(){  
    this.spinner.show();  
    this.pharmaservice.GetById(this.PharmaId).subscribe((data) => {
      this.pharma = data;      
    }, (error) => {
      super.OpenDialog(this.matDialog, error, "Pharma Update");
    }, () => {
      this.spinner.hide();
    })
  }

  Reset(){
    this.name.reset();
    this.description.reset();
    this.address.reset();
    this.city.reset();
    this.state.reset();
    this.country.reset();
    this.zip.reset();
    this.LoadPharma();
  }

  Save(){
    this.spinner.show();
    this.pharmaservice.Update(this.pharma).subscribe((data) => {
      this.router.navigateByUrl(`/view-pharma/${this.PharmaId}`);
    }, (error) => {
      super.OpenDialog(this.matDialog, error, 'Pharma Update');
    }, () => {
      this.spinner.hide();
    })
  }

}
