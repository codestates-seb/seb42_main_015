import React, { useEffect, useState } from "react";
import * as M from "./TrashStyled";
import { AiOutlineCheck } from "react-icons/ai";

export function TrashInItem({ trash, select, setSelect, allChecked }) {
  const { outgoingNickname, content, messageCreatedAt, receivingId } = trash;
  const [checked, setChecked] = useState(false);

  const date = new Date(messageCreatedAt).toLocaleDateString();

  useEffect(() => {
    if (allChecked) {
      setChecked(true);
      // setSelect([...select, receivingId]);
    } else {
      setChecked(false);
    }
  }, [allChecked]);

  const handleClick = () => {
    setChecked(!checked);
    if (!checked) {
      setSelect([...select, receivingId]);
    }
    if (checked) {
      setSelect(select.filter((el) => el !== receivingId));
    }
  };

  console.log(select);

  return (
    <M.ItemBox>
      <M.CheckBox onClick={handleClick}>
        {checked ? <AiOutlineCheck /> : false}
      </M.CheckBox>
      <M.ItemName>{outgoingNickname}</M.ItemName>
      <M.ItemContent>{content}</M.ItemContent>
      <M.ItemDate>{date}</M.ItemDate>
    </M.ItemBox>
  );
}

export function TrashOutItem({ trash, select, setSelect, allChecked }) {
  const { toName, content, messageCreatedAt, outgoingId } = trash;
  const [checked, setChecked] = useState(false);

  const date = new Date(messageCreatedAt).toLocaleDateString();

  useEffect(() => {
    if (allChecked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [allChecked]);

  const handleClick = () => {
    setChecked(!checked);
    if (!checked) {
      setSelect([...select, outgoingId]);
    }
    if (checked) {
      setSelect(select.filter((el) => el !== outgoingId));
    }
  };

  console.log(select);

  return (
    <M.ItemBox>
      <M.CheckBox onClick={handleClick}>
        {checked ? <AiOutlineCheck /> : false}
      </M.CheckBox>
      <M.ItemName>{toName}</M.ItemName>
      <M.ItemContent>{content}</M.ItemContent>
      <M.ItemDate>{date}</M.ItemDate>
    </M.ItemBox>
  );
}
