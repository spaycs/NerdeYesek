import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity,  } from "react-native";
import { colors, fonts } from "../../../res";


const BoxItemCategories = ({type, onPress, image, name}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{height:90, width:80, borderRadius:15, alignItems:'center'}}>
            <Image source={image} style={{height:56, width:56}}/>
            <View>
                <Text style={styles.kategoribaslik}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    );
    
    };
    export default BoxItemCategories;

const styles = StyleSheet.create({
    kategoribaslik:{
        fontFamily: fonts.SemiBold,
        fontSize:15,
        color:colors.dark,
        justifyContent: "center",
        textAlign: "center",
    },
})