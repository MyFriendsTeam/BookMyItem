import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../sevices/authentication.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  hide = true;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      public snackBar: MatSnackBar) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl ='dashboard'// this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.snackBar.open("message daf sdfg sd g asdg sadga gs f gh sdfgvs dgsd gs ahs fah gs df wAD A SDFGVASD G SDF G SFH H", "action", {
        duration: 2000,
      });
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  //this.alertService.error(error);
                  this.loading = false;
              });
        //this.router.navigate([this.returnUrl]);
  }

}
