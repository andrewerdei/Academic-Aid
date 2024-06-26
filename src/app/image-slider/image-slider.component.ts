import { Component, Input } from '@angular/core';
import { SlideInterface } from './types/slide.interface';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  imports: [NgFor, NgIf, NgStyle],
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
  standalone: true,
  animations: [
    trigger('fadeSlideInOut', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(10px)' }),
            animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
        transition(':leave', [
            animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
        ]),
    ]),
  ]
})
export class ImageSliderComponent {
  subscription: Subscription | undefined;

  isChanging = false;

  ngOnInit(){
    const source = interval(5000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => this.goToNext());
  }


  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToNext(): void {
    this.isChanging = true;
    const isLastSlide = this.currentIndex === this.slides.length - 1
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.isChanging = false;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex : number): void{
    this.currentIndex = slideIndex;
  }
}
