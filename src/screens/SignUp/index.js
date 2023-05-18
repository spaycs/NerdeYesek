import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../res";
import { Gap, Button } from "../../components";
import { CurrentRenderContext } from "@react-navigation/native";


const Favorite = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isRememberMeChecked, setRememberMeChecked] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const toggleRememberMe = () => {
        setRememberMeChecked(!isRememberMeChecked);
    };

    const handleForgotPassword = () => {
        // Şifrenizi unuttunuz işlemlerini burada gerçekleştirin
    };
    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar />
            <View style={styles.flex1}>
                {/*Header*/}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.headertitle}>Giriş Yap </Text>
                            </View>
                            <Gap height={15} />
                            <Text style={styles.headersubtitle}>Lütfen Mevcut Hesabınızda Oturum Açın</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={{ flex: 3, backgroundColor: 'white' }}>
                <View style={styles.showsVerticalScrollIndicator}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder="Şifre"
                            secureTextEntry={!isPasswordVisible}
                            autoCapitalize="none"
                        />

                    </View>
                    <View style={styles.rememberMeContainer}>
                        <TouchableOpacity
                            style={styles.rememberMeButton}
                            onPress={toggleRememberMe}
                        >
                            {isRememberMeChecked && (
                                <View style={styles.rememberMeIndicator} />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.rememberMeText}>Beni Hatırla</Text>

                        <View style={styles.forgotPasswordContainer}>
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text style={styles.forgotPasswordText}>Şifrenizi mi unuttunuz?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button></Button>
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerText}>Hesabınız Yok Mu?</Text>
                        <TouchableOpacity onPress={""}>
                            <Text style={styles.registerLink}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};
/* Gizle Butonu <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityButton}>
                            <Text style={styles.passwordVisibilityButtonText}>{isPasswordVisible ? 'Gizle' : 'Göster'}</Text>
                        </TouchableOpacity>*/
export default Favorite;

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
        //backgroundColor: colors.white
        backgroundColor: colors.primary100
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1, justifyContent: "center", alignItems: "center"

    },
    headerSearch: {
        height: 40,
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    titleCategories: {
        fontSize: 20,
        fontFamily: fonts.SemiBold,
        color: colors.primary,
        paddingTop: 5,
        paddingBottom: 10,
    },
    headertitle: {
        fontSize: 30,
        fontFamily: fonts.SemiBold,
        color: colors.white,
        textAlign: "center",
        flex: 1,
        paddingHorizontal: 15,
        height: 36,
        marginTop: 85,
    },
    headersubtitle: {
        fontSize: 16,
        fontFamily: fonts.black,
        color: colors.white,
        paddingBottom: 132,
    },
    uyeadi: {
        fontSize: 22,
        fontFamily: fonts.Bold,
        color: colors.black,
    },

    headerTopProducts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingTop: 5,
    },
    scrollViewCategories: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleTopProducts: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: fonts.SemiBold,
        justifyContent: 'flex-end',
    },
    textSeeAll: {
        color: colors.black,
        fontFamily: fonts.Medium,
        fontSize: 12,
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
    input: {
        paddingHorizontal: 15,
        width: '90%',
        height: 62,
        borderRadius: 15,
        backgroundColor: colors.lightgray,
        marginBottom: 20,
        alignSelf: 'center', // Ortalamak için
        textAlign: 'left',
        paddingLeft: 10,
        marginTop: 20
    },
    passwordContainer: {
        paddingHorizontal: 15,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center', // Ortalamak için
        backgroundColor: colors.lightgray,
        borderRadius: 15,
        height: 62,
    },
    passwordInput: {
        paddingHorizontal: 15,
        width: '90%',
        height: 62,
        borderRadius: 15,
        backgroundColor: colors.lightgray,
        marginBottom: 20,
        alignSelf: 'center', // Ortalamak için
        textAlign: 'left',
        paddingLeft: 10,
        marginTop: 20
    },


    rememberMeIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.primary,
    },
    rememberMeIndicatorActive: {
        backgroundColor: colors.white,
    },

    passwordVisibilityButtonText: {
        color: colors.black,
        fontFamily: fonts.Medium,
        fontSize: 14,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    rememberMeButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    forgotPasswordContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 15,
        marginTop: 10,
    },
    //////////////
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginTop: 10,
    },
});