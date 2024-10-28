import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TStudent } from '../classes/t-student';
import { TStudentComponent } from './t-student.component';


describe('TStudent', () => {
  let tStudent: TStudent;

  beforeEach(() => {
      tStudent = new TStudent();
  });

  it('should return the correct t-distribution probability for x=1.1 and dof=9', () => {
      const result = tStudent.tDistribution(1.1, 9, 6, 0.0001);
      expect(result).toBeCloseTo(0.35006, 5);
  });
  it('should return the correct t-distribution probability for x=1.1812 and dof=10', () => {
      const result = tStudent.tDistribution(1.1812, 10, 6, 0.0001);
      expect(result).toBeCloseTo(0.36757, 5);
  });

  it('should return the correct t-distribution probability for x=2.750 and dof=30', () => {
      const result = tStudent.tDistribution(2.750, 30, 6, 0.0001);
      expect(result).toBeCloseTo(0.49500, 5);
  });
});