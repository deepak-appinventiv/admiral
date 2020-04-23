import React from 'react';
import { Image, View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../modules/home";
//import TabBar from "./custom.tab";
import Utils from "../utils";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

//@ts-ignore
const HomeNavigator = ({ navigation , route }) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={"Home"}
          component={Home}
          options={{
            headerShown: false
           }}
         
        />
      </HomeStack.Navigator>
    );
};

/**
 * define bottom tab navigator
 */
export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
              tabBarOptions = {{
                activeTintColor: Utils.Constant.color.primaryColor
              }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeNavigator} 
                    options={{
                        tabBarLabel: 'HOME',
                        
                        tabBarIcon: ({ focused, size }) =>
                          focused ? (
                            <Image
                              source={Utils.Images.home}
                              resizeMode="contain"
                            />
                          ) : (
                              <Image
                                source={Utils.Images.home}
                                resizeMode="contain"
                              />
                            ),
                    }}
                />
                <Tab.Screen name="Tickets" 
                    component={HomeNavigator} 
                    options={{
                        tabBarLabel: 'Tickets',
                        tabBarIcon: ({ focused, size }) =>
                          focused ? (
                            <Image
                              source={Utils.Images.questioner}
                              resizeMode="contain"
                            />
                          ) : (
                              <Image
                                source={Utils.Images.questioner}
                                resizeMode="contain"
                              />
                            ),
                    }}
                />
                <Tab.Screen name="Overlay2" 
                    component={Home} 
                    options={{
                      tabBarButton: () => (<View style={styles.tabBarButtonContainer}><Image 
                            source={Utils.Images.dollar} 
                            style={styles.tabBarButtonImage}
                          /></View>)
                    }}
                />
                <Tab.Screen 
                    name="Movies" 
                    component={HomeNavigator} 
                    options={{
                        tabBarLabel: 'Movies',
                        tabBarIcon: ({ focused, size }) =>
                          focused ? (
                            <Image
                              source={Utils.Images.notification}
                              resizeMode="contain"
                            />
                          ) : (
                              <Image
                                source={Utils.Images.notification}
                                resizeMode="contain"
                              />
                            ),
                    }}
                />
                <Tab.Screen 
                    name="Cinemas"
                    component={HomeNavigator} 
                    options={{
                        tabBarLabel: 'Cinemas',
                        tabBarIcon: ({ focused, size }) =>
                          focused ? (
                            <Image
                              source={Utils.Images.setting}
                              resizeMode="contain"
                            />
                          ) : (
                              <Image
                                source={Utils.Images.setting}
                                resizeMode="contain"
                              />
                            ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    tabBarButtonContainer: {
      height: 90,
      width: 90,
      borderRadius: 100,
      borderBottomColor: Utils.Constant.color.transparent,
      borderBottomWidth: 50,
      bottom: 40,
      alignItems: 'center',
      justifyContent: 'flex-end', 
    },
    tabBarButtonImage: {
      width: Utils.Dimension.vw(60),
      height: Utils.Dimension.vw(60), 
      top: 40
    }
})

