import { ApolloProvider } from '@apollo/react-hooks';
import client from './src/services/api'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Screens from './src/screens';

// const stackBuilder = (navigationTag) => Screens.filter(screen => {
//     console.log(screen.child)
//     if (screen.navigation.includes(navigationTag)) {
//         return {
//             component: screen.component,
//             name: screen.name,
//             key: screen.name
//         }
//     }
// })

const stackBuilder = (navigationTag) => {
    const stacks = [];
    Screens.forEach(screen => {
        if (screen.navigation.includes(navigationTag)) {
            stacks.push({
                component: screen.component,
                name: screen.name,
                key: screen.name
            })
        }

        if (screen.child) {
            screen.child.forEach(childScreen => {
                if (childScreen.navigation.includes(navigationTag)) {
                    stacks.push({
                        component: childScreen.component,
                        name: childScreen.name,
                        key: childScreen.name
                    })
                }
            });
        }
    });
    return stacks;
}



const Stack = createStackNavigator();
const RootStackBuilder = stackBuilder('root');


const Tab = createBottomTabNavigator();
const TabBuilder = stackBuilder('tabs');

// function TabScreen() {
//     return (
//         <Tab.Navigator        >
//             {TabBuilder.map(screen => {
//                 return <Tab.Screen name={screen.name} component={screen.component} key={screen.name} />
//             })}
//         </Tab.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <ApolloProvider client={client}>
//             <NavigationContainer >
//                 <Stack.Navigator screenOptions={{ headerShown: false }}>
//                     <Stack.Screen name='Tabs' component={TabScreen} />
//                     {RootStackBuilder.map(screen => {
//                         return <Stack.Screen name={screen.name} component={screen.component} key={screen.name} />
//                     })}
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </ApolloProvider>
//     );
// }


function RootStackScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {RootStackBuilder.map(screen => {
                return <Stack.Screen name={screen.name} component={screen.component} key={screen.name} />
            })}
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer >
                <Tab.Navigator        >
                    <Tab.Screen name="Home" component={RootStackScreen} />
                    {TabBuilder.map(screen => {
                        if (screen.name !== 'HomeScreen') { //condition to handle doubled HomeScreen Tab
                            return <Tab.Screen name={screen.name} component={screen.component} key={screen.name} />
                        }
                    })}
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}

