import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a-propos',
  imports: [CommonModule],
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.css',
})
export class APropos implements OnInit, OnDestroy {
  // <CHANGE> État de l'avion automatique
  planeX: number = -50;
  planeY: number = 100;
  planeRotation: number = -45;
  
  private velocityX: number = 2;
  private velocityY: number = 1;
  private animationFrame: any;
  private directionChangeInterval: any;

  ngOnInit(): void {
    this.startPlaneAnimation();
  }

  ngOnDestroy(): void {
    this.stopPlaneAnimation();
  }

  private startPlaneAnimation(): void {
    // Position initiale aléatoire
    this.planeY = Math.random() * (window.innerHeight - 200) + 100;
    this.planeX = -50;
    
    // Changer de direction périodiquement
    this.directionChangeInterval = setInterval(() => {
      this.changeDirection();
    }, 3000);

    // Boucle d'animation
    const animate = () => {
      this.updatePlanePosition();
      this.animationFrame = requestAnimationFrame(animate);
    };
    this.animationFrame = requestAnimationFrame(animate);
  }

  private updatePlanePosition(): void {
    this.planeX += this.velocityX;
    this.planeY += this.velocityY;

    // Rebondir sur les bords verticaux
    if (this.planeY < 50 || this.planeY > window.innerHeight - 100) {
      this.velocityY *= -1;
      this.updateRotation();
    }

    // Réapparaître de l'autre côté horizontalement
    if (this.planeX > window.innerWidth + 50) {
      this.planeX = -50;
      this.planeY = Math.random() * (window.innerHeight - 200) + 100;
      this.changeDirection();
    } else if (this.planeX < -60) {
      this.planeX = window.innerWidth + 50;
      this.planeY = Math.random() * (window.innerHeight - 200) + 100;
      this.changeDirection();
    }
  }

  private changeDirection(): void {
    // Variation aléatoire de la direction
    this.velocityX = (Math.random() * 2 + 1.5) * (this.velocityX > 0 ? 1 : -1);
    this.velocityY = (Math.random() * 2 - 1) * 1.5;
    this.updateRotation();
  }

  private updateRotation(): void {
    // Calculer l'angle basé sur la direction
    const angle = Math.atan2(this.velocityY, this.velocityX) * (180 / Math.PI);
    this.planeRotation = angle - 45;
  }

  private stopPlaneAnimation(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.directionChangeInterval) {
      clearInterval(this.directionChangeInterval);
    }
  }
}