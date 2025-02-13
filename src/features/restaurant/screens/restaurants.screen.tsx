import { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Loading, LoadingContainer, SafeAreaViewStyled } from "./styles";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const RestaurantsScreen = ({ navigation }: { navigation: any }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaViewStyled>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate}/>}
        {isLoading ? (
          <LoadingContainer>
            <Loading size={50} animating={true} />
          </LoadingContainer>
        ) : (
          <>
            <FlatList
              data={restaurants}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
              contentContainerStyle={{ padding: 16 }}
            />
          </>
        )}
      </SafeAreaViewStyled>
    </SafeAreaProvider>
  );
};
