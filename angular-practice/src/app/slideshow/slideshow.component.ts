import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Observable } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input() images: string[] = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
  ];
  @Input() intervalTime: number = 1000;
  @Input() imageWidth: number = 600;
  @Input() imageHeight: number = 400;

  currentImage$!: Observable<string>;
  private isActive = true;

  ngOnInit(): void {
    this.currentImage$ = interval(this.intervalTime).pipe(
      startWith(0),
      map(index => this.images[index % this.images.length]),
      takeWhile(() => this.isActive)
    );
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }
}
