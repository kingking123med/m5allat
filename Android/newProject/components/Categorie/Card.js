import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { colors, sizes, fonts } from "../constants/themes";

export default class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: sizes.radius,
    padding: sizes.base + 4,
    marginBottom: sizes.base,
  }
});