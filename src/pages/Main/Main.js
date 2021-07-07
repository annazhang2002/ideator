// import React from "react";
import React, { useState, useEffect } from "react";
import { auth } from '../../firebase'
import { Loader } from 'semantic-ui-react'
import LoginPage from '../LoginPage'
import InputPage from '../InputPage'
import ListViewPage from '../ListViewPage'
import { Route } from 'react-router-dom';

const Main = () => {
    const [loggedIn, toggleLogin] = useState(auth.currentUser != null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                toggleLogin(true)
            } else {
                toggleLogin(false)
            }
            setLoading(false)
        });
    }, []);

    const MainRoutes = () => {
        return (
            <>
                <Route path="/" exact component={ListViewPage} />
                <Route path="/input" exact component={InputPage} />
            </>
        )
    }

    return (
        <div>
            {/* <Route path="/input" exact component={InputPage} />
            <Route path="/" exact component={LoginPage} /> */}
            {loading ?
                <Loader active />
                : (loggedIn ?
                    <MainRoutes />
                    : <LoginPage />)
            }
        </div>
    )
}

export default Main;