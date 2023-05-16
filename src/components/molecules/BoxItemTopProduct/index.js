import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Gap } from "../../atoms";
import { App, fonts,Favorite} from "../../../res";
const BoxItemTopProduct = ({bgColor, icon, text, price, onPress}) => {
    return(
        <TouchableOpacity style={styles.container(bgColor)} onPress={onPress}>
            <View style={{top: -20}}>
                <Image source={icon} style={styles.image}/>
                <Gap height={15}/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <Gap height={5}/>
            <View style={styles.price}>
                <Text style={styles.button}>{price}</Text>
                <TouchableOpacity>
                   <Favorite/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
    
    };
    export default BoxItemTopProduct;

    const styles = StyleSheet.create({
        container: bgColor =>({
            height: 190,
            width: 150,
            backgroundColor: bgColor,
            borderRadius: 12,
            marginHorizontal: 16,
            marginVertical: 30,
        }),
        text:{
            paddingLeft: 10,
            fontSize: 15,
            fontFamily: fonts.Medium,
            fontWeight: 'bold',
        },
        price:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
        },
        button:{
            fontSize: 15,
            fontFamily: fonts.Medium,
        },
        image:{
            height: 90,
            width: 110,
            resizeMode: 'contain',
            marginLeft: 20,
        },
    })