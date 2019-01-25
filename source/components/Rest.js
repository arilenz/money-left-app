import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Wrapper = styled.View`
  align-items: center;
`;

const Number = styled.Text`
  width: 150px;
  color: white;
  text-align: center;
  font-family: "DIN Alternate Bold";
  font-size: ${props => (props.big ? 50 : 30)}px;
  line-height: ${props => (props.big ? 58 : 35)}px;
`;

const Label = styled.Text`
  width: 150px;
  color: white;
  font-size: ${props => (props.big ? 20 : 15)}px;
  line-height: ${props => (props.big ? 27 : 20)}px;
  text-align: center;
  font-family: "Avenir Book"
`;

const Bold = styled.Text`
  font-family: "Avenir Heavy"
`;

export default ({ amount, period, big }) => (
  <Wrapper>
    <Number big={big}>{amount}</Number>
    <Label big={big}>
      <Text>for a</Text> <Bold>{period}</Bold>
    </Label>
  </Wrapper>
);
