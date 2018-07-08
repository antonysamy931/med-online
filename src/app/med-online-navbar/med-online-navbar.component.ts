import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material';
import { AuthService } from '../Service/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'med-online-navbar',
  templateUrl: './med-online-navbar.component.html',
  styleUrls: ['./med-online-navbar.component.css']
})
export class MedOnlineNavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, 
    private authService: AuthService, private router: Router) {}
    @ViewChild(MatMenuTrigger) usermenu: MatMenuTrigger;

    OpenUserMenu(){
      this.usermenu.openMenu();
    }
    
    Logout(){
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }

  }
