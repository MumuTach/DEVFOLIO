import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  animatedText = '';

  private fullText = "I am a fullstack developer";
  private currentIndex = 0;

   
  ngOnInit() {
    this.typeText();
  }

  private typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.animatedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), 50); // Ajustez la vitesse de l'animation ici
    }
  }
}
