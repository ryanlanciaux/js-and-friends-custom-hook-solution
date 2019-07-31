import React, { useState, useEffect } from "react";

import ItemCardGroup from "../../components/ItemCardGroup";

import useCoffeeData from "../../hooks/useCoffeeData";

function Menu() {
  const { data, isLoading, error } = useCoffeeData();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {error ? (
        <span>Oh no. An error occurred. {error}</span>
      ) : isLoading ? (
        <span>Loading</span>
      ) : (
        <ItemCardGroup data={data} onAddToCart={console.log} />
      )}
    </div>
  );
}

export default Menu;
