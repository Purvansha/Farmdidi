import React from "react";
import { Button, ScrollView, Text, View } from 'react-native';
import { Checkbox, Divider } from "react-native-paper";
import { Card } from 'react-native-paper'

import MyText from "../../core/components/atoms/text";


import { globalStyles } from "../../styles";

const SignIn = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#ffffff' }}>
                <View style={{ backgroundColor: '#fafafa' }} >
                    <Text style={{ alignSelf: 'center', fontSize: 30, backgroundColor: '#fafafa' }}>MY ACCOUNT</Text>
                </View>
                <Card style={{ margin: 20 }}>
                    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                    <Card.Content>
                        <View style={{ ...globalStyles.box }}>
                            <View style={{}}>
                                <Text style={{ fontStyle: 'Soft-Core', fontSize: 30, color: '#f3a222' }}>LOGIN</Text>
                                <Divider style={{ backgroundColor: 'Black' }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20 }}>Username Or Email address *</Text>
                            </View>
                            <MyText />
                            <View>
                                <Text style={{ fontSize: 20 }}>Password *</Text>
                            </View>
                            <MyText />
                            <View>
                                <Checkbox />
                            </View>
                            <Button title="Log In " color={'#f3a222'} />
                        </View>
                    </Card.Content>

                </Card>
                <Card style={{ margin: 20 }}>
                    <Card.Content>
                        <View style={{ ...globalStyles.box }}>
                            <View>
                                <Text style={{ fontStyle: 'Soft-core', fontSize: 30, color: '#f3a222' }}>REGISTER</Text>
                                <Divider />
                            </View>

                            <View>
                                <Text style={{ fontSize: 20 }}>Username *</Text>
                            </View>
                            <MyText />
                            <View>
                                <Text style={{ fontSize: 20 }}>Email Address *</Text>
                            </View>
                            <MyText />
                            <View>
                                <Text style={{ fontSize: 20 }}>Password *</Text>
                            </View>
                            <MyText />
                            <Button title="REGISTER" color={'#f3a222'} />
                        </View>
                    </Card.Content>
                </Card>
            </View>

        </ScrollView>


    )
}
export default SignIn;
{/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */ }
{/* <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions> */}
           // </Card >