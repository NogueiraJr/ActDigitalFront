import axios from 'axios';
import { Employee } from '../types/Employee';

const API_BASE_URL = 'http://localhost:5043/api/Employee';

export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await axios.get<Employee[]>(API_BASE_URL);
    return response.data;
};

export const fetchEmployeeById = async (id: number): Promise<Employee> => {
    const response = await axios.get<Employee>(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const createEmployee = async (employee: Employee): Promise<Employee> => {
    const response = await axios.post<Employee>(API_BASE_URL, employee);
    return response.data;
};

export const updateEmployee = async (id: number, employee: Employee): Promise<Employee> => {
    const response = await axios.put<Employee>(`${API_BASE_URL}/${id}`, employee);
    return response.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
};