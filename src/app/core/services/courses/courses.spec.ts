import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CoursesService } from './courses';

describe('Courses', () => {
  let service: CoursesService ;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    service = TestBed.inject(CoursesService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
