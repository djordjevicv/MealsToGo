import { Card } from "react-native-paper";
import styled from "styled-components";
import { Text, View, Image } from "react-native";

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.myColors.bg.primary};
  position: relative;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.myColors.bg.primary};
  position: relative;
`;

export const CardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.myColors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

