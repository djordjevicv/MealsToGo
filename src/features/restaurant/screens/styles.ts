import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components";

export const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
`;

export const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListView = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  overflow: scroll;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
