import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetyaAndStringsComponent } from './petya-and-strings.component';

describe('PetyaAndStringsComponent', () => {
  let component: PetyaAndStringsComponent;
  let fixture: ComponentFixture<PetyaAndStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetyaAndStringsComponent], // Cambiar de declarations a imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetyaAndStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 for identical strings (case insensitive)', () => {
    const result = component.compareStrings('aaaa', 'aaaA');
    expect(result).toBe(0);
  });

  it('should return 1 when first string is greater than second string', () => {
    const result = component.compareStrings('abc', 'Abz');
    expect(result).toBe(1);
  });

  it('should return -1 when first string is less than second string', () => {
    const result = component.compareStrings('abc', 'abcd');
    expect(result).toBe(-1);
  });
});