import React, { createContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
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
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        // tabBarOptions={{
        //     showLabel: true
        //     // labelStyle: { fontSize: 10 }

        // }} 
        initialRouteName="TelaB" >
        <Tab.Screen name="TelaA" component={TelaA}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="TelaB" component={TelaB}
            options={{ title: 'Conexão' }} />
        <Tab.Screen name="TelaC" component={TelaC}
            options={{ title: 'Dados' }} />
    </Tab.Navigator >
)