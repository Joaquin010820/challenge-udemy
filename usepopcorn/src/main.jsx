import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import StarRating from "./StarRating";
import TextExpander from "./TextExpander";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} hStar={"h-1"} />

    <TextExpander isExpanded={false}>
      first hello let see everything in here this is the second part of the
      textExpander
    </TextExpander>
  </React.StrictMode>
);
