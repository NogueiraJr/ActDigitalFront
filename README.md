# React API Consumer

This project is a React application that consumes an API for managing employee data. It provides functionalities to create, read, update, and delete employee information.

## Project Structure

```
react-api-consumer
├── public
│   ├── index.html        # Main HTML file for the application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── components        # Contains React components
│   │   ├── EmployeeList.tsx    # Component to list employees
│   │   ├── EmployeeForm.tsx     # Component for creating/updating employees
│   │   └── EmployeeDetail.tsx   # Component to display employee details
│   ├── services          # Contains API service functions
│   │   └── api.ts       # API calls for employee endpoints
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Entry point for the React application
│   └── types            # TypeScript types
│       └── Employee.ts  # Type definition for Employee
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-api-consumer
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the **Employee List** component to view all employees.
- Use the **Employee Form** component to add or update employee information.
- Click on an employee's name to view detailed information in the **Employee Detail** component.

## API Endpoints

The application interacts with the following API endpoints:

- `POST /api/Employee` - Create a new employee
- `GET /api/Employee` - Retrieve a list of employees
- `GET /api/Employee/{id}` - Retrieve details of a specific employee
- `PUT /api/Employee/{id}` - Update an existing employee
- `DELETE /api/Employee/{id}` - Delete an employee

## License MIT


![image](https://github.com/user-attachments/assets/3a6f82a5-201e-484a-8211-2b29b852133d)

![image](https://github.com/user-attachments/assets/d1911d16-593e-4b7c-8192-9d19d5c6117d)

![image](https://github.com/user-attachments/assets/2834e8b5-707c-48dc-95d4-14af66f2676c)

![image](https://github.com/user-attachments/assets/a754c6b7-6cc4-4687-ad6b-44b237a564f9)

![image](https://github.com/user-attachments/assets/66397ab9-cca9-4e49-bed1-2783f7b005be)






This project is licensed under the MIT License.
