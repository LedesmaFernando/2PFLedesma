export interface Student{
    id:number;
    name:string;
    lastName: string;
    email:string;
}

export const studentsColums: string[] = [
    'id',
    'name',
    'lastName',
    'email',
    'actions',
]