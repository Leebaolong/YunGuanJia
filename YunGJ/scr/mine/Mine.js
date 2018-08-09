import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Mine extends Component
{
    render(){
        return (
        <View style={styles.containt}>
            <Text style={{fontSize:30,color:'green'}}>Mine</Text>
        </View>);
    }
}
const styles = StyleSheet.create({
    containt:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})