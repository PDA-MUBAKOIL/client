import React from "react";
import { Button, rem } from "@mantine/core";

type ButtonProp = {
  text: String;
  onClick: () => void;
  status: String;
};

export default function CommonButton({ text, onClick, status }: ButtonProp) {
  return (
    <Button
      radius="xl"
      size="md"
      styles={{
        root: {
          // paddingLeft: rem("107px"),
          // paddingRight: rem("107px"),
          height: rem("7vh"),
          backgroundColor:
            status === "disabled" ? "rgba(0, 0, 0, 0.2)" : "#C17878",
          color: status === "disabled" ? "#fff" : "",
          maxWidth: "fit-content",
          minWidth: rem("70vw"),
          fontSize: rem("90%"),
        },
      }}
      onClick={onClick}
      disabled={status === "disabled" && true}
    >
      {text}
    </Button>
  );
}
