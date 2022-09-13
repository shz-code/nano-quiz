import React from "react";
import "./assets/css/Videos.css";
import Video from "./Video";

export default function Videos() {
  const quantity = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="videos">
      {quantity.map((e) => {
        return <Video key={e} />;
      })}
    </div>
  );
}
