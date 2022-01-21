import React from "react";
import { Searchbar } from "react-native-paper";
import { yellow100 } from "react-native-paper/lib/typescript/styles/colors";

const MySearchbar = () => {

    return (
        <Searchbar placeholder="Search here..." placeholderTextColor={'#000'} iconColor="#000" style={{ borderRadius: 10, borderWidth: 0.5 }} />
    );
};

export default MySearchbar;