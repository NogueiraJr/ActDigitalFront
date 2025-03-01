import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from '../services/api';
import { Employee } from '../types/Employee';

const EmployeeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const data = await fetchEmployeeById(Number(id));
                setEmployee(data);
            } catch (err) {
                setError('Failed to fetch employee details');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!employee) {
        return <div>No employee found</div>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>CPF:</strong> {employee.cpf}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Manager Name:</strong> {employee.managerName}</p>
        </div>
    );
};

export default EmployeeDetail;