import { Injectable } from "../../../../node_modules/@angular/core";
import { CanActivate, Router } from "../../../../node_modules/@angular/router";
import { AuthService } from "../../Service/Auth/auth.service";

@Injectable()
export class OnlyLoggedInUser implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}    
    canActivate(){
        if(this.authService.IsLoggedIn()){
            return true;
        }else{            
            this.router.navigateByUrl('/login');
            return false;
        }        
    }
}