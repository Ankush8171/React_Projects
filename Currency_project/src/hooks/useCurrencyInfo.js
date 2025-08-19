
import { useState, useEffect } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then(res => res.json())
      .then(data => {
        setData(data.rates || {}); 
      });
  }, [currency]);

  return data;
}



