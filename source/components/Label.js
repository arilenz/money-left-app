import React, { Component } from "react";
import { View, Text } from "react-native";

class Label extends Component {
  render() {
    const { style, text } = this.props;
    return (
      <View style={style}>
        <Text
          style={{
            width: 300,
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {text}
        </Text>
      </View>
    );
  }
}

export default Label;
