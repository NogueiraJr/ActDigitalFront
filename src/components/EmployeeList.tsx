import React, { useEffect, useState } from 'react';
import { Employee } from '../types/Employee';
import { fetchEmployees } from '../services/api';

const EmployeeList: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (err) {
                setError(`Failed to fetch employees: ${err}`);
            } finally {
                setLoading(false);
            }
        };

        getEmployees();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.firstName} {employee.lastName} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;