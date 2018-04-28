import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../sevices/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  ngOnInit() {
  }
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.snackBar.open("Registration success", "action", {
            duration: 2000,
          });
          this.router.navigate(['auth']);
        },
        error => {
          this.snackBar.open("Registration fail", "action", {
            duration: 2000,
          });
          this.loading = false;
        });
  }

}
