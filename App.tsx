import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDW79f09tgsGe3G7y5asRS5KD-Zhoszq8M",
  authDomain: "mealstogorn-de5f3.firebaseapp.com",
  projectId: "mealstogorn-de5f3",
  storageBucket: "mealstogorn-de5f3.appspot.com",
  messagingSenderId: "572682769419",
  appId: "1:572682769419:web:bfa9203dacc8994099230e"
};

const app = initializeApp(firebaseConfig);

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
