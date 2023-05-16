import React from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../res";
import { Gap } from "../../components";

const Favorite = () => {
    return(
        <SafeAreaView style={styles.flex1}>
            <StatusBar  />
                <View style={styles.flex1}>
                    {/*Header*/}
                    
                    {/*Search*/}
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.headertitle}>Giriş Yap </Text>
                            </View>
                            <Text style={styles.headersubtitle}>Lütfen mevcut hesabınızda oturum açın</Text>
                        </View>
                    </View>

                    </ScrollView>
                </View>
        </SafeAreaView>
    );
    
    };
    export default Favorite;

    const styles = StyleSheet.create({
        flex1: {flex:1,
        backgroundColor: colors.white},
        header:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            
        },
        headerSearch:{
            height: 40,
            backgroundColor: colors.grey,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal: 10,
           },
           titleCategories:{
            fontSize: 20,
            fontFamily: fonts.SemiBold,
            color: colors.primary,
            paddingTop: 5,
            paddingBottom:10,
           },
           headertitle:{
            fontSize: 22,
            fontFamily: fonts.SemiBold,
            color: colors.black,
            paddingBottom: 10,
            paddingLeft: 20,
            
           },
           uyeadi:{
            fontSize: 22,
            fontFamily: fonts.Bold,
            color: colors.black,
           },
           headersubtitle:{
            fontSize: 14,
            fontFamily: fonts.black,
            color: colors.softgrey,
            paddingLeft: 20,
            paddingBottom: 15,
           },
           headerTopProducts:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginBottom: 10,
            paddingTop: 5,
           },
           scrollViewCategories:{
            paddingLeft: 20,
            paddingRight: 20,
           },
           titleTopProducts:{
            fontSize: 20,
            color: colors.primary,
            fontFamily: fonts.SemiBold,
            justifyContent: 'flex-end',
           },
           textSeeAll:{
            color:colors.black,
            fontFamily: fonts.Medium,
            fontSize:12,
            paddingTop: 10,
           },
           sectionBoxTopProduct:{
            flex:1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
           },
           bildirim:{
            flexDirection: 'row',
            justifyContent:'space-between',
           },
           
    });