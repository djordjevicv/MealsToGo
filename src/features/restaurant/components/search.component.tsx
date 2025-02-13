import { Searchbar } from "react-native-paper";
import { SearchView } from "./restaurant-info-card-component/styles";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({isFavouritesToggled, onFavouritesToggle}) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  const submitKeyword = () => search(searchKeyword);

  return (
    <SearchView>
      <Searchbar
        value={searchKeyword}
        placeholder="Search for a location..."
        onChangeText={setSearchKeyword}
        onSubmitEditing={submitKeyword}
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
      />
    </SearchView>
  );
};
