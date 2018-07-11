import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PharmaUsersDataSource } from './pharma-users-datasource';

@Component({
  selector: 'pharma-users',
  templateUrl: './pharma-users.component.html',
  styleUrls: ['./pharma-users.component.css']
})
export class PharmaUsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PharmaUsersDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PharmaUsersDataSource(this.paginator, this.sort);
  }
}
