import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const FavouritesWrapper = styled(View)`
  padding: 10px;
`;