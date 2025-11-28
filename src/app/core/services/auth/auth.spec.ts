import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth';
import { Router } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AuthService, provideHttpClient(withFetch()), Router],
    });
    service = TestBed.inject(AuthService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
     });
  it('it should return a boolean if it is logged in'), () => {
    expect(service.isAuthenticated()).toBe(false);
  }

  
});
