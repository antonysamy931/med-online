import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { CaptchaService } from '../Service/Captcha/captcha.service';
import { LoginService } from '../Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Common implements OnInit, AfterViewInit {

  loginUser: any = {};
  Captcha: any;
  CaptchaSVG: any;
  public hide : boolean = true;
  public invalidcaptcha: boolean = false;

  constructor(public router: Router, 
    private captchaService: CaptchaService,
    private loginService: LoginService,
    private spinner: NgxSpinnerService) {
    super(router);
  }

  username = new FormControl('username',[Validators.required]);
  password = new FormControl('password',[Validators.required]);
  captcha = new FormControl('captcha',[Validators.required]);

  ngOnInit() {    
    this.LoadCaptcha();
  }

  ngAfterViewInit(){    
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

  Login(){
    if(this.Captcha.text == this.loginUser.Captcha){
      this.spinner.show();
      this.loginService.AuthenticateUser(this.loginUser).subscribe((data) => {        
        this.spinner.hide();
        localStorage.setItem("LoggedInUserData",JSON.stringify(data));
        window.location.replace("/");
      }, (error) => {
        console.log(error);
        alert(error.error);
        this.LoadCaptcha();
        this.spinner.hide();
      }, () => {
        this.spinner.hide();
      });
    }else{
      alert("Invalid Captcha. Try again.");
      this.loginUser.Captcha = "";
      this.captcha.reset();
      this.LoadCaptcha();
    }   
  }

}
