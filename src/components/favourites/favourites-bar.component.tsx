import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { FavouritesWrapper } from "./styles";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info/compact-restaurant-info.component";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) return null;
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((r) => {
          const key = r.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant: r })}
              >
                <CompactRestaurantInfo isMap={false} restaurant={r} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
