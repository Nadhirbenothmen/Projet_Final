import { User } from './../Model/User';
import { AuthConfigService } from './../Service/auth-config.service';
import { UserAuthService } from './../Service/user-auth.service';
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionPopupComponent } from '../inscription-popup/inscription-popup.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: any;
  password: any;
  constructor(
    private userAuthService: UserAuthService,
    private authConfigService: AuthConfigService,
    private r: Router,
    private injector: Injector
  ) {}

  // openPopup(): void {
  //   const dialog = this.injector.get(MatDialog);
  //   dialog.open(InscriptionPopupComponent, {
  //     width: '800px'
  //   });
  // }

  user!: User;

  ngOnInit() {
    // this.openPopup();
  }

  login(t7: NgForm) {
    if (t7 && t7.valid) {
      this.user = new User();
      this.user.email = t7.value.email;
      this.user.motDePasse = t7.value.password;
      this.userAuthService.login(this.user).subscribe(
        (data) => {
          console.log(data);
          console.log(data.user);
          this.authConfigService.setToken(data.token);
          this.authConfigService.setType(data.user.type);
          this.authConfigService.setEmail(data.user.email);

          // Redirect based on user type
          switch (data.user.type) {
            case 'Coach':
              this.r.navigate(['/homeCoach']);
              break;
            case 'StaffMedical':
              this.r.navigate(['/homeMedical']);
              break;
            case 'StaffPhysique':
              this.r.navigate(['/homeprepphysique']);
              break;
            default:
              this.r.navigate(['/homeDirecteur']);
              break;
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login failed: Check Email OR Password!',
          });

          console.error('Login failed:', error);
          // Handle login failure, e.g., display an error message to the user
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Form is invalid. Please check the fields.',
      });

      console.error('Form is invalid. Please check the fields.');
      // Handle invalid form submission, e.g., display an error message to the user
    }
  }
}
