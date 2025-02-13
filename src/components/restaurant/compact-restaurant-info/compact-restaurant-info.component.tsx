import React from "react";
import { Platform } from "react-native";
import { Text } from "../../typography/text.component";
import { CompactImage, CompactWebview, Item } from "./styles";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  return (
    <Item>
      {isAndroid && isMap ? (
        <CompactWebview source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <Text variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
