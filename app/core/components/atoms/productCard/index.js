import React from 'react';
import { Button, View } from 'react-native'
import { Card, Title } from 'react-native-paper';
import { globalStyles } from '../../../../styles';

const ProductCard = () => {
    const itemsName = [{ name: 'Lemon Crush Pickle', descr: 'skjhkshhfks' }, { name: 'Bitter Gourd Pickle', descr: 'lsjkdhkshorwhoosv' }]
    const updateItems = () => {
        itemsName[2] = { name: 'cheufuewf', descr: 'fewifhiewcjkdj' }
    }

    return (

        <View style={{ flexDirection: 'row' }}>
            {
                itemsName.map((item, key) => {
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
            <Button title='click me' onPress={updateItems} />
        </View>

    )

}


export default ProductCard;
