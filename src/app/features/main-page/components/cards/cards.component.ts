import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @ViewChild('divCard') divCard!: ElementRef;
  constructor(private renderer: Renderer2) { }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (this.isOverflow()) {
      this.applyOverflowStyles()
    } else {
      this.removeOverflowStyles()
    }
  }

  ngAfterViewInit(): void {
    if (this.isOverflow()) {
      this.applyOverflowStyles()
    } else {
      this.removeOverflowStyles()
    }
  }

  public isOverflow(): boolean {
    const element = this.divCard.nativeElement;
    const isOverflowX = element.scrollWidth > window.innerWidth;
    const isOverflowY = element.scrollHeight > window.innerHeight;
    if (isOverflowX || isOverflowY) {
      return true;
    }
    return false;
  }

  public applyOverflowStyles(): void {
    this.renderer.setStyle(this.divCard.nativeElement, 'justify-content', 'unset');
  }

  public removeOverflowStyles(): void {
    this.renderer.setStyle(this.divCard.nativeElement, 'justify-content', 'center');
  }
}
