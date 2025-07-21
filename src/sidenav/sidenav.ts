import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [ MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,RouterModule],
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css']
})
export class Sidenav {
  constructor(private router: Router) {}

    navigateTo(ruta: string): void {
    this.router.navigate([ruta]);
  }

}




