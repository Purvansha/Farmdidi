import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const PrimaryDropdown = () => {
    return (
        <View>
            <Text style={styles.Text}> helloooo Boss</Text>
        </View>
    )

}
export default PrimaryDropdown;

const styles = StyleSheet.create({
    Text: {
        fontSize: 30, fontWeight: '900',
        alignSelf: 'center',
        fontStyle: "italic"
    }
})