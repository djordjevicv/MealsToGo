import { CompactRestaurantInfo } from "../../../../components/restaurant/compact-restaurant-info/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
