import React from "react";
import { Text, View } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

import ProductCard from "../../core/components/atoms/productCard";

const Home = () => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <Text style={{ fontSize: 30, color: "#f3a222", alignSelf: 'center', fontWeight: '900' }}>Hot Products</Text>
                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', alignSelf: 'center' }}>Products that are high in demand</Text>
                <ProductCard />
            </View>
        </ScrollView>

    );
}
export default Home;