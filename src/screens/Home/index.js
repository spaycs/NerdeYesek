import React from "react";
import { View, FlatList, Text, Image, useColorScheme, SafeAreaView, StatusBar, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { BoxItemCategories, BoxItemTopProduct, Gap, Header } from "../../components";
import { Down, Profile, RestaurantImage, colors, fonts } from "../../res";
import { Search } from "../../res";

const Home = ({ navigation }) => {
    const isDarkMode = useColorScheme() === "dark";
    const dataRestaurants = [
    //  {
   //     image: require("../../res/images/image/slider.png"),
    //  },
    //  {
      //  image: require("../../res/images/image/slider.png"),
     // },
    
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.restaurantItem}>
        <Image source={item.image} style={styles.restaurantImage} />
       
      </TouchableOpacity>
    );
  

    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.flex1}>
                {/*Header*/}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.headertitle}>Adres </Text>
                            </View>
                            <Text style={styles.headersubtitle}>Doğan Araslı Bul. No:6 Esenyurt/İst </Text>
                        </View>
                        <Profile />
                    </View>
                    {/*Ara*/}
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={styles.headerSearch}>
                            <Search />
                            <TextInput placeholder="Yakınımdaki Lezzetleri Ara" placeholderTextColor="black" style={styles.headerSearch} />
                        </View>
                    </View>
                    <Gap height={20} />
                    {/*Categories*/}

                        <FlatList
                            data={dataRestaurants}
                            renderItem={renderItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.restaurantSlider}
                        />
                    <View>
                        <View style={styles.headerTopProducts}>
                            <Text style={styles.titleCategories}>Restorantlar</Text>
                            <TouchableOpacity>
                                <Text style={styles.textSeeAll}>
                                    Tümü
                                </Text>
                            </TouchableOpacity>
                        </View>

                     

                            <View style={{ flexDirection: 'row' }}>

                                <Image source={RestaurantImage} style={styles.RestaurantImage} />
                                <View style={styles.resturantcontainer}>
                                    <Text style={styles.restauranttitle}>Seventeen Steak Burger</Text>
                                    <Text style={styles.restaurantaddress}>
                                        Bahçeşehir 2. Kısım Mh. Şelale Caddesi, Akın Sk. Başakşehir
                                    </Text>

                                    <View>
                                        <Text style={styles.restaurantrating}>4.5 <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text></Text>
                                    </View>
                                </View>

                            </View>
                     
                    </View>

                    {/* top product 
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
                        </View>*/}
                </ScrollView>
            </View>
        </SafeAreaView>
    );

};
export default Home;

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 15,
    },
    headerSearch: {
        height: 61,
        backgroundColor: colors.searchbg,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 23,
    },
    titleCategories: {
        fontSize: 17,
        fontFamily: fonts.SemiBold,
        color: colors.black,
        paddingTop: 5,
        paddingBottom: 10,
    },
    headertitle: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.black,
        paddingBottom: 10,
    },
    uyeadi: {
        fontSize: 22,
        fontFamily: fonts.Bold,
        color: colors.black,
    },
    headersubtitle: {
        fontSize: 14,
        fontFamily: fonts.black,
        color: colors.softgrey,
        paddingBottom: 15,
    },
    headerTopProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10,
        paddingTop: 5,
    },
    scrollViewCategories: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    titleTopProducts: {
        fontSize: 17,
        color: colors.black,
        fontFamily: fonts.SemiBold,
        justifyContent: 'flex-end',
    },
    textSeeAll: {
        color: colors.primary,
        fontFamily: fonts.Medium,
        fontSize: 13,
        paddingTop: 10,
    },
    sectionBoxTopProduct: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    bildirim: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    RestaurantImage: {
        width: 75,
        height: 95,
    },
    resturantcontainer: {
        marginLeft: 5,
        overflow: 'hidden',
        width: '75%',

    },
    restauranttitle: {
        fontSize: 15,
        color: colors.black,
        fontFamily: fonts.SemiBold,
    },
    restaurantaddress: {
        flex: 1,
        fontSize: 12,

    },
    restaurantrating: {
        fontSize: 15,
    },


});