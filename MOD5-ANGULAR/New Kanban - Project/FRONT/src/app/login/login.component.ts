import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: boolean = false;

  constructor(private service: CardService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  onSubmit(): void {
    this.login();
  }

  login(): void {
    this.service
      .getAuthorizationToken(
        this.loginForm.value.login,
        this.loginForm.value.senha
      )
      .subscribe((token) => {
        if (token) {
          this.service.setAuth(token);
          this.router.navigateByUrl('');
        } else {
          this.showError();
          this.loginForm.reset();
          this.service.clearAuth();
        }
      });
  }

  showError() {
    alert('login ou senha invalidos');
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    this.service.clearAuth();
  }
}
