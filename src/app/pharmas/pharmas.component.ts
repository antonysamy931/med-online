import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pharmas',
  templateUrl: './pharmas.component.html',
  styleUrls: ['./pharmas.component.css']
})
export class PharmasComponent extends Common implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;

  constructor(private pharma: PharmaService, 
    public router: Router,
    private spinner: NgxSpinnerService){
    super(router);
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Name', 'Description', 'Address', 'City', 'State', 'Country', 'Action'];

  ngOnInit() {
    super.ngOnInit();
    this.LoadPharmas();
  }

  LoadPharmas() {
    this.spinner.show();
    this.pharma.Pharmas().subscribe((data) => {      
      this.dataSource = new MatTableDataSource(data);
      
    }, (error) => {
      console.log(error);
    },() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
    });
  }

  View(row){
    this.router.navigateByUrl('/view-pharma/'+row);
  }

  Edit(row){
    this.router.navigateByUrl('/edit-pharma/'+row);
  }

  Delete(row){
    alert(row);
  }

  Create(){
    this.router.navigateByUrl('/create-pharma')
  }

}
