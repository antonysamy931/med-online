import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Common } from '../Module/Helper/common';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { PharmaUserService } from '../Service/PharmaUser/pharma-user.service';

@Component({
  selector: 'pharma-users',
  templateUrl: './pharma-users.component.html',
  styleUrls: ['./pharma-users.component.css']
})
export class PharmaUsersComponent extends Common implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  PharmaId: any;
  Pharma: any = {};

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'dob', 'role', 'email', 'action'];

  constructor(public router: Router, private route: ActivatedRoute,
    private pharmaservice: PharmaService, private spinner: NgxSpinnerService,
    private pharmauserservice: PharmaUserService){
    super(router);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.PharmaId = params['id'];
    });
    this.LoadPharmaUser();    
  }

  LoadPharmaUser(){
    this.spinner.show();
    this.pharmauserservice.GetPharmaUsers(this.PharmaId).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);         
    }, (error) => {
      console.log(error);
    }, () => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
    });
  }

  LoadPharma(){
    this.spinner.show();
    this.pharmaservice.GetById(this.PharmaId).subscribe((data) => {
      this.Pharma = data;
    }, (error) => {
      console.log(error);
    }, () => {
      this.spinner.hide();
    });
  }

  View(id: any){
    console.log(id);
  }

  Edit(id: any){
    console.log(id);
  }

  Delete(row: any){
    console.log(row);
  }

  Create(){
    this.router.navigateByUrl('/add-pharma-user/'+this.PharmaId);
  }
}
