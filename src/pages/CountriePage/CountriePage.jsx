import axios from "axios";
import React, { useEffect, useState } from "react";

import cl from "./CountriePage.module.css";

const CountriePage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allCountries = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      console.log(response.data.meals);

      setCountries(response.data.meals);
      setLoading(false);
    };
    allCountries();
  }, []);

  return (
    <>
      {loading ? (
        <div className={cl.loading}>Загрузка...</div>
      ) : (
        <div className={cl.countrie}>
          {countries.map((countrie, index) => (
            <div key={index} className={cl.countrie_wrapper}>
              <img src="" alt={countrie.strArea} />
              <p>{countrie.strArea}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CountriePage;
