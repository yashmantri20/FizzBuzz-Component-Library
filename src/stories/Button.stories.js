import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components/Button/Button";
import {Image} from "../components/Image/Image";

const stories = storiesOf("Library", module);

stories.add("FizzBuzz", () => {
  return (
    <div>
      <Image size="lg" src="https://picsum.photos/200/300" style={{cursor: "pointer"}} onClick={() => console.log("Clicked")}/>
      <Image style={{width:"250px", height:"250px"}}/>
      <Button
        variant="primary"
        colorScheme="teal"
        onClick={() => console.log("yash")}
      />
      <Button
        variant="outline"
        style={{ color: "red" }}
        onClick={() => console.log("yash")}
      />
      <Button variant="ghost" colorScheme="red" />
      <Button variant="link" colorScheme="teal" />
    </div>
  );
});
