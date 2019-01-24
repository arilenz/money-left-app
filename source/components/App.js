import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import debugAsyncStorage, { clear } from "../utils/debugAsyncStorage";

import Router from "./Router";
import Screen from "./Screen";

import MainScreen from "../routes/MainScreen";
import SettingsScreen from "../routes/SettingsScreen";

import { requestDailyLimit, requestDaySum } from "../store/actions";

class App extends Component {
  state = {
    ready: false,
    error: false
  };

  componentDidMount = () => {
    debugAsyncStorage();
    Promise.all([this.props.requestDailyLimit(), this.props.requestDaySum()])
      .then(() => this.setState({ ready: true }))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { ready, error } = this.state;

    return ready ? (
      <Router
        routes={{
          main: MainScreen,
          settings: SettingsScreen
        }}
      />
    ) : (
      <Screen>
        {error ? (
          <>
            <Text>This app won't work.</Text>
            <Text>Would you like to kick developer?</Text>
            <Text>Contact him</Text>
          </>
        ) : (
          <Text>Loading</Text>
        )}
      </Screen>
    );
  }
}

export default connect(
  null,
  { requestDailyLimit, requestDaySum }
)(App);
