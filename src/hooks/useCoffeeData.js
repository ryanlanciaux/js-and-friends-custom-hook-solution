import React, { useState, useEffect } from "react";
import { getCoffeeData } from "../api/getData";

function useCoffeeData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setData([]);
    setLoading(true);
    setError(undefined);

    getCoffeeData()
      .then(items => {
        setLoading(false);
        setData(items);
      })
      .catch(error => setError(error));
  }, []);

  return { data, isLoading: loading, error };
}

export default useCoffeeData;
