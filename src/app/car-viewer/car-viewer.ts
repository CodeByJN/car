import { Component, ElementRef, afterNextRender, viewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-car-viewer',
  styleUrl: './car-viewer.css',
  templateUrl: './car-viewer.html',
})
export class CarViewer {
  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  constructor() {
    afterNextRender(() => {
      console.log(this.canvas().nativeElement);
    });
  } 
}
