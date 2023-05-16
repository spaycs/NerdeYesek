import React from "react";
import { View, Text, useColorScheme ,SafeAreaView, StatusBar, StyleSheet, ScrollView, TextInput, TouchableOpacity} from "react-native";
import { BoxItemCategories, BoxItemTopProduct, Gap, Header } from "../../components";
import { A, } from "../../res";
import { colors, fonts } from "../../res";

const Home = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const dataTopProducts = [
        {
        name: "Portakal Naturel 500gr",
        
        bgColor: "rgba(127,206,213,0.2)",
        price: 17.53,
        desc: "Lorem Ipsum1"
        },
        {
        name: "Üzüm Naturel 500gr",
       
        bgColor: "rgba(527,206,213,0.2)",
        price: 18.58,
        desc:"Lorem Ipsum2"
        },
        {
        name: "Domates Naturel 500gr",
       
        bgColor: "rgba(727,206,243,0.5)",
        price: 14.53,
        desc: "Lorem Ipsum3"
        },
        {
        name: "Ananas Naturel 500gr",
       
        bgColor: "rgba(127,106,693,0.2)",
        price: 12.58,
        desc:"Lorem Ipsum4"
        },
];
    return(
        <SafeAreaView style={styles.flex1}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <View style={styles.flex1}>
                    {/*Header*/}
                    
                    {/*Search*/}
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.headertitle}>Selam, </Text>
                                <Text style={styles.uyeadi}>Semih</Text>
                            </View>
                            <Text style={styles.headersubtitle}>Öğrenmek istediğiniz bir kaynağı bulun</Text>
                        </View>
                       
                    </View>
                    {/*Ara*/}
                        <View style={{paddingHorizontal:20}}>
                            <View style= {styles.headerSearch}>
                                <TextInput placeholder="Ara" style={styles.TextInputSearch}/>
                                
                            </View>
                        </View>
                        
                    {/*Categories*/}
                        <View>
                            <View style={styles.headerTopProducts}>
                                    <Text style={styles.titleCategories}>Kategoriler</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.textSeeAll}>
                                            Tümü
                                        </Text>
                                    </TouchableOpacity>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                            style={styles.scrollViewCategories}>
                            
                            
                            
                            </ScrollView>
                        </View> 
                        <Gap height={20} />
                        {/* top product */}
                        <View>
                            <View style={styles.headerTopProducts}>
                                <Text style={styles.titleTopProducts}>Popüler Ürünler</Text>
                                <TouchableOpacity>
                                    <Text style={styles.textSeeAll}>
                                        Tümü
                                    </Text>
                                </TouchableOpacity>
                                </View>
                                <View style={styles.sectionBoxTopProduct}>
                                {dataTopProducts.map((item, index) =>{
                                
                            })}
                               
                            </View>
                        </View>
                    </ScrollView>
                </View>
        </SafeAreaView>
    );
    
    };
    export default Home;

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