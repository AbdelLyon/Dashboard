import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }

  onSubmit(f: NgForm) {
    f.reset(f)
    this.router.navigate(['/dashboard'])
  }

  ngOnInit(): void {
  }

}
