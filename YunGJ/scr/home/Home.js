import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Coupon from './Coupon'
export default class Home extends Component
{
    render(){
        return (
        <View style={styles.containt}>
            <Text style={{fontSize:30,color:'green'}} onPress={()=>{
                    const { navigate } = this.props.navigation;
                    navigate('Coupon');
                }}>Home</Text>
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