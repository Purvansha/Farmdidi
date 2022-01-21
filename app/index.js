import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigation/navigators/drawer';

const App = () => {
    return (
        <NavigationContainer>
            <DrawerNav></DrawerNav>
        </NavigationContainer>
    )
}
export default App;