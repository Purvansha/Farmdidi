
import React from 'react'
import { View, Image } from 'react-native';
import { Divider, Drawer } from 'react-native-paper';
import { icon } from 'react-native-vector-icons/EvilIcons'

import MySearchbar from '../../../core/components/atoms/searchbar';
import { globalStyles } from '../../../styles'

export const DrawerContent = ({ navigation }) => {
    return (
        <View style={{ ...globalStyles.box }}>
            <Drawer.Section style={{ padding: 20 }}>
                <Image style={{ height: 150, width: 150, alignSelf: 'center' }} source={require('../../../assets/images/hero.png')} />
            </Drawer.Section>
            <Divider />
            <Drawer.Section style={{}} >
                <MySearchbar />
            </Drawer.Section>
            <Drawer.Item label='Home'
                onPress={() => navigation.navigate('Home')} />
            <Drawer.Item
                label="Shop"
                onPress={() => navigation.navigate('Shop')}
            />
            <Drawer.Item label='Blog'
                onPress={() => navigation.navigate('Blog')} />
            <Drawer.Item label='Didi In News'
                onPress={() => navigation.navigate('DidiInNews')} />
            <Drawer.Item label='Farm Didi Family'
                onPress={() => navigation.navigate('FarmDidiFamily')} />
            <Drawer.Item label='About Us'
                onPress={() => navigation.navigate('AboutUs')} />
            <Drawer.Item label='Contact Us'
                onPress={() => navigation.navigate('ContactUs')} />
            {/* <Drawer.Item label='Sign In' icon={'user'}
                onPress={() => navigation.navigate('SignIn')} /> */}
        </View >
    )
}

