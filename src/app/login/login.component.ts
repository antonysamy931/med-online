import { Component, OnInit } from '@angular/core';
import { Common } from '../Module/Helper/common';
import { Router } from '@angular/router';
import { Login } from '../Module/Property/login';
import { FormControl, Validators} from '@angular/forms';
import { CaptchaService } from '../Service/Captcha/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Common implements OnInit {

  loginUser: Login = new Login();
  Captcha: any = null;
  public hide : boolean = true;

  constructor(public router: Router, private captchaService: CaptchaService) {
    super(router);
  }

  username = new FormControl('username',[Validators.required]);
  password = new FormControl('password',[Validators.required]);
  captcha = new FormControl('captcha',[Validators.required]);

  ngOnInit() {
    this.LoadCaptcha();
  }

  LoadCaptcha(){
    this.captchaService.GetCaptcha().subscribe((data) => {
      console.log(data);
      this.Captcha = data;
    }, (error) => {
      console.log(error);
    });
  }

}
