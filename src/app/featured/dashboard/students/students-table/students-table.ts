import { Component, ViewChild } from '@angular/core';
import { Student, studentsColums } from '../../../../core/services/students/model/Student';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsServices } from '../../../../core/services/students/students';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-students-table',
  standalone: false,
  templateUrl: './students-table.html',
  styleUrl: './students-table.css',
})
export class StudentsTable {
  displayedColumns :string[] = studentsColums;
  dataSource = new MatTableDataSource<Student>([]);

  constructor(private studentServices : StudentsServices){
    this.studentServices.students$.subscribe((students) => { this.dataSource.data = students });
  }

  ngOnInit(){
    this.studentServices.getStudents();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  onDeleteStudent(id:number){
    this.studentServices.deleteStudent(id);
  }

  @ViewChild(MatPaginator) paginator!:MatPaginator;

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}
