import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { BoxItemTopProduct, Gap, Header } from '../../components';
import { A, Ananas, App, B, colors, Domates, fonts, Mac, Portakal, Uzum } from '../../res';


const Categories = ({route, navigation}) => {
    const isDarkMode = useColorScheme () === 'dark';
    const dataCategories = [
        {
            name: "Portakal Naturel 500gr",
            icon: Portakal,
            bgColor: "rgba(127,206,213,0.2)",
            price: 17.53,
            desc: "Lorem Ipsum1"
            },
            {
            name: "Üzüm Naturel 500gr",
            icon: Uzum,
            bgColor: "rgba(527,206,213,0.2)",
            price: 18.58,
            desc:"Lorem Ipsum2"
            },
            {
            name: "Domates Naturel 500gr",
            icon: Domates,
            bgColor: "rgba(727,206,243,0.5)",
            price: 14.53,
            desc: "Lorem Ipsum3"
            },
            {
            name: "Ananas Naturel 500gr",
            icon: Ananas,
            bgColor: "rgba(127,106,693,0.2)",
            price: 12.58,
            desc:"Lorem Ipsum4"
            },
            ]
  return (
    <SafeAreaView style={styles.flex1}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        <View style={styles.flex1}>
            <Header back cart onPress={() => navigation.goBack()}/>
            <View style={styles.titlesCategories}>
                <Text style={styles.tittle}>{route.params}</Text>
            </View>
            <Gap height={25}/>
            {/* İçerik */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sectionBoxTopProduct}>
                    {dataCategories.map((item, index) => {
                         return(
                            <BoxItemTopProduct
                            key={index}
                            bgColor={item.bgColor}
                            icon={item.icon}
                            text={item.name}
                            price={item.price}
                            onPress={() => navigation.navigate('Detail', item)}
                            />
                            );
                    })}
               
                </View>
            </ScrollView>

        </View>
    </SafeAreaView>
  )
}

export default Categories;

const styles = StyleSheet.create({
    flex1:{
        flex1:1,
    },
    tittle:{
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.primary,
        paddingTop: 5,
        paddingBottom:10,
        paddingLeft:20,
    },
    titlesCategories:{
        paddingTop:10,
    },
    sectionBoxTopProduct:{
        flex1: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
       
    }
})