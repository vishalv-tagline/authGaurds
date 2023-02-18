import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServicesService } from '../../services/auth-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public frmLogin!: FormGroup
  isSubmited: boolean = false;

  constructor(private fb: FormBuilder, private authServicesService: AuthServicesService, private router: Router, private toastrService: ToastrService) {

  }
  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.frmLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]]
    })
  }
  get frmControl() {
    return this.frmLogin.controls
  }

  onLogin(): void {
    if (this.frmLogin.invalid) {
      this.toastrService.error('Please fill all details', 'Error', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
      this.isSubmited = true;
      return;
    }
    else {
      this.authServicesService.checkLogin(this.frmLogin.value).subscribe((data: any) => {
        if (!data) {
          this.toastrService.error('User doesn\'t exites', 'Error', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
          this.frmLogin.reset();
        }
        else if (data) {
          localStorage.setItem('email', data.email);
          localStorage.setItem('password', data.password);
          localStorage.setItem('role', data.role);
          this.toastrService.success('Login successfully', 'Success', { closeButton: true, progressBar: true, progressAnimation: 'decreasing' });
          this.router.navigate(['/home'])
        }
      })
    }
  }




}
