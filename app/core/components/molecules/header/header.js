import React from "react";
import { Image, View } from 'react-native';
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/EvilIcons'
import Iicon from 'react-native-vector-icons/Ionicons'
import { globalStyles } from "../../../../styles";
import Dropdown from "../../atoms/dropdown/primary-dropdown";
import PrimaryDropdown from "../../atoms/dropdown/primary-dropdown";

const Header = ({ navigation }) => {
    // console.log('======>', Object.keys(navigation))
    return (
        <View style={{ padding: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff' }}>
                <Iicon name='menu' size={30} onPress={() => navigation.openDrawer()} style={{ paddingLeft: 10 }} />
                <Image source={require('../../../../assets/images/hero.png')} style={{ width: 100, height: 100, }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {/* <Icon name='user' size={30} onPress={() => navigation.openDrawer()} /> */}
                    <Icon name='cart' size={30} onPress={() => navigation.openDrawer()} />
                </View>
            </View>
            <View>
                <PrimaryDropdown />
            </View>
            <Divider style={{ padding: 20, backgroundColor: 'white' }} />
        </View >

    )
}
export default Header;