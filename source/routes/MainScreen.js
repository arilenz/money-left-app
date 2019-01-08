import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import Label from "../components/Label";
import Input from "../components/Input";

import { requestDecreaseTodayValue } from "../store/actions";

class MainScreen extends Component {
  handleSubmit = value => {
    this.props.requestDecreaseTodayValue(parseInt(value));
  };

  render() {
    const { changeRoute, rest } = this.props;

    return (
      <Screen headerRightAction={<Icon name="settings" onPress={() => changeRoute("settings")} />}>
        <Label style={{ marginBottom: 5 }} text="Money left" />
        <Text style={{ marginBottom: 50, fontSize: 24 }}>{rest}</Text>

        <Input onSubmit={this.handleSubmit} keyboardType="numeric" autoFocus />
      </Screen>
    );
  }
}

export default connect(
  ({ rest }) => ({
    rest
  }),
  { requestDecreaseTodayValue }
)(MainScreen);
