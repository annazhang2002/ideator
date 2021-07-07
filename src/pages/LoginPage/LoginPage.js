import React from "react";
import { provider, auth } from '../../firebase'
import { Container, Button, Header } from 'semantic-ui-react'
import { initScript } from "../../util/initScript";

export const LoginPage = () => {

    const googleSignIn = () => {
        auth.signInWithPopup(provider).then((response) => {
            console.log(response)
            initScript();
        }).catch((error) => {
            console.log(error)
        });

    }

    return (
        <Container textAlign="center">
            <Header as='h1'>Welcome to Ideator</Header>
            <Header as='h3'>Helping build meaningful relationships with insightful questions</Header>
            <Button color='google plus' onClick={googleSignIn}>Sign in with Google</Button>
        </Container>
    )
}
