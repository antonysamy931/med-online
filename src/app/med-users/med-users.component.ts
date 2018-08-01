import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '../../../node_modules/@angular/material';
import { Common } from '../Module/Helper/common';
import { MedUserService } from '../Service/MedUser/meduser.service';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';

@Component({
  selector: 'app-med-users',
  templateUrl: './med-users.component.html',
  styleUrls: ['./med-users.component.css']
})
export class MedUsersComponent extends Common implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'dob', 'role', 'email', 'action'];

  constructor(public router: Router, private route: ActivatedRoute,
    private spinner: NgxSpinnerService, private matdialog: MatDialog,
    private meduserservice: MedUserService) {
      super(router);
  }

  ngOnInit() {
    this.LoadUsers();
  }

  LoadUsers(){
    this.spinner.show(); 
    this.meduserservice.GetMedUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);         
      this.spinner.hide();
    }, (error) => {
      this.OpenDialog(this.matdialog, error.message, "Error");
      this.spinner.hide();
    }, () => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    });
  }

  View(Id){
    console.log(Id);
  }

  Edit(Id){
    console.log(Id);
  }

  Delete(row){
    const dialogRef = this.matdialog.open(ConfirmBoxComponent,
      {
          width: "400px",
          data: {title: "Delete Confirmation", 
          content: "Are you sure, You want to remove this user?"}
      });
      
      dialogRef.afterClosed().subscribe(result =>{      
        if(result == "Yes"){          
          this.spinner.show();
          console.log(row._id);
          this.meduserservice.DeletePharmaUser(row._id).subscribe((data) =>{
            this.spinner.hide();
            this.LoadUsers();
          }, (error) => {
            super.OpenDialog(this.matdialog, error.message, 'Error');
            this.spinner.hide();
          }, () => {
            this.spinner.hide();
          });
        }
      });
  }

  Create(){
    this.router.navigateByUrl('/create-med-users');
  }
}
