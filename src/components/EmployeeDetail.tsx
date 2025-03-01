import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEmployeeById } from '../services/api';
import { Employee } from '../types/Employee';
import '../styles.css';

const EmployeeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getEmployee = async () => {
            try {
                const data = await fetchEmployeeById(Number(id));
                setEmployee(data);
            } catch (err) {
                setError('Failed to fetch employee details');
            } finally {
                setLoading(false);
            }
        };

        getEmployee();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!employee) {
        return <div>Employee not found</div>;
    }

    return (
        <div className="employee-detail">
            <h2>Employee Detail</h2>
            <input type="text" value={employee.firstName} readOnly />
            <input type="text" value={employee.lastName} readOnly />
            <input type="email" value={employee.email} readOnly />
            <input type="text" value={employee.cpf} readOnly />
            <input type="text" value={employee.phone ?? ''} readOnly />
            <input type="text" value={employee.managerName ?? ''} readOnly />
        </div>
    );
};

export default EmployeeDetail;