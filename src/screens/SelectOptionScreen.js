import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../constants/color";

class SelectOptionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle(Color.white)}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText(Color.primary)}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle(Color.primary)}>
            <Text style={styles.buttonText(Color.white)}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
  },
  logoContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    tintColor: Color.white,
    width: 150,
    height: 150,
  },
  buttonContainer: { flex: 0.4, padding: 40 },
  buttonStyle: (color) => ({
    backgroundColor: color,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  }),
  buttonText: (color) => ({
    fontSize: 20,
    color: color,
    fontFamily: "OxygenRegular",
  }),
});

export default SelectOptionScreen;
