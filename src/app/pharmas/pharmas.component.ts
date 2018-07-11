import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PharmasDataSource } from './pharmas-datasource';

@Component({
  selector: 'pharmas',
  templateUrl: './pharmas.component.html',
  styleUrls: ['./pharmas.component.css']
})
export class PharmasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PharmasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PharmasDataSource(this.paginator, this.sort);
  }
}
