import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../constants/color";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Color.primary}
          translucent={true}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput placeholder="Email" style={styles.inputStyle} />
          <TextInput
            placeholder="Password"
            style={styles.inputStyle}
            secureTextEntry
          />
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{ fontSize: 20, color: Color.white }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.txtForgotPassword}>forgot password?</Text>
          <View style={styles.loginOptionContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require("../../assets/ic_facebook.png")}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require("../../assets/ic_google.png")}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Image
                source={require("../../assets/ic_twitter.png")}
                style={styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.3,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    tintColor: Color.white,
    width: 100,
    height: 100,
  },
  subContainer: {
    flex: 0.7,
    backgroundColor: Color.white,
    padding: 40,
  },
  inputStyle: {
    borderBottomColor: Color.grey,
    borderBottomWidth: 1,
    paddingVertical: 20,
    marginTop: 10,
    fontSize: 20,
    fontFamily: "OxygenRegular",
  },
  buttonStyle: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginTop: 40,
    fontFamily: "OxygenRegular",
  },
  txtForgotPassword: {
    fontSize: 20,
    color: Color.darkGrey,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "OxygenRegular",
  },
  loginOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Color.grey,
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
