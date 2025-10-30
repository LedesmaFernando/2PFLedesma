import { Validators } from '@angular/forms';

export const formGroup = {
  id: [''],
  name: ['', [Validators.required, Validators.minLength(3)]],
  lastName: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.minLength(3),Validators.email]],
  
};