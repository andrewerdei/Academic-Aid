import { Component, Input } from '@angular/core';
import { SlideInterface } from './types/slide.interface';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  state(
    'out',
    style({
      opacity: 1,
    })
  ),
  transition('void => *', [style({ opacity: 0 }), animate('1s ease-in')]),
  transition('* => void', [animate('1s ease-in'), style({ opacity: 0 })]),
]);


@Component({
  imports: [NgFor, NgIf, NgStyle],
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
  standalone: true,
  animations: [fadeInOut]
})
export class ImageSliderComponent {
  timeoutId: any;

  isChanging = false;

  ngOnInit(){
    this.resetTimer();
  }

  resetTimer() {
    if (!!this.timeoutId) {             // <-- Update: clear the timeout
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => this.goToNext(), 5000);
  }

  fadeInOut(): void {
    this.isChanging = !this.isChanging;
  }

  onAnimationDone(event: any) {
    this.isChanging = false;
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
    this.resetTimer();
  }

  goToPrevious(): void {
    this.isChanging = true;
    const isFirstSlide = this.currentIndex === 0
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  goToSlide(slideIndex : number): void{
    this.isChanging = true;
    this.currentIndex = slideIndex;
    this.resetTimer();
  }
}
