import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { PharmaService } from '../Service/Pharma/pharma.service';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

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
    private spinner: NgxSpinnerService, private matDialog: MatDialog){
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
    const dialogRef = this.matDialog.open(ConfirmBoxComponent,
    {
        width: "400px",
        data: {title: "Delete Confirmation", 
        content: "Are you sure, You want to remove this Pharmacy?"}
    });
    
    dialogRef.afterClosed().subscribe(result =>{      
      if(result == "Yes"){
        var data = {PharmaId : row._id, AddressId: row.Address._id};
        this.spinner.show();
        this.pharma.Delete(data).subscribe((data) =>{
          this.spinner.hide();
          this.LoadPharmas();
        }, (error) => {
          super.OpenDialog(this.matDialog, error, 'Pharmas');
          this.spinner.hide();
        }, () => {
          this.spinner.hide();
        });
      }
    });
  }

  Create(){    
    this.router.navigateByUrl('/create-pharma')
  }

}
