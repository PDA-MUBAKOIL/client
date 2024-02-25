import React from "react";
import { Button, rem } from "@mantine/core";
import styled from "styled-components";

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
          paddingLeft: rem("107px"),
          paddingRight: rem("107px"),
          height: rem("47px"),
          backgroundColor: status === "disabled" ? "#CFB5B5" : "#C17878",
          // maxWidth: "fit-content",
          width: rem("273px"),
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
