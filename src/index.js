//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
const current = new Date();

// to get hours,, min -> getHours()
//  getMinutes() .getSeconds()

const time = current.getHours();
let gt;
var customStyle = {
  color: ""
};
if (time <= 12) {
  gt = "Good morning";
  customStyle.color = "red";
} else if (time <= 18) {
  gt = "GoodAfter Noon";
  customStyle.color = "Green";
} else {
  gt = "Good Night!";
  customStyle.color = "blue";
}
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
ReactDom.render(
  <div>
    <h1 style={customStyle}>{gt}</h1>
  </div>,
  document.getElementById("root")
);

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
