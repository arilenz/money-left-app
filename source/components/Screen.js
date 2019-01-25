import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";

import Header from "../components/Header";
import StatusBar from "../components/StatusBar";

class Screen extends Component {
  render() {
    const { children, headerLeftAction, headerRightAction } = this.props;

    return (
      <>
        <StatusBar />
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {(headerLeftAction || headerRightAction) && (
            <Header leftAction={headerLeftAction} rightAction={headerRightAction} />
          )}
          <View
            style={{
              flex: 1,
              backgroundColor: "white"
            }}
          >
            {children}
          </View>
        </KeyboardAvoidingView>
      </>
    );
  }
}

export default Screen;
