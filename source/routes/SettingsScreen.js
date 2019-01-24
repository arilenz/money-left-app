import React, { Component } from "react";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import Label from "../components/Label";
import Input from "../components/Input";

import { requestUpdateDailyLimit } from "../store/actions";

class SettingsScreen extends Component {
  handleSubmit = value => {
    const { requestUpdateDailyLimit, changeRoute } = this.props;
    requestUpdateDailyLimit(value).then(() => changeRoute("main"));
  };

  render() {
    const { dailyLimit, changeRoute } = this.props;

    return (
      <Screen headerLeftAction={<Icon name="back" onPress={() => changeRoute("main")} />}>
        <Label style={{ marginBottom: 50 }} text="Change your daily limit" />
        <Input
          onSubmit={this.handleSubmit}
          value={dailyLimit.toString()}
          keyboardType="numeric"
          autoFocus
        />
      </Screen>
    );
  }
}

export default connect(
  ({ values: { dailyLimit } }) => ({ dailyLimit }),
  { requestUpdateDailyLimit }
)(SettingsScreen);
