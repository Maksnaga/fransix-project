import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { NumbersComponent } from './components/numbers/numbers.component';
import { ContentComponent } from './components/content/content.component';
import { CardsComponent } from './components/cards/cards.component';
import { BlueboxComponent } from './components/bluebox/bluebox.component';
import { FormComponent } from './components/form/form.component';
import { BeginComponent } from './components/begin/begin.component';
import { MainComponent } from './components/main/main.component';
import { HeadbandComponent } from './components/headband/headband.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    TagModule,
    NumbersComponent,
    ContentComponent,
    CardsComponent,
    BlueboxComponent,
    FormComponent,
    BeginComponent,
    MainComponent,
    HeadbandComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('main') mainSection!: ElementRef;
  @ViewChild('service') serviceSection!: ElementRef;
  @ViewChild('who') footerSection!: ElementRef;

  private isClicked = false;
  public activeMenu = 'Accueil';
  public homePageMenu = [
    {
      name: 'Accueil',
      id: 'main',
    },
    {
      name: 'Qui suis-je ?',
      id: 'who',
    },
    {
      name: 'Mes services',
      id: 'service',
    },
  ];
  mots: string[] = [
    'protections',
    'famille',
    'retraite',
    'épargne',
    'patrimoine',
    'protection',
  ];

  ngAfterViewInit(): void {
    this.mainSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.observeSection(this.mainSection);
    this.observeSection(this.serviceSection);
    this.observeSection(this.footerSection);
  }

  private observeSection(section: ElementRef): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (this.isClicked) {
          return;
        }

        const menuOption = this.homePageMenu.find(
          (option) => option.id === section.nativeElement.id
        );

        if (entry.isIntersecting) {
          this.activeMenu = menuOption?.name ?? '';
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
        this.footerSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
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
