import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetyaAndStringsComponent } from './petya-and-strings.component';

describe('PetyaAndStringsComponent', () => {
  let component: PetyaAndStringsComponent;
  let fixture: ComponentFixture<PetyaAndStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetyaAndStringsComponent ]
    })
    .compileComponents();
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
    expect(component.compareStrings('aaaa', 'aaaA')).toBe(0);
  });

  it('should return -1 when first string is less than second string', () => {
    expect(component.compareStrings('abs', 'Abz')).toBe(-1);
  });

  it('should return 1 when first string is greater than second string', () => {
    expect(component.compareStrings('abcdefg', 'AbCdEfF')).toBe(1);
  });
});
