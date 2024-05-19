import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Cart from "./screens/Cart";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const iconName = {
                  Home: "home",
                  About: "info",
                  Cart: "shopping-bag",
                  Contact: "contact-page",
                  Profile: "headset",
                };
                return (
                  <>
                    <MaterialIcons
                      name={iconName[route.name]}
                      size={size}
                      color={color}
                    />
                  </>
                );
              },
              tabBarShowLabel: false,
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
              tabBarStyle: styles.tabBarStyle,
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
              name="About"
              component={About}
              options={{ headerShown: true }}
            />
            <Tab.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: true }}
            />
            <Tab.Screen
              name="Contact"
              component={Contact}
              options={{ headerShown: true }}
            />
          </Tab.Navigator>
          <StatusBar style="dark" />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: "#25292e",
  },
  tabBarStyle: {
    height: 58,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
