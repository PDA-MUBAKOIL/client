import React from "react";
import { Button, rem } from "@mantine/core";

type ButtonProp = {
  text: String;
  onClick: () => void;
};

export default function CommonButton({ text, onClick }: ButtonProp) {
  return (
    <Button
      radius="xl"
      size="md"
      styles={{
        root: {
          paddingLeft: rem("107px"),
          paddingRight: rem("107px"),
          height: rem("47px"),
          backgroundColor: "#C17878",
          maxWidth: "fit-content",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
