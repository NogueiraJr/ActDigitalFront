export interface Employee {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
    phone?: string | null;
    managerName?: string | null;
    password: string;
}