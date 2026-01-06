import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRouts from './stackrouts';
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'

import CustomDrawer from '../Components/CustomDrawer';


const Drawer = createDrawerNavigator()


export default function Routs() {
    return (

        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                headerShown: true, //mudar pra false

                drawerActiveBackgroundColor: '#00DAE4',
                drawerActiveTintColor: '#FFF',

                drawerInactiveBackgroundColor: '#F1F1F1',
                drawerInactiveTintColor: '#000',
            
            

    }}>
            <Drawer.Screen
                name="HomeStack"
                component={StackRouts}
            />

            <Drawer.Screen
                name="Sobre"
                component={Sobre}
            />

            <Drawer.Screen
                name="Contato"
                component={Contato}
            />
        </Drawer.Navigator>
    )
}