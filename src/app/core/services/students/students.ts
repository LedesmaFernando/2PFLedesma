import { Injectable } from '@angular/core';
import { Student } from './model/Student';
import { BehaviorSubject, of } from 'rxjs';
import { mockStudents } from './data/mock';

@Injectable({
  providedIn: 'root'
})
export class StudentsServices {
  private students: Student[] = mockStudents;
  private studentSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentSubject.asObservable();
  
    constructor(){
      this.studentSubject.next(this.students);
    }
  
    getStudents(){
      this.studentSubject.next(this.students);
    }
  
    getStudent(id:number){
      return of(this.students.find(course => course.id == id));
    }
  
    addStudent(student:Student){
      const newId = this.students[this.students.length - 1].id + 1;
      student.id = newId;
      this.students.push(student);
      this.studentSubject.next([...this.students]); 
    }
  
    updateStudent(student:Student) {
      const updatedStudents = this.students.map((c) => (c.id === student.id ? student : c));
      this.studentSubject.next(updatedStudents);
      this.students = updatedStudents;
    }
  
    deleteStudent(id: number) {
      const updatedStudents = this.students.filter((c) => c.id !== id);
      this.studentSubject.next(updatedStudents);
      this.students = updatedStudents;
    }
  
}
