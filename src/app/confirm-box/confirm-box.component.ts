import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<ConfirmBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    ngOnInit() {
    }
    
    Ok(): void {
      this.dialogref.close("Yes")
    }

    Close(): void {
      this.dialogref.close("No");
    }

}
