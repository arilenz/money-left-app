import React, { Component } from "react";
import { View } from "react-native";

class Header extends Component {
  render() {
    const { leftAction, rightAction } = this.props;
    return (
      <View
        style={{
          width: "100%",
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 24,
          zIndex: 50
        }}
      >
        <View>{leftAction}</View>
        <View>{rightAction}</View>
      </View>
    );
  }
}

export default Header;
