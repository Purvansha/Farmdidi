import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Entypo';
import FeatIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Home from "../../screens/home";
import Shop from "../../screens/shop";
import ContactUs from "../../screens/contactUs";
import AboutUs from "../../screens/aboutUs"

const Tab = createBottomTabNavigator()
const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ header: () => null }}>
            <Tab.Screen name='Home' options={{ tabBarIcon: () => <Icon name="home" size={25} color='#000' />, header: () => null }} component={Home} />
            <Tab.Screen name='Shop' options={{ tabBarIcon: () => <Icon name="shop" size={25} color='#000' /> }} component={Shop} />
            <Tab.Screen name='Cart' options={{ tabBarIcon: () => <Icon name="shopping-cart" size={25} color='#000' /> }} component={Shop} />
            <Tab.Screen name='ContactUs' options={{ title: 'ContactUs', tabBarIcon: () => <FeatIcon name="phone-call" size={25} color='#000' /> }} component={ContactUs} />
            <Tab.Screen name='More' options={{ title: 'AboutUs', tabBarIcon: () => <IonIcon name="ellipsis-horizontal-outline" size={25} color='#000' /> }} component={AboutUs} />
        </Tab.Navigator>
    )
}
export default MyTabs;