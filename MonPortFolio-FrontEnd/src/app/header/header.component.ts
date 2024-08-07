import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  isLargeScreen = true;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth > 768;
    if (this.isLargeScreen) {
      this.isMenuOpen = false; // Fermer le menu si la taille de l'écran est grande
    }
  }
  
  ngOnInit() {
    this.isLargeScreen = window.innerWidth > 768;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
