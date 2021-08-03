import React, { createContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator
        screenOptions={({ route }) => ({
            drawerIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused = 'reorder-four'
                        break;
                    case 'TelaB':
                        iconName = focused = 'ios-information-circle'
                        break;
                    case 'TelaC':
                        iconName = focused = 'list-circle'
                        break;
                    case 'TelaD':
                        iconName = focused = 'list-circle'
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        initialRouteName="TelaD">
        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="TelaC" component={TelaC} />
        <Drawer.Screen name="TelaD" component={TelaD} />
    </Drawer.Navigator>
)