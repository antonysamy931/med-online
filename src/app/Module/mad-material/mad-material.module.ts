import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatCardModule,  
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,    
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  declarations: []
})
export class MadMaterialModule { }