import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//inserting new elements direct 
const anotherUser = "chai aur react with P.k";
const reactElement = React.createElement(
  "p",
  {
    id: "myPara",
    style: { color: "blue", fontsize: "20px" },
  },
  anotherUser,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {reactElement}
    <App/>
    </React.StrictMode>,
);
