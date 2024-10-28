import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerejaAndDimaComponent } from './sereja-and-dima.component';

describe('SerejaAndDimaComponent', () => {
  let component: SerejaAndDimaComponent;
  let fixture: ComponentFixture<SerejaAndDimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerejaAndDimaComponent], // Use imports instead of declarations
    }).compileComponents();

    fixture = TestBed.createComponent(SerejaAndDimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate points for first test case', () => {
    const result = component.calculatePoints([4, 1, 2, 10]);
    expect(result.serena).toBe(12);
    expect(result.dima).toBe(5);
  });

  it('should calculate points for second test case', () => {
    const result = component.calculatePoints([1, 2, 3, 4, 5, 6, 7]);
    expect(result.serena).toBe(16);
    expect(result.dima).toBe(12);
  });
});
