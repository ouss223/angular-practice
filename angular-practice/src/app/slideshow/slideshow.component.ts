import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  images: string[] = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
  ];
  intervalTime: number = 1000;
  imageWidth: number = 400;
  imageHeight: number = 400;
  imageListInput: string = 'images/1.jpg,images/2.jpg,images/3.jpg,images/4.jpg';

  currentImage$!: Observable<string>;
  private destroy$ = new Subject<void>();
  private restart$ = new Subject<void>();

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startSlideshow(): void {
    this.currentImage$ = this.restart$.pipe(
      startWith(null),
      switchMap(() => interval(this.intervalTime).pipe(
        startWith(0),
        map(index => this.images[index % this.images.length])
      )),
      takeUntil(this.destroy$)
    );
  }

  updateInterval(): void {
    this.restart$.next();
  }

  updateImageList(): void {
    this.images = this.imageListInput.split(',').map(img => img.trim());
    this.restart$.next();
  }
}
