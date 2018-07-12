import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log(params['data']);
    })
  }

}
