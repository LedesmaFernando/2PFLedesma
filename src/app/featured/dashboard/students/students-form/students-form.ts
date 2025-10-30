import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsServices } from '../../../../core/services/students/students';
import { formGroup } from './validators';

@Component({
  selector: 'app-students-form',
  standalone: false,
  templateUrl: './students-form.html',
  styleUrl: './students-form.css',
})
export class StudentsForm {
  createForm: FormGroup;
  studentId: number | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentsServices,
    private router: Router
  ) {
    this.createForm = this.fb.group(formGroup);

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.studentId = Number(params['id']);
        this.isEditing = true;
        this.studentService.getStudent(this.studentId).subscribe((student) => {
          if (student) {
            this.createForm.patchValue(student);
          }
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.studentService.updateStudent(this.createForm.value);
    } else {
      this.studentService.addStudent(this.createForm.value);
    }
    this.createForm.reset();

    this.router.navigate(['dashboard', 'student']);
  }

  inputValid(inputName: 'name' | 'lastName' | 'email') {
    return this.createForm.get(inputName)?.valid && this.createForm.get(inputName)?.touched;
  }

  inputInvalid(inputName: 'name' | 'lastName' | 'email') {
    return (
      this.createForm.get(inputName)?.invalid &&
      this.createForm.get(inputName)?.touched &&
      this.createForm.get(inputName)?.dirty
    );
  }

  getError(inputName: 'name' | 'lastName' | 'email') {
    if (!this.createForm.get(inputName)?.errors) {
      return null;
    }

    const errors = Object.keys(this.createForm.get(inputName)?.errors as string[]);

    if (errors.length === 0) {
      return null;
    }

    let message = '';

    errors.forEach((error) => {
      switch (error) {
        case 'required':
          message += 'Este campo es requerido';
          break;
        case 'minlength':
          message += 'Este campo debe tener al menos 3 caracteres';
          break;
        default:
          break;
      }
    });

    return message;
  }
}
