import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  selectedIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % 3; // 3 porque tienes 3 tabs
    }, 3000); // cada 3 segundos
  }
}
