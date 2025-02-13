import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Search } from "../components/search/search.component";
import { Map } from "./styles";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { MapCallout } from "../components/callout/map-callout.component";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Search />
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", { restaurant })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
        </Map>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
