import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import IMAGE from '../images/images';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Tab.Navigator style={styles.navigationTab}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              icon = focused ? IMAGE.HOME : IMAGE.HOME_UNFOCUS;
              return <Image source={icon}></Image>;
            },
            tabBarActiveTintColor: "#52CC98",
            tabBarInactiveTintColor: "gray",
            tabBarLabel: "Início",
            headerShown: false,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Organizadores"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              icon = focused ? IMAGE.HOME : IMAGE.HOME_UNFOCUS;
              return <Image source={icon}></Image>;
            },
            tabBarActiveTintColor: "#52CC98",
            tabBarInactiveTintColor: "gray",
            tabBarLabel: "Perfil",
            headerShown: false,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Arquivos"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              icon = focused ? IMAGE.HOME : IMAGE.HOME_UNFOCUS;
              return <Image source={icon}></Image>;
            },
            tabBarActiveTintColor: "#52CC98",
            tabBarInactiveTintColor: "gray",
            tabBarLabel: "Perfil",
            headerShown: false,
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Perfil"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              icon = focused ? IMAGE.HOME : IMAGE.HOME_UNFOCUS;
              return <Image source={icon}></Image>;
            },
            tabBarActiveTintColor: "#52CC98",
            tabBarInactiveTintColor: "gray",
            tabBarLabel: "Perfil",
            headerShown: false,
          }}
        ></Tab.Screen>
      </Tab.Navigator>

      <View style={styles.homeItem}>
        <Image style={styles.homeIcon} source={IMAGE.HOME_ICON}></Image>
      </View>
    </>
  );
}

export default Index;

const styles = StyleSheet.create({
  navigationTab: {
    backgroundColor: '#ffe6ef'
  },
  homeItem: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    padding: 10,
    borderWidth: 5,
    borderColor: "#d3899f",
    backgroundColor: "#ffa7c2",
    borderRadius: 50,
  },
  homeIcon: {
    height: 40,
    width: 40,
  },
});
