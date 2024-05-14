import { AuthConfigService } from './../Service/auth-config.service';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoleType } from '../Model/Role';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  isClosed: boolean = true;

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

  roleType!:any;
  ngOnInit(){
   this.getRoleType()
   console.log(this.roleType)
  }
  getRoleType(){
    console.log(this.authConfigService.getType());
    return  this.roleType=this.authConfigService.getType();
   
    
  }
  constructor(private router: Router, private authConfigService:AuthConfigService) {}
  logout(): void {
   this.authConfigService.clear();
    this.router.navigate(['/login']);
}
}
