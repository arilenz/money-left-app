import React, { Component } from "react";
import { View } from "react-native";
import { Constants } from "expo";

class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "black",
          height: Constants.statusBarHeight
        }}
      />
    );
  }
}

export default Header;
