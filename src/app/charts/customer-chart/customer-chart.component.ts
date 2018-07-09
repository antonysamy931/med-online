import { Component, OnInit } from '@angular/core';
import { Common } from '../../Module/Helper/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.css']
})
export class CustomerChartComponent extends Common implements OnInit {

  constructor(public router: Router) {
    super(router);
   }

  ngOnInit() {
    super.ngOnInit();
  }

  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
