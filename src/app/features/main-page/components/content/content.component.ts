import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor(private renderer: Renderer2, private elem: ElementRef) { }

  ngAfterViewInit() {

  }
}
