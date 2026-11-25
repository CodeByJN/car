import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarViewer } from './car-viewer';

describe('CarViewer', () => {
  let component: CarViewer;
  let fixture: ComponentFixture<CarViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(CarViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
