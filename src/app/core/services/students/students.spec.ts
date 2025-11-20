import { TestBed } from '@angular/core/testing';

import { StudentsServices } from './students';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('Students', () => {
  let service: StudentsServices;

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
    service = TestBed.inject(StudentsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
