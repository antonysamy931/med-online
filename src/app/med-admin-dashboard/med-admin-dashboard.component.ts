import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { CustomerChartComponent } from '../charts/customer-chart/customer-chart.component';
import { PharmaService } from 'src/app/Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'med-admin-dashboard',
  templateUrl: './med-admin-dashboard.component.html',
  styleUrls: ['./med-admin-dashboard.component.css']
})
export class MedAdminDashboardComponent extends Common implements OnInit, AfterViewInit {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  PhramaCount: number = 0;

  @ViewChild('customerchart') customerchart: CustomerChartComponent;

  constructor(public router: Router,
    private parmaService: PharmaService,
    private spinner: NgxSpinnerService){
    super(router);
  }

  ngOnInit(){
    this.spinner.show();
    super.ngOnInit();    
    this.LoadPharmaCount();    
  }

  ngAfterViewInit(){
    this.spinner.hide();
  }

  ChartRefresh(){
    this.customerchart.chartRefresh();
  }

  LoadPharmaCount(){
    this.parmaService.Count().subscribe((data) => {
      this.PhramaCount = Number(data);
    }, (error) => {      
    });
  }

}
