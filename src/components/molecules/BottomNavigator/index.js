import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Home, Home_Color, Notification, Notification_Color, colors, Profile, Profile_Color, Favorite, Favorite_Color} from "../../../res";

const Icon = ({label, isFocused}) => {
    switch (label) { 
        case 'Home':
        return isFocused ? <Home_Color/> : <Home/>;
        case 'Notification':
        return isFocused ? <Notification_Color/> : <Notification/>;
        case 'Favorite':
        return isFocused ? <Favorite_Color/> : <Favorite/>;
        case 'Favorite':
        return isFocused ? <Favorite_Color/> : <Favorite/>;        
        default:
            return <Home_Color/>;
    }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
    return(
        <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            
          >
            <Icon label={label} isFocused={isFocused}/>
          </TouchableOpacity>
        );
      })}
    </View>
    );
    
    };
    export default BottomNavigator;

    const styles= StyleSheet.create({
        container:{
            flexDirection: 'row',
            backgroundColor: colors.white,
            paddingTop: 28,
            paddingBottom: 33,
            paddingHorizontal: 32,
            justifyContent:'space-between',
            
        },
    });