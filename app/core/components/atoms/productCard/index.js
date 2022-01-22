import React, { useState } from 'react';
import { Button, View } from 'react-native'
import { Card, Title } from 'react-native-paper';
import { globalStyles } from '../../../../styles';

const ProductCard = () => {
    const itemsName = [{ name: 'Lemon Crush', descr: 'skjhkshhfks' }, { name: 'Bitter Gourd Pickle', descr: 'lsjkdhkshorwhoosv' }]
    const [names, setNames] = useState(itemsName)

    const updateItems = () => {
        setNames(prev => [...prev, { name: 'hello' }])
        // console.log(itemsName)
    }

    return (
        <View style={{}}>
            {
                names.map((item, key) => {
                    return (<Card key={key}>
                        <Card.Content>
                            <Card.Cover source={require('../../../../assets/images/lemon.png')} />
                            <Title>{item.name}</Title>
                        </Card.Content>
                        <Card.Actions>
                            <Button title='ADD TO CART' color={'#f3a222'} />
                        </Card.Actions>
                    </Card>);
                })
            }
            <View style={{ width: 50, height: 50 }}>
                <Button title='click me' onPress={updateItems} color='red' />
            </View>

        </View>

    )

}


export default ProductCard;
