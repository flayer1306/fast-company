import React from 'react';
import { Users, Login, Main } from './app/layouts';
import { Navbar } from './app/components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/users/:userId?' component={Users}/>
                <Redirect to='/'/>
            </Switch>

        </>
    );
};

export default App;
