import { useCallback, useContext, useMemo } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FavouriteButton } from "./styles";

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = useMemo(
    () => favourites.find((r) => r.placeId === restaurant.placeId),
    [favourites]
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
