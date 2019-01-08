import React, { PureComponent } from "react";
import { View, TextInput } from "react-native";

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
      <View style={style}>
        <TextInput
          style={{
            borderBottomColor: "orange",
            borderBottomWidth: 4,
            paddingBottom: 5,
            textAlign: "center",
            width: 150,
            fontSize: 36
          }}
          value={value}
          onChangeText={value => this.setState({ value })}
          onSubmitEditing={this.handleSubmit}
          {...textInputProps}
        />
      </View>
    );
  }
}

export default Input;
