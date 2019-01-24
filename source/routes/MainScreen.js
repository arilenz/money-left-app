import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import Label from "../components/Label";
import Input from "../components/Input";

import { requestAddRecord, requestDaySum } from "../store/actions";

class MainScreen extends Component {
  handleSubmit = value => {
    this.props.requestAddRecord(parseInt(value)).then(this.props.requestDaySum);
  };

  render() {
    const { changeRoute, dailyLimit, daySum } = this.props;

    return (
      <Screen headerRightAction={<Icon name="settings" onPress={() => changeRoute("settings")} />}>
        <Label style={{ marginBottom: 5 }} text="Money left" />
        <Text style={{ marginBottom: 50, fontSize: 24 }}>{dailyLimit - daySum}</Text>

        <Input onSubmit={this.handleSubmit} keyboardType="numeric" autoFocus clearOnSubmit />
      </Screen>
    );
  }
}

export default connect(
  ({ values: { dailyLimit, daySum } }) => ({
    dailyLimit,
    daySum
  }),
  { requestAddRecord, requestDaySum }
)(MainScreen);
