import styled from "styled-components";
import { theme as appTheme } from "../../infrastructure/theme/index";
import { View } from "react-native";

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (
  position: keyof typeof positionVariant,
  size: keyof typeof sizeVariant,
  theme: typeof appTheme
): string => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

interface SpacerProps {
  position?: keyof typeof positionVariant;
  size?: keyof typeof sizeVariant;
  theme: typeof appTheme;
}

export const Spacer = styled(View)<SpacerProps>`
  ${({ position = "top", size = "small", theme }) =>
    getVariant(position, size, theme)}
`;
