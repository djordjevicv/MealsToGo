import styled from "styled-components/native";
import { theme as appTheme } from "../../infrastructure/theme/index";
import { Text as RNText } from "react-native";

const defaultTextStyles = (theme: typeof appTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.myColors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: typeof appTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: typeof appTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: typeof appTheme) => `
    color: ${theme.myColors.text.error};
`;

const caption = (theme: typeof appTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: typeof appTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

interface TextProps {
  variant?: keyof typeof variants;
  theme: typeof appTheme;
}

export const Text = styled(RNText)<TextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;
