import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-forgot-message',
  templateUrl: './forgot-message.component.html',
  styleUrls: ['./forgot-message.component.css']
})
export class ForgotMessageComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<ForgotMessageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  Close(): void {
    this.dialogref.close();
  }

}
