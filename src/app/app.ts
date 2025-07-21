import { Component } from '@angular/core';
import { Sidenav } from '../sidenav/sidenav';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Sidenav, RouterOutlet,],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'farmacia-frontend';
}
