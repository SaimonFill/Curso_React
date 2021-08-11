import React, { createContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './HomeScreen'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator
        screenOptions={({ route }) => ({
            drawerIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'HomeScreen':
                        iconName = focused = 'reorder-four'
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
)