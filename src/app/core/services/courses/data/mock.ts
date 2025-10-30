import { Course, CourseStatus } from "../model/Course";


export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Angular',
    description:
      'In this course, you will learn how to build web applications with Angular. Angular stands out for its modular approach, which allows you to develop robust and scalable applications more easily and quickly.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.SCHEDULED,
  },
  {
    id: 2,
    title: 'React',
    description:
      'React is a JavaScript library for building user interfaces. In this course, you will learn about components, hooks, and how to manage your application state.',
    beginDate: new Date('2022-03-01'),
    endDate: new Date('2022-10-01'),
    status: CourseStatus.STARTED,
  },
  {
    id: 3,
    title: 'Vue.js',
    description:
      'Vue.js is a progressive framework for building user interfaces with a gentle learning curve and flexible architecture.',
    beginDate: new Date('2022-04-15'),
    endDate: new Date('2022-11-15'),
    status: CourseStatus.FINISHED,
  },
  {
    id: 4,
    title: 'Node.js',
    description:
      'Learn to develop server-side applications with Node.js. This course covers creating RESTful APIs, database handling, and deployment.',
    beginDate: new Date('2023-01-10'),
    endDate: new Date('2023-08-10'),
    status: CourseStatus.CANCELLED,
  },
  {
    id: 5,
    title: 'TypeScript',
    description:
      'TypeScript adds static typing to JavaScript and allows you to build safer and more maintainable applications. Learn its key concepts and best practices.',
    beginDate: new Date('2023-05-01'),
    endDate: new Date('2023-12-01'),
    status: CourseStatus.SCHEDULED,
  },
];
