import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import debugAsyncStorage, { clear } from "../utils/debugAsyncStorage";
import { Font, SplashScreen } from "expo";

import Router from "./Router";
import Screen from "./Screen";
import MainContainer from "../components/MainContainer";

import MainScreen from "../routes/MainScreen";
import SettingsScreen from "../routes/SettingsScreen";

import { requestDailyLimit, requestPeriods } from "../store/actions";

class App extends Component {
  state = {
    ready: false,
    error: false
  };

  componentDidMount = async () => {
    try {
      SplashScreen.preventAutoHide();
      debugAsyncStorage();
      await Font.loadAsync({
        "DIN Alternate Bold": require("../../assets/fonts/DIN_Alternate_Bold.ttf"),
        "Avenir Book": require("../../assets/fonts/Avenir_Book.ttf"),
        "Avenir Heavy": require("../../assets/fonts/Avenir_Heavy.ttf")
      });
      await this.props.requestDailyLimit();
      await this.props.requestPeriods();
      this.setState({ ready: true });
      SplashScreen.hide();
    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }
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
        <MainContainer>
          {error && (
            <>
              <Text>This app won't work.</Text>
              <Text>Would you like to kick developer?</Text>
              <Text>Contact him</Text>
            </>
          )}
        </MainContainer>
      </Screen>
    );
  }
}

export default connect(
  null,
  { requestDailyLimit, requestPeriods }
)(App);
