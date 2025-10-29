import { Component, ViewChild } from '@angular/core';
import { Course, courseColums } from '../../../../core/services/courses/model/Course';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CoursesService } from '../../../../core/services/courses/courses';

@Component({
  selector: 'app-courses-table',
  standalone: false,
  templateUrl: './courses-table.html',
  styleUrl: './courses-table.css',
})
export class CoursesTable {
  displayedColumns :string[] = courseColums;
  dataSource = new MatTableDataSource<Course>([]);

  constructor(private courseService : CoursesService){
    this.courseService.courses$.subscribe((courses) => { this.dataSource.data = courses });
  }

  ngOnInit(){
    this.courseService.getCourses();
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
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
