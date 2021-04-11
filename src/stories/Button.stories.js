import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../components/Button/Button";

const stories = storiesOf("Library", module);

stories.add("FizzBuzz", () => {
  return (
    <div>
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
