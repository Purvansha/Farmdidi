import React from "react";
import { Image, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import { globalStyles } from "../../styles";

const DidiInNews = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ ...globalStyles.box }}>
                <View style={{ paddingHorizontal: 20, backgroundColor: 'white' }}>
                    <View>
                        <Text style={{ fontSize: 30, alignSelf: 'center', color: '#f3a222', fontStyle: "Quick-Sand", fontWeight: "600" }}>DIDIS IN NEWS</Text>
                        <Text style={{ fontSize: 20 }}>
                            In order to achieve our mission to empower 1 million rural women entrepreneurs, we facilitate services like food licenses, food testing, packaging solutions, and managerial training for our didis at affordable prices. Though our entrepreneurs didis fight really hard to make a name of their own, we are glad that we are able to assist them in overcoming some of those technical hurdles. Some of the success stories of our didis are listed on this page.
                        </Text>
                        <Divider />
                    </View>
                    <View>
                        <Image source={require('../../assets/images/didi1.png')} style={{ height: 300, width: 300 }} />
                        <Text>June 2021</Text>
                        <Text style={{ fontSize: 20 }}>
                            How self help group women in Khuldabad Taluka are a source of inspiration in starting their food business.
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/didi2.png')} style={{ height: 300, width: 300 }} />
                        <Text>June2021</Text>
                        <Text style={{ fontSize: 20 }} >
                            How women entrepreneurs in Khuldabad Taluka came together to start their own food shop to market their products.
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/didi3.png')} style={{ height: 300, width: 300 }} />
                        <Text>June2021</Text>
                        <Text style={{ fontSize: 20 }}>
                            A story of resilience, how SHGs in Khuldabad Taluka continued to sell their products even during corona
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/didi4.png')} style={{ height: 300, width: 300 }} />
                        <Text>May2021</Text>
                        <Text style={{ fontSize: 20 }}>
                            Here is a story of how our entrepreneur didis celebrated women’s day in Khuldabad, Maharashtra along with our co-founder Manjari.
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/didi5.png')} style={{ height: 300, width: 300 }} />
                        <Text>November2021</Text>
                    </View>
                </View>
            </View>

        </ScrollView>

    )

}
export default DidiInNews;