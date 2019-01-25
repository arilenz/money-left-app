import React, { Component } from "react";
import { connect } from "react-redux";

import Screen from "../components/Screen";
import MainContainer from "../components/MainContainer";
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
        <MainContainer>
          <Label style={{ marginBottom: 50 }}>Change your daily limit</Label>
          <Input
            onSubmit={this.handleSubmit}
            value={dailyLimit.toString()}
            keyboardType="numeric"
            autoFocus
          />
        </MainContainer>
      </Screen>
    );
  }
}

export default connect(
  ({ values: { dailyLimit } }) => ({ dailyLimit }),
  { requestUpdateDailyLimit }
)(SettingsScreen);
