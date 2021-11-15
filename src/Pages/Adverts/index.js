import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { AdvertsCards } from "../../Components/AdvertsCards";
import { useAuthToken } from "../../Providers/AuthToken";
import { api } from "../../Services";

export const Adverts = () => {
  const { authToken } = useAuthToken();
  const [adverts, setAdverts] = useState([]);

  const getAdverts = () => {
    api
      .get("/adverts", {
        headers: { Authorization: "Bearer " + authToken },
      })
      .then((response) => {
        setAdverts(response.data);
      });
  };
  console.log(adverts);
  useEffect(() => {
    getAdverts();
  }, []);

  return (
    <div>
      {adverts.map((item, index) => (
        <AdvertsCards
          index={index}
          name={item.name}
          date={item.date}
          localization={item.localization}
          category={item.category}
          id={item.id}
          userId={item.userId}
          description={item.description}
        />
      ))}
    </div>
  );
};
