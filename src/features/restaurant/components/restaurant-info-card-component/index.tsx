import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Icon,
  Section,
  SectionEnd,
} from "./styles";
import { useMemo } from "react";
import { Text } from "../../../../components/typography/text.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Favourite } from "../../../../components/favourites/favourite.component";

interface RestaurantInfoProps {
  restaurant: {
    name: string;
    icon: string;
    photos: string[];
    address: string;
    isOpenNow: boolean;
    rating: number;
    isClosedTemporarily: boolean;
  };
}

export const RestaurantInfoCard = ({ restaurant }: RestaurantInfoProps) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = useMemo(
    () => Array.from(new Array(Math.floor(rating))),
    [rating]
  );

  return (
    <>
      <RestaurantCard elevation={5} key={name}>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((rating, index) => (
                <Icon
                  source={require("../../../../../assets/star.png")}
                  key={index}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <>
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                  <Spacer position="left" size="medium" />
                </>
              )}
              {isOpenNow && (
                <>
                  <Icon
                    source={require("../../../../../assets/open-sign.png")}
                  />
                  <Spacer position="left" size="medium" />
                </>
              )}

              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
