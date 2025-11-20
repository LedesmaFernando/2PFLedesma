import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Students } from './students';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing-module';
import { SharedModule } from '../../../shared/shared-module';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('Students', () => {
  let component: Students;
  let fixture: ComponentFixture<Students>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Students],
      imports: [CommonModule, StudentsRoutingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {
                get: () => null,
              },
            },
          },
        },
        provideHttpClient(withFetch()),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Students);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
