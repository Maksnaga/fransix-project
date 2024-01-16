import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('main') mainSection!: ElementRef;
  @ViewChild('service') serviceSection!: ElementRef;
  @ViewChild('who') whoSection!: ElementRef;

  public activeMenu = 'Accueil';
  public homePageMenu = [
    {
      name: 'Accueil',
      id: 'main',
    },
    {
      name: 'Mes services',
      id: 'service',
    },
    {
      name: 'Qui suis-je ?',
      id: 'who',
    },
  ];

  ngAfterViewInit(): void {
    this.mainSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  public handleMenuItemClick(name: string): void {
    this.activeMenu = name;
  }

  public onClick(elementId: string): void {
    switch (elementId) {
      case 'who':
        this.whoSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'service':
        this.serviceSection.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      default:
        this.mainSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}
