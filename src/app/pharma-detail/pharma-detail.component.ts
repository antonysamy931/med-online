import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatDialog } from '../../../node_modules/@angular/material';
import { Pharma, Address } from '../Module/Model/Pharma';

@Component({
  selector: 'app-pharma-detail',
  templateUrl: './pharma-detail.component.html',
  styleUrls: ['./pharma-detail.component.css']
})
export class PharmaDetailComponent extends Common implements OnInit {
  private PharmaId: any;
  private Pharma: Pharma = new Pharma();  

  constructor(public router: Router, private route: ActivatedRoute, 
    private pharmaservice: PharmaService, private spinner: NgxSpinnerService, 
    private matDialog: MatDialog) { 
    super(router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.Pharma.Address = new Address();
    this.route.params.subscribe((param) => {
      this.PharmaId = param["id"];
    });

    this.LoadPharma();
  }

  LoadPharma(){  
    this.spinner.show();  
    this.pharmaservice.GetById(this.PharmaId).subscribe((data) => {
      this.Pharma = data;      
    }, (error) => {
      super.OpenDialog(this.matDialog, error, "Pharma Detail");
    }, () => {
      this.spinner.hide();
    })
  }

}
