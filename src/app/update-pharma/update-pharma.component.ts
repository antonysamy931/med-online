import { Component, OnInit, ViewChild } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { MatDialog, MatStepper } from '../../../node_modules/@angular/material';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { Pharma, Address } from '../Module/Model/Pharma';
import { FormControl, Validators, FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-update-pharma',
  templateUrl: './update-pharma.component.html',
  styleUrls: ['./update-pharma.component.css']
})
export class UpdatePharmaComponent extends Common implements OnInit {
  private PharmaId: any;
  private pharma: Pharma = new Pharma();  
  
  pharmainfo: FormGroup;
  addressinfo: FormGroup;
  
  @ViewChild(MatStepper) stepper: MatStepper;

  constructor(public router: Router, private route: ActivatedRoute, 
    private pharmaservice: PharmaService,
    private matDialog: MatDialog, private spinner: NgxSpinnerService,
    private formbuilder: FormBuilder) { 
    super(router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.pharma.Address = new Address();    
    this.route.params.subscribe((param) => {
      this.PharmaId = param["id"];
    });

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
    this.LoadPharma();
    this.stepper.reset();
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
