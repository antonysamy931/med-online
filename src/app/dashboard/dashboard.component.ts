import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends Common implements OnInit {
  PhramaCount: number = 0;
  constructor(public router: Router,
    private authService: AuthService,
    private parmaService: PharmaService,
    private spinner: NgxSpinnerService) {
    super(router);
   }

  ngOnInit() {
    this.spinner.show();
    super.ngOnInit();    
    this.LoadPharmaCount();
    this.spinner.hide();
  }

  LoadPharmaCount(){
    this.parmaService.Count().subscribe((data) => {
      this.PhramaCount = Number(data);
    }, (error) => {      
    });
  }

}
