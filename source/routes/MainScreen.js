import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";

import Screen from "../components/Screen";
import MainContainer from "../components/MainContainer";
import Icon from "../components/Icon";
import Input from "../components/Input";
import Rest from "../components/Rest";

import { getLeftForDay, getLeftForWeek, getLeftForMonth } from "../services/calculations";

const Top = styled.View`
  align-items: center;
  justify-content: center;
  padding: 60px 0 35px;
  background-color: #e0a037;
`;

const Middle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  background-color: #273d3e;
`;

import { requestAddRecord, requestPeriods } from "../store/actions";

class MainScreen extends Component {
  handleSubmit = value => {
    this.props.requestAddRecord(parseInt(value)).then(this.props.requestPeriods);
  };

  render() {
    const { changeRoute, dailyLimit, daySum, weekSum, monthSum } = this.props;

    const left = {
      day: getLeftForDay(daySum, dailyLimit),
      week: getLeftForWeek(weekSum, dailyLimit),
      month: getLeftForMonth(monthSum, dailyLimit)
    };

    return (
      <Screen headerRightAction={<Icon name="settings" onPress={() => changeRoute("settings")} />}>
        <Top>
          <Rest amount={left.day} period="day" big />
        </Top>
        <Middle>
          <Rest amount={left.week} period="week" />
          <Rest amount={left.month} period="month" />
        </Middle>
        <MainContainer>
          <Input onSubmit={this.handleSubmit} keyboardType="numeric" autoFocus clearOnSubmit />
        </MainContainer>
      </Screen>
    );
  }
}

export default connect(
  ({ values: { dailyLimit, daySum, weekSum, monthSum } }) => ({
    dailyLimit,
    daySum,
    weekSum,
    monthSum
  }),
  { requestAddRecord, requestPeriods }
)(MainScreen);
