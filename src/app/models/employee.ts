export interface Employee {
    id: number;
    employee_name: string;
    employee_salary: number;
    dob?: number | string | Date;
    bio?: string;
    employee_age: number;
    profile_image: string;
}
