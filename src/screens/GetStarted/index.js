import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Gap } from "../../components";
import { colors, fonts } from "../../res";
import { Giris } from "../../res/images/image";


const GetStarted = ({navigation}) => {
    return(
        <View style={styles.screen}>
            {/*<ImageBackground 
            source={{uri: 'https://cdn.discordapp.com/attachments/468771393295745074/1058782343856406538/01_Splash_Screen.png'}}
            style={{ flex: 1}}
            > */}
            <Image source={Giris} style={styles.image}/>
            <Gap height={10}/>
            
            <View style={styles.title}>
            
            <Button onPress={() => navigation.replace('MainApp')} />
        </View>
        {/*</ImageBackground>*/}
        </View>
        
        
    );  
};

export default GetStarted;

const styles = StyleSheet.create({
    screen: {flex: 1, paddingHorizontal: 0, justifyContent: 'center', backgroundColor:'#FFFFFF'},
    image: {height: 225, width: '100%', resizeMode: 'center', marginTop:100},
    title: {marginTop: 40},
    titles: {
        fontSize: 20,
        color: colors.primary100,
        textAlign: 'center',
        fontFamily: fonts.SemiBold,
    },
});