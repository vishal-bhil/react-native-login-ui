import React, { Component } from "react";
import AppNavigator from "./src/router/AppNavigator";
import * as Font from "expo-font";
import { AppLoading } from "expo";

export default class App extends Component {
  state = {
    fontsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      OxygenRegular: require("./src/fonts/OxygenRegular.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return <AppNavigator />;
    } else {
      return <AppLoading />;
    }
  }
}
