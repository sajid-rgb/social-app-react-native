import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Posts from '../Posts/Posts';
import Login from '../Login/Login'
import { AuthContext } from './Authentication';

export const Routes = () => {
    const { user, setUser } = useContext(AuthContext)
    const [initializer, setInitializer] = useState(true)

    const onAuthStateChanged = () => {
        setUser(user)
        if (initializer) setInitializer(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;

    })

    if (initializer) return null;


    return (
        <NavigationContainer>
            {
                user ? <Posts ></Posts> : <Login ></Login>
            }
        </NavigationContainer>

    )
}
