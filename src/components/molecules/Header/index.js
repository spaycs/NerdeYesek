import React from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Home, Align, Cart, Back } from "../../../res";

const Header = ({drawer, back, cart, onPress}) => {
    if (drawer) {
    return(
        <View style={styles.homeHeader}>
            <TouchableOpacity onPress={onPress}>
                <Align />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Cart />
            </TouchableOpacity>
        </View>
    );
    }
    if (back & cart) {
        return(
            <View style={styles.homeHeader}>
                <TouchableOpacity onPress={onPress}>
                    <Back />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                    <Cart />
                </TouchableOpacity>
            </View>
        );
        }
    return(
        <View style={styles.homeHeader}>
            <TouchableOpacity onPress={onPress}>
                <Back />
            </TouchableOpacity>
        </View>
    );
    
    };
export default Header;

const styles = StyleSheet.create({
   homeHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    paddingVertical:20,
   },
});