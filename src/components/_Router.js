import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import ExpenseList from './expense/ExpenseList';
import ExpenseCategoryList from './expense-category/ExpenseCategoryList';
import EditExpenseCagegoryForm from './expense-category/EditForm';
import CreateExpenseCagegoryForm from './expense-category/CreateForm';
import CreateExpenseForm from "./expense/CreateForm";
import ExpenseReportSummary from "./expense-report/ExpenseReportSummary";

const Content = () => (
    <div className="container body-content">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/expenses/new" component={CreateExpenseForm} />
            <Route path="/expenses/reports/summary" component={ExpenseReportSummary} />
            <Route path="/expenses/categories/new" component={CreateExpenseCagegoryForm} />
            <Route path="/expenses/categories/edit/:id" component={EditExpenseCagegoryForm} />
            <Route path="/expenses/categories" component={ExpenseCategoryList} />
            <Route path="/expenses" component={ExpenseList} />
        </Switch>
    </div>
);

export default Content;
