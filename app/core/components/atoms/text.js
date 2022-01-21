//import React from "react";
//import { View } from 'react-native';

import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const MyText = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default MyText;

//const MyText = ({ navigation }) => {
   // return (
//   <View>
    //        <Text>Hi</Text>
    //    </View>
  //  )
//export default MyText 