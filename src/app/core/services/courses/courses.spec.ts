import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CoursesService } from './courses';


  describe('Courses Service', () => {
    let service: CoursesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers:[provideHttpClient(withFetch()),Router],
      });
      service = TestBed.inject(CoursesService);
    });
    it('should be created', () => {
    expect(service).toBeTruthy();
     });
    it('it should return a course when it receives a valid id',() => {
      service.getCourse(1).subscribe((course) => {
        expect(course).not.toBeNull();
      })
    });
  });
 