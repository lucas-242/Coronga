import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  typeView: 'signIn' | 'signUp' = 'signIn';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    let credentials = form.value;
    this.authService.signIn(credentials.email, credentials.password)
      .then(result => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        // Swal.fire(
        //   'Erro',
        //   'Erro ao efetuar login, tente novamente ou contate o suporte',
        //   'error'
        // );
        alert(error);
      });
  }

  register(form: any) {
    console.log()
  }

}
