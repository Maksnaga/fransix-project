import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ButtonModule, RouterModule, TagModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('main') mainSection!: ElementRef;
  @ViewChild('service') serviceSection!: ElementRef;
  @ViewChild('who') whoSection!: ElementRef;
  private isClicked = false;
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
    this.observeSection(this.mainSection);
    this.observeSection(this.serviceSection);
    this.observeSection(this.whoSection);
  }

  private observeSection(section: ElementRef): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (this.isClicked) {
          // Ignorez l'intersection si le menu a été cliqué
          return;
        }

        const menuOption = this.homePageMenu.find(
          (option) => option.id === section.nativeElement.id
        );

        if (entry.isIntersecting) {
          this.activeMenu = menuOption?.name || '';
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(section.nativeElement);
  }

  public handleMenuItemClick(name: string): void {
    this.activeMenu = name;
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 1000);
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
