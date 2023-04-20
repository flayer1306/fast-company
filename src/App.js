import React from 'react';
import Users from './app/layouts/users';
import { Navbar } from './app/components/navbar';
import { Route, Switch } from 'react-router-dom';
import { Main } from './app/layouts/main';
import { Login } from './app/layouts/login';

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/users/:userId?' component={Users}/>
            </Switch>

        </>
    );
};

export default App;
