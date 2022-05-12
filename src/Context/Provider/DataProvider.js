import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/fetchData.js";

import { DataContext } from "../DataContext.js";

const DataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  //api fetch. Sets 20 objects to productData
  const fetchProductData = async () => {
    const data = await fetchProducts();
    setProductData(data);
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        productData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
