import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { TokenStorageService } from 'src/app/share/services/token-storage.service';
import { AuthLoginInfo } from 'src/app/share/models/dtos/login-info';
import { AuthJwtService } from 'src/app/share/services/auth-jwt.service';

declare let $: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  userInfo: AuthLoginInfo;
  message = '';
  isRemember: boolean;
  isLogged: boolean;

  constructor(
    private authJwtService: AuthJwtService,
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<LoginComponent>) {
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, validateWhitespace]],
      password: ['', [Validators.required]],
    });

    $(".toggle-password").click(function () {

      $(this).toggleClass("fa-eye fa-eye-slash");
      let input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    $(document).ready(function () {
      $("#test").hide();
      $("#div-password").hover(function () {
        $("#test").show()
      },
        function () {
          $("#test").hide()
        }
      )
    });

  }

  onSubmit() {
    this.submitted = true;
    this.userInfo = new AuthLoginInfo(this.femail.value, this.fpassword.value);
    this.login(this.userInfo);
  }

  get femail() {
    return this.loginForm.get('username');
  }

  get fpassword() {
    return this.loginForm.get('password');
  }

  remember($event) {
    this.isRemember = $event.target.checked;
  }

  public login(userInfo) {
    this.authJwtService.attemptAuth(userInfo).subscribe(
      data => {
        this.tokenStorage.saveJwtResponse(data, this.isRemember);
      },
      error => {
        console.log('Error ', error);
        this.message = 'Tài Khoản này không đúng hoặc đã bị khóa';
      }, () => {
        this.activatedRoute.queryParamMap.subscribe(value => {
          const returnUrl = value.get('returnUrl');
          if (returnUrl) {
            this.router.navigateByUrl(returnUrl);
          } else {
            this.isLogged = true;
            this.dialogRef.close(this.isLogged)
          }
        });
      }
    );
  }

  logOut(): void {
    this.tokenStorage.logOut();
    this.isLogged = false;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}

function validateWhitespace(c: AbstractControl) {
  if (c.value !== '') {
    const isWhitespace = c.value.trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  return null;
}
