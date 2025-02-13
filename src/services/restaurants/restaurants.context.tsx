import { createContext, useContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { ReactNode } from "react";
import { LocationContext } from "../location/location.context";

interface RestaurantContextValueType {
  restaurants: any[];
  isLoading: boolean;
  error: any;
}

export const RestaurantsContext = createContext<RestaurantContextValueType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retreiveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retreiveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
