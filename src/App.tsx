import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeDetail from './components/EmployeeDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={EmployeeList} />
                <Route path="/employee/new" component={EmployeeForm} />
                <Route path="/employee/:id" component={EmployeeDetail} />
                <Route path="/employee/edit/:id" component={EmployeeForm} />
            </Switch>
        </Router>
    );
};

export default App;