import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';

const AppStack = createStackNavigator();
const OngStack = createStackNavigator();
const UserStack = createStackNavigator();

function OngRoutes () {
    return (
        <NavigationContainer>
            <OngStack.Navigator  screenOptions={{ headerShown: false }}>
                <OngStack.Screen name="Logon" component={Logon} />
                <OngStack.Screen name="NewIncident" component={NewIncident} />
                <OngStack.Screen name="Profile" component={Profile} />
                <OngStack.Screen name="Register" component={Register} />
            </OngStack.Navigator>
        </NavigationContainer>
    )
}

function UserRoutes () {
    return (
        <NavigationContainer>
            <UserStack.Navigator screenOptions={{ headerShown: false }}>
                <UserStack.Screen name="Incidents" component={Incidents} />
                <UserStack.Screen name="Detail" component={Detail} />
            </UserStack.Navigator>
        </NavigationContainer>   
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="OngPages" component={OngRoutes} />
                <AppStack.Screen name="UserPages" component={UserRoutes} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}