import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material';
import { AuthService } from '../Service/Auth/auth.service';
import { Router } from '@angular/router';
import { Common } from '../Module/Helper/common';

@Component({
  selector: 'med-online-navbar',
  templateUrl: './med-online-navbar.component.html',
  styleUrls: ['./med-online-navbar.component.css']
})
export class MedOnlineNavbarComponent extends Common implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, 
    private authService: AuthService, public router: Router) {
      super(router);
    }
    @ViewChild(MatMenuTrigger) usermenu: MatMenuTrigger;

    OpenUserMenu(){
      this.isHandset$.subscribe((result) =>{
        if(!result){
          this.usermenu.openMenu();
        }
      });
    }

    ngOnInit(){
      super.ngOnInit();
    }    

  }
