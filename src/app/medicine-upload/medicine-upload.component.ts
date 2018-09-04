import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MedicineService } from '../Service/Medicine/medicine.service';

@Component({
  selector: 'app-medicine-upload',
  templateUrl: './medicine-upload.component.html',
  styleUrls: ['./medicine-upload.component.css']
})
export class MedicineUploadComponent extends Common implements OnInit {

  constructor(public router: Router, private spinner: NgxSpinnerService,
    private medicineService: MedicineService) {
    super(router);
  }

  Uploaded: boolean = false;
  FileChanged: boolean = false;
  MedicineRecords: any = [];

  ngOnInit() {
    super.ngOnInit();
  }

  HandleFile(evt){
    var files = evt.target.files; // FileList object
      var file = files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        var csv = reader.result; // Content of CSV file
        this.MedicineRecords = this.ExtractData(csv); //Here you can call the above function.
        this.FileChanged = true;
      }
  }

  Upload(){
    this.medicineService.UploadMedicine(this.MedicineRecords).subscribe((data) =>{
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  private ExtractData(csvData){    
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let MedicineRecords = [];

    for ( let i = 1; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');        
        if (data.length == headers.length) {
            //let tarr = [];
            var MedicineRecord = {
              Name: data[0],
              Quantity: data[1],
              Type: data[2],
              PackageUnit: data[3],
              PricePerUnit: data[4]
            };
            // for ( let j = 0; j < headers.length; j++) {
            //     tarr.push(data[j]);
            // }
            MedicineRecords.push(MedicineRecord);
        }
    }    
    return MedicineRecords;
  }
}
