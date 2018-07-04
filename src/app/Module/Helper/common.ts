import { OnInit } from "@angular/core";
import { AuthService } from "../../Service/auth/auth.service";
import { Router } from "@angular/router";

export abstract class Common implements OnInit {
    constructor(public router: Router){
    }
    private auth: AuthService = new AuthService();    

    ngOnInit(){
        if(!this.auth.IsLoggedIn()){
            this.router.navigateByUrl('/login');
        }
    }

}
