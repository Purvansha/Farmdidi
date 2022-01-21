import React from "react";
import { View, Text, Button, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../styles";

const AboutUs = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ ...globalStyles.box }}>
                <Text style={{ fontSize: 50 }}>AboutUs</Text>
                <Image source={require('../../assets/images/aboutus.png')} style={{ height: 160, width: 375, alignSelf: "center" }} />
                <Text style={{ fontSize: 20 }}>
                    The urban cities we dwell in take away the privilege of the fresh and real taste of food. Mass produced packaged foods with manufacturing dates ranging from several weeks to months unassumingly sit on our dining tables and in our kitchen cabinets. We do not know the deliciousness of real food sourced directly from farms and consumed fresh. We have forgotten exactly how good food can feel – for most of us it is a childhood memory from a long time ago.

                    Farm Didi’s journey starts from the farms of India and the rural women who tend to those lands that feed us all. These farmer women pick the choicest of raw ingredients, carefully put them together in their kitchens and prepare amazing food.

                    While our farmer women are experts at picking and making great food, they do need a helping hand in finding customers like you, telling you what great things are cooking in their kitchen and understanding what matters to you, what you would appreciate and in packing and sending it across to you.

                    Farm Didi helps them out and brings these delicacies to you.


                    All Farm Didi products are 100% natural, authentic, with ingredients sourced directly from farms and have no preservatives or artificial substances. We stick to local and authentic recipes and methods of processing and preparation.

                    Farm Didi brings delightful food to your table, into your home, into your busy life. Every time you find a Farm Didi product in your hands, we urge you to pause and experience the wholesome goodness and love that is packed in every single one of our products. Our food is handmade in kitchens, not mass produced in factories.

                    Rigorous quality control and consistency measures have been put in place at Farm Didi so you have the best experience every time you eat something that is made in our kitchens.


                    We are a for profit social enterprise. We reinvest a major portion of what we earn in training & development of the entrepreneur Didis who work with us. The goal is to enable them to earn their livelihood with independence and pride.

                    In short, everything that comes from Farm Didi is straight from the farm, straight from the heart and what we get goes right back there… 🙂
                </Text>
            </View>
        </ScrollView>
    )
}
export default AboutUs;