import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent] // Cambiar de declarations a imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return stddev = 572.03 if input is [150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const input = [150, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    const stddev = component.calculateStdDev(input);
    expect(stddev.toFixed(2)).toBe('572.03');
  });

  it('should return stddev = 62.26 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const input = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    const stddev = component.calculateStdDev(input);
    expect(stddev.toFixed(2)).toBe('62.26');
  });
});
