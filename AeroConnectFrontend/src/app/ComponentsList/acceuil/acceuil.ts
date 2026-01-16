import { Component, type OnInit, type OnDestroy, PLATFORM_ID, inject } from "@angular/core"
import { isPlatformBrowser } from "@angular/common"
import { RouterLink } from "@angular/router"

@Component({
  selector: "app-acceuil",
  imports: [RouterLink],
  templateUrl: "./acceuil.html",
  styleUrl: "./acceuil.css",
})
export class Acceuil implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID)
  private isBrowser = isPlatformBrowser(this.platformId)

  planeX = -50
  planeY = 100
  planeRotation = -45

  private velocityX = 2.5
  private velocityY = 0.8
  private animationFrame: number | null = null
  private directionChangeInterval: ReturnType<typeof setInterval> | null = null

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startPlaneAnimation()
    }
  }

  ngOnDestroy(): void {
    this.stopPlaneAnimation()
  }

  private startPlaneAnimation(): void {
    this.planeY = Math.random() * (window.innerHeight * 0.6) + 100
    this.planeX = -50

    this.directionChangeInterval = setInterval(() => {
      this.changeDirection()
    }, 4000)

    const animate = () => {
      this.updatePlanePosition()
      this.animationFrame = requestAnimationFrame(animate)
    }
    this.animationFrame = requestAnimationFrame(animate)
  }

  private updatePlanePosition(): void {
    this.planeX += this.velocityX
    this.planeY += this.velocityY

    if (this.planeY < 80 || this.planeY > window.innerHeight - 150) {
      this.velocityY *= -1
      this.updateRotation()
    }

    if (this.planeX > window.innerWidth + 50) {
      this.planeX = -50
      this.planeY = Math.random() * (window.innerHeight * 0.6) + 100
      this.velocityX = Math.abs(this.velocityX)
      this.changeDirection()
    } else if (this.planeX < -60) {
      this.planeX = window.innerWidth + 50
      this.planeY = Math.random() * (window.innerHeight * 0.6) + 100
      this.velocityX = -Math.abs(this.velocityX)
      this.changeDirection()
    }
  }

  private changeDirection(): void {
    this.velocityY = Math.random() * 1.5 - 0.75
    this.updateRotation()
  }

  private updateRotation(): void {
    const angle = Math.atan2(this.velocityY, this.velocityX) * (180 / Math.PI)
    this.planeRotation = angle - 45
  }

  private stopPlaneAnimation(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }
    if (this.directionChangeInterval) {
      clearInterval(this.directionChangeInterval)
    }
  }
}
