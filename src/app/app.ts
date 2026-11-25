import { Component, signal } from '@angular/core';
import { CarViewer } from './car-viewer/car-viewer';
import { PartsList } from './parts-list/parts-list';
@Component({
  imports: [ CarViewer, PartsList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('civic');
}
