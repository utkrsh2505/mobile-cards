import React from "react";
import Heading from "./Components/Heading";
import List from "./Components/List";
function App() {
  return (
    <>
    <Heading title="Mobile Operating System"/>
    <ul>
     <List item="Android"/>
     <List item="Blackberry"/>
     <List item="iPhone"/>
     <List item="Wndows Phone"/>
    </ul>

    <Heading title="Mobile Manufacturers"/>
    <ul>
      <List item="Samsung"/>
      <List item="HTC"/>
      <List item ="Micromax"/>
      <List item="Apple"/>
    </ul>
    </>
  );
}

export default App;
