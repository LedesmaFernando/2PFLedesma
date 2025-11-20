import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courses } from './courses';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared-module';
import { CoursesRoutingModule } from './courses-routing-module';

describe('Courses', () => {
  let component: Courses;
  let fixture: ComponentFixture<Courses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Courses],
      imports: [CommonModule, CoursesRoutingModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Courses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
