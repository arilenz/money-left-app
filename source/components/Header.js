import React, { Component } from "react";
import { View } from "react-native";

class Header extends Component {
  render() {
    const { leftAction, rightAction } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20
        }}
      >
        <View>{leftAction}</View>
        <View>{rightAction}</View>
      </View>
    );
  }
}

export default Header;
