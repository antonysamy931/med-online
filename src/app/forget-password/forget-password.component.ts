import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../Service/Captcha/captcha.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators } from '@angular/forms';
import { ForgotPasswordService } from '../Service/Forgot/forgot-password.service';
import { MatDialog } from '@angular/material';
import { ForgotMessageComponent } from '../forgot-message/forgot-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgotUser: any = {};
  Captcha: any;
  CaptchaSVG: any;

  constructor(private captchaService: CaptchaService,    
    private spinner: NgxSpinnerService, 
    private forgotService: ForgotPasswordService,
    private matDialog: MatDialog,
    private router: Router) { }

    captcha = new FormControl('captcha',[Validators.required]);
    email = new FormControl('email',[Validators.required, Validators.email]);
    
  ngOnInit() {
    this.LoadCaptcha();
  }
  
  LoadCaptcha(){
    this.captchaService.GetCaptcha().subscribe((data) => {      
      this.Captcha = data;
      this.CaptchaSVG = this.Captcha.data;
      this.captcha.reset();
    }, (error) => {
      console.log(error);
    }, () => {
      document.getElementById('captcha-element').innerHTML = this.CaptchaSVG;
    });
  }

  OpenDialog(message, loadLogin): void{
    const dialogRef = this.matDialog.open(ForgotMessageComponent,
                      {
                        width: "400px",
                        data: {title: "Forgot Password", content: message}
                      });
    dialogRef.afterClosed().subscribe(result =>{
      if(loadLogin){
        this.router.navigateByUrl('/login');
      }       
    });
  }

  Forgot(){
    if(this.Captcha.text == this.forgotUser.Captcha){
      this.spinner.show();
      this.forgotService.SendResetEmail(this.forgotUser.Email).subscribe((data) => {        
        this.spinner.hide();   
        this.OpenDialog("Email sent to your mail box. Please verify.", true)             
      }, (error) => {                
        this.LoadCaptcha();
        this.spinner.hide();
        this.OpenDialog(error.error, false);
      }, () => {
        this.spinner.hide();
      });
    }else{
      this.OpenDialog("Invalid Captcha. Try again.", false);
      this.forgotUser.Captcha = "";
      this.captcha.reset();
      this.LoadCaptcha();
    }   
  }

}
