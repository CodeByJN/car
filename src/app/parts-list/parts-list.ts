import { Component, signal } from '@angular/core';
import {Part} from '../models/parts';

@Component({
  imports: [],
  selector: 'app-parts-list',
  styleUrl: './parts-list.css',
  templateUrl: './parts-list.html',
})

//Populating the list of parts
export class PartsList {
  parts = signal<Part[]>([
    {
    id: 1,
    name: 'tire',
    category: 'tires',
    brand: 'michelin',
    price: 2000,
    inStock: true,
    location: ['leftRearTire','rightRearTire','leftFrontTire','rightFrontTire'],
    compatibleCars: ['05 Honda Civic'],
    },
    {
    id: 2,
    name: 'brake pads',
    category: 'breaks',
    brand: 'jordan brands',
    price: 2000,
    inStock: true,
    location: ['leftRearTire','rightRearTire','leftFrontTire','rightFrontTire'],
    compatibleCars: ['05 Honda Civic'],
    },
    {
    id: 3,
    name: 'head light',
    category: 'lights',
    brand: 'jordan brands',
    price: 2000,
    inStock: true,
    location: ['frontLeftLight','frontRightLight'],
    compatibleCars: ['05 Honda Civic'],
    }
   ]);
}
