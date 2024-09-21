import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { Ionicons,AntDesign,Octicons,Entypo,FontAwesome } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from "./constants/theme";

export const CircleButton = ({ imgUrl, handlePress,name, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 45,
        height: 45,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      
    >
      <FontAwesome
        name={name}
        resizeMode="contain"
        style={{ width: 24, height: 24 ,}}
        onPress={handlePress}
        size={25}
        color="red"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};