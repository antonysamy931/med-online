import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from '../Service/Forgot/forgot-password.service';
import { MatDialog } from '@angular/material';
import { AlertMessageComponent } from '../alert-message/alert-message.component';
import { CaptchaService } from '../Service/Captcha/captcha.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../Validator/compare-validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
  private Token: any;
  resetPassword: any = {};
  Captcha: any;
  CaptchaSVG: any;
  hide: boolean = true;
  hideCompare: boolean = true;

  constructor(private router: ActivatedRoute, 
    private forgotService: ForgotPasswordService, 
    private route: Router, 
    private matDialog: MatDialog,
    private captchaService: CaptchaService,    
    private spinner: NgxSpinnerService) { }

  password = new FormControl('password',[Validators.required]);
  comparepassword = new FormControl('comparepassword',[Validators.required]);
  captcha = new FormControl('captcha',[Validators.required]);

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.Token = params['data'];      
    });
    this.LoadCaptcha();
  }

  ngAfterViewInit(): void{
    if(this.Token === '' || this.Token === undefined){
      this.OpenDialog("Token not available. Try again.",true);
    }else{
      this.VerifyToken();
    }
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

  OpenDialog(message, redirect): void{
    const dialogRef = this.matDialog.open(AlertMessageComponent,
                      {
                        width: "400px",
                        data: {title: "Reset Password", content: message}
                      });
    dialogRef.afterClosed().subscribe(result =>{      
      if(redirect){
        this.route.navigateByUrl('/login');
      }
    });
  }

  VerifyToken(): void{
    this.forgotService.VerifyToken(this.Token).subscribe((data) =>{
      console.log(data);
    }, (error) => {
      this.OpenDialog("Invalid token. Try to reset again.", false);
    })
  }

  Reset(): void{

  }

}
