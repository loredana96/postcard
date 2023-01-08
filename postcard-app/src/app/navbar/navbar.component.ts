import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public scrolled = false;
  constructor() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 115) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    })
  }
}
