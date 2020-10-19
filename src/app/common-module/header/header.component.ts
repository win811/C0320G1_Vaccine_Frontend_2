import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/home/login/login.component';
import { TokenStorageService } from 'src/app/share/services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JwtResponse } from 'src/app/share/models/dtos/jwt-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLogged: JwtResponse;
  isLogged: boolean;
  constructor(public dialog: MatDialog,
    private tokenStorage: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  //Created by: Quân
  ngOnInit() {
    if (this.tokenStorage.getJwtResponse() != null) {
      this.userLogged = this.tokenStorage.getJwtResponse();
      this.isLogged = (this.tokenStorage.getJwtResponse().accountName != null)
    } else {
      this.isLogged = false;
    }
    this.activatedRoute.queryParamMap.subscribe(value => {
      const returnUrl = value.get('returnUrl');
      if (returnUrl) {
        this.openDialog();
      }
    })
  }

  //Created by: Quân
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '560px',
      data: {},
      panelClass: 'custom-dialog'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.isLogged = result;
      console.log('The dialog was closed');
      this.activatedRoute.queryParamMap.subscribe(value => {
        const returnUrl = value.get('returnUrl');
        if (!returnUrl) {
          this.ngOnInit();
        }
      })

    });
  }

  //Created by: Quân
  logOut(): void {
    this.tokenStorage.logOut();
    this.isLogged = false;
    this.router.navigate(['/'])
  }

}
