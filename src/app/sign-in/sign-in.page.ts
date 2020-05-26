import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  typeView: 'signIn' | 'signUp' = 'signIn';

  constructor(private router: Router, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    let credentials = form.value;
    this.authService.signIn(credentials.email, credentials.password)
      .then(result => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.toastService.presentToast(`Erro ao efetuar login: ${error}`, "danger");
      });
  }

  register(form: NgForm) {
    let credentials = form.value;
    this.authService.createUser(credentials.email, credentials.password)
      .then(result => {
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.toastService.presentToast(`Erro ao inserir usuário: ${error}`, "danger");
      });
  }

  onType(form: NgForm) {
    let values = form.value;

    if (values.password != values.confirm)
      form.controls['confirm'].setErrors({ 'different': true });
    else
      form.controls['confirm'].setErrors(null);

  }

}
