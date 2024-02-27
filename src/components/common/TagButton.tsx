import React from "react";
import { Button, rem } from "@mantine/core";
import { setSearch } from "../../store/reducers/Drink/search";
import { useAppDispatch } from "../../lib/hooks/reduxHooks";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsShow } from "../../store/reducers/Drink/showModal";

type TagProp = {
  text: string;
  onClick: () => void;
  type: string;
};

export default function TagButton({ text, onClick, type }: TagProp) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onClickTag() {
    dispatch(setIsShow(false));
    dispatch(setSearch("#" + text));
    navigate("/search", { state: { tag: "#" + text } });
    onClick();
  }

  return (
    <Button
      style={{
        // paddingLeft: rem('21px'),
        // paddingRight: rem('21px'),
        backgroundColor: type === "food" ? "#DFBBBB" : "#EBDCDC",
        color: "#000",
        fontSize: rem("12px"),
        fontWeight: rem(600),
        borderRadius: rem("10px"),
        border: type === "food" ? "solid 1px #C17878" : "solid 1px #C17878",
      }}
      onClick={onClickTag}
    >
      # {text}
    </Button>
  );
}
