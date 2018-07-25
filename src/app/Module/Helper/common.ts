import { OnInit } from "@angular/core";
import { AuthService } from "../../Service/Auth/auth.service";
import { Router } from "@angular/router";
import { MatDialog } from "../../../../node_modules/@angular/material";
import { AlertMessageComponent } from "../../alert-message/alert-message.component";

export abstract class Common implements OnInit {
    constructor(public router: Router){
    }
    private auth: AuthService = new AuthService();
    ngOnInit(){        
        if(!this.auth.IsLoggedIn() 
        && window.location.pathname.split('/').indexOf('reset-password') == -1
        && window.location.pathname.split('/').indexOf('forgot-password') == -1){
            this.router.navigateByUrl('/login');
        }
    }

    Logout(){
        localStorage.clear();
        this.router.navigateByUrl('/login');        
    }

    Redirect(url){
        console.log(url);
        setTimeout(() => {
            this.router.navigateByUrl(url);
        }, 1000);        
    }

    OpenDialog(matDialog: MatDialog, message: string, title: string): void{
        const dialogRef = matDialog.open(AlertMessageComponent,
        {
            width: "400px",
            data: {title: title, content: message}
        });
        
        dialogRef.afterClosed().subscribe(result =>{      
        });
    }

}
