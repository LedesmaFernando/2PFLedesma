import { Course, CourseStatus } from "../model/Course";


export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Angular',
    description:
      'En este curso aprenderás a construir aplicaciones web con Angular. Angular se destaca por su enfoque en la modularización, lo que permite desarrollar aplicaciones robustas y escalables de manera más fácil y rápida.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.SCHEDULED,
  },
  {
    id: 2,
    title: 'React',
    description:
      'React es una biblioteca de JavaScript para construir interfaces de usuario. En este curso aprenderás componentes, hooks y cómo gestionar el estado de tus aplicaciones.',
    beginDate: new Date('2022-03-01'),
    endDate: new Date('2022-10-01'),
    status: CourseStatus.STARTED,
  },
  {
    id: 3,
    title: 'Vue.js',
    description:
      'Vue.js es un framework progresivo para construir interfaces de usuario con una curva de aprendizaje suave y una arquitectura flexible.',
    beginDate: new Date('2022-04-15'),
    endDate: new Date('2022-11-15'),
    status: CourseStatus.FINISHED,
  },
  {
    id: 4,
    title: 'Node.js',
    description:
      'Aprende a desarrollar aplicaciones del lado del servidor con Node.js. Este curso incluye creación de APIs RESTful, manejo de bases de datos y despliegue.',
    beginDate: new Date('2023-01-10'),
    endDate: new Date('2023-08-10'),
    status: CourseStatus.CANCELLED,
  },
  {
    id: 5,
    title: 'TypeScript',
    description:
      'TypeScript agrega tipado estático a JavaScript y te permite desarrollar aplicaciones más seguras y mantenibles. Aprende sus conceptos clave y buenas prácticas.',
    beginDate: new Date('2023-05-01'),
    endDate: new Date('2023-12-01'),
    status: CourseStatus.SCHEDULED,
  },
];
