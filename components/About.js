import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'

export default class About extends React.Component{

    render(){
        return(
            <View style={style.view}>
                <Text style={style.title}>A propos de moi.</Text>
                <Text>
                    loremlupsum ipsum sit amet, consectetur
                    adipisicing elit. Consequu,tur, est maiores nemo nulla obcaecat.
                </Text>
            </View>
        )
    }

}

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    view : {
        margin: 20
    }
})