import React from "react";

export const Footor: React.FC =()=>{
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Sujay</p>
    </footer>
  );
}


export default Footor;
