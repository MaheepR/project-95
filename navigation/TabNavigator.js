// importing libraries
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import History from "../screens/History";
const Tab = createMaterialBottomTabNavigator();
import firebase from "firebase";

export default class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: false
    };
  }

  renderHome = props => {
    return <Home setUpdateToFalse={this.removeUpdated} {...props} />;
  };

  renderHistory = props => {
    return <History setUpdateToTrue={this.changeUpdated} {...props} />;
  };

  changeUpdated = () => {
    this.setState({ isUpdated: true });
  };

  removeUpdated = () => {
    this.setState({ isUpdated: false });
  };

  render() {
    return (
      <Tab.Navigator
        labeled={false}
        barStyle={
            styles.bottomTabStyle
        }
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "History") {
              iconName = focused ? "time" : "time";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"white"}
        inactiveColor={"gray"}
      >
        <Tab.Screen
          name="Home"
          component={this.renderHome}
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="History"
          component={this.renderHistory}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#C04000",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
