import React from "react";
import { CardsList } from "../card.list/card.list";
import { Container } from "../container/container";
import { Popup } from "../popup/popup";
import { Search } from "../search/search";

import { getUsers } from "../../API/getUsers";

const users = getUsers();
const clickHandler = (title) => console.log(title);

export function App() {
  return (
    <Container>
      <Search clickHandler={() => console.log("Click")} />
      <CardsList cards={users} cardClickHandler={clickHandler} />

      <Popup {...users[0]} closeHandler={() => console.log("close")} />
    </Container>
  );
}
