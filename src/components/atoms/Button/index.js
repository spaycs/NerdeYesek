import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../../../res";

const Button = ({onPress}) => {
return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>
            Giriş Yap
        </Text>
    </TouchableOpacity>
);

};
export default Button;

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.primary100,
        height:62,
        width:363,
        borderRadius:12,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:20,
        
    },
    text:{
        fontSize:20,
        fontFamily:fonts.Medium,
        color:colors.white,
        textAlign:'center',
    }
});