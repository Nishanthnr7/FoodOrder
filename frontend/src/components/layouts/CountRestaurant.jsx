import React, { useEffect } from "react";
import { getRestaurants } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";

export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading, error, count, showVegOnly, pureVegRestaurantCount } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  // Debugging the values before rendering
  console.log('showVegOnly:', showVegOnly);
  console.log('pureVegRestaurantCount:', pureVegRestaurantCount);
  console.log('count:', count);

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p className="NumOfRestro">
            {showVegOnly ? pureVegRestaurantCount : count}{" "}
            <span className="Restro">
              {showVegOnly
                ? pureVegRestaurantCount === 1
                  ? "Restaurant"
                  : "Restaurants"
                : count === 1
                ? "Restaurant"
                : "Restaurants"}
            </span>
          </p>
          <hr />
        </>
      )}
    </div>
  );
}
