import React, { useState } from 'react';
import { Employee } from '../types/Employee';
import { createEmployee, updateEmployee } from '../services/api';
import '../styles.css';

interface EmployeeFormProps {
    employee?: Employee;
    onSubmitSuccess: () => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee, onSubmitSuccess }) => {
    const [formData, setFormData] = useState<Employee>({
        id: employee?.id || 0,
        firstName: employee?.firstName || '',
        lastName: employee?.lastName || '',
        email: employee?.email || '',
        cpf: employee?.cpf || '',
        phone: employee?.phone || '',
        managerName: employee?.managerName || '',
        password: employee?.password || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (employee) {
                await updateEmployee(formData.id ?? 0, formData); // Default value
            } else {
                await createEmployee(formData);
            }
            onSubmitSuccess();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required />
            <input type="text" name="phone" value={formData.phone ?? ''} onChange={handleChange} placeholder="Phone" />
            <input type="text" name="managerName" value={formData.managerName ?? ''} onChange={handleChange} placeholder="Manager Name" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">{employee ? 'Update' : 'Create'} Employee</button>
        </form>
    );
};

export default EmployeeForm;