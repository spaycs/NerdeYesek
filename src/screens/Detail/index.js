import { Image, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import { Header , Counter} from '../../components';
import { App, colors, fonts } from '../../res';


const Detail = ({route, navigation}) => {
    const dataParams = route.params;
    const bgColor = route.params.bgColor;
    const isDarkMode = useColorScheme () === 'dark';
    const [totalItem, SetTotalItem]= useState(1);

    const dataRelatedItems =[
    {
        name: 'App',
        icon: App,
        bgColor: 'rgba(227,206,243,0.5)',
        price: 1.58,
        desc:"Lorem İpsum1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry2"
        },
    ];
    const onCounterChange = value => {
        SetTotalItem(value);
    };

  return (
    <SafeAreaView style={styles.flex1(bgColor)}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        <View>
        {/* header */}
        <Header onPress={() => navigation.goBack()}/>
        {/* images */}
        <View style={styles.headerimage}>
        <Image source={dataParams.icon} style={styles.image} />
        </View>
        <View style={styles.content}>
         {/* content */}
         <View style={styles.headerTopContent}>
                 <View style={styles.rowTopContent}>
                     <Text style={styles.name}>{dataParams.name}</Text>
                <Counter onValueChange={onCounterChange} />
                </View>
                <Text>{dataParams.price}/tl</Text>
            </View>
            <Text>{dataParams.desc}</Text>
         </View>
        </View>
    </SafeAreaView>
  )
}

export default Detail;

const styles = StyleSheet.create({
    flex1: bgColor => ({
        flex:1,
        backgroundColor:bgColor
    }),
    image:{
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    headerimage:{
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop:30,
        paddingTop: 35,
    },
    headerTopContent:{
        marginBottom:28,
        paddingHorizontal: 20,
    },
    rowTopContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name:{
        fontFamily:fonts.Bold,
        fontSize: 20,
    }
})