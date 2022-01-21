import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyTabs from '../main-tab-navigator';
import { DrawerContent } from './drawer-content'
import Blog from '../../../screens/blog';
import DidiInNews from '../../../screens/didiinnews';
import FarmDidiFamily from '../../../screens/farmdidifamily';
import AboutUs from '../../../screens/aboutUs';
import ContactUs from '../../../screens/contactUs';
import SignIn from '../../../screens/signIn';
import Header from '../../../core/components/molecules/header/header';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { width: 300 },
                header: ({ navigation }) => <Header navigation={navigation} />,
                drawerPosition: 'left'
            }}
            drawerContent={({ navigation }) => <DrawerContent navigation={navigation} />

            } >
            <Drawer.Screen name='Drawer' component={MyTabs} />
            <Drawer.Screen name='Blog' component={Blog} />
            <Drawer.Screen name='DidiInNews' component={DidiInNews} />
            <Drawer.Screen name='FarmDidiFamily' component={FarmDidiFamily} />
            <Drawer.Screen name='AboutUs' component={AboutUs} />
            <Drawer.Screen name='ContactUs' component={ContactUs} />
            <Drawer.Screen name='SignIn' component={SignIn} />
        </Drawer.Navigator>
    )
}

export default DrawerNav;
