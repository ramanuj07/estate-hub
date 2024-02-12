import { useEffect } from "react";
import { API_OPTIONS, REAL_ESTATE_API_URL } from "../utils/constants";

const PropertyCard = () => {
  useEffect(() => {
    fetchPropertyDetails();
  }, []);

  const fetchPropertyDetails = async () => {
    const data = await fetch(REAL_ESTATE_API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };
  return <div>PropertyCard</div>;
};

export default PropertyCard;
