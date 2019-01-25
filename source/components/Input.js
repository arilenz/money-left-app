import React, { PureComponent } from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  width: 90px;
`;

const StyledInput = styled.TextInput`
  width: 90px;
  text-align: center;
  font-family: "DIN Alternate Bold";
  font-size: 30px;
  line-height: 35px;
`;

const Border = styled.View`
  background-color: #e0a037;
  height: 5px;
  border-radius: 1px;
`;

class Input extends PureComponent {
  state = {
    value: this.props.value ? this.props.value : ""
  };

  componentWillReceiveProps = ({ value }) => {
    if (this.state.value !== value) this.setState({ value });
  };

  handleSubmit = () => {
    const { onSubmit, clearOnSubmit } = this.props;

    onSubmit(this.state.value);
    if (clearOnSubmit) {
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;
    const {
      style,
      value: staticValue,
      onChange,
      onSubmit,
      clearOnSubmit,
      ...textInputProps
    } = this.props;

    return (
      <Wrapper>
        <StyledInput
          value={value}
          onChangeText={value => this.setState({ value })}
          onSubmitEditing={this.handleSubmit}
          {...textInputProps}
        />
        <Border />
      </Wrapper>
    );
  }
}

export default Input;
