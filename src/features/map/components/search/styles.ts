import { View } from "react-native";
import styled from "styled-components";

export const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;
