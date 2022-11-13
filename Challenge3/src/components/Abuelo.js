import React from "react";
import Padre from "./Padre";
function Abuelo() {
  return (
    <div>
      <Padre />
      <h3>Soy abuelo</h3>
    </div>
  );
}
export default Abuelo;
