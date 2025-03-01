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

## License

This project is licensed under the MIT License.