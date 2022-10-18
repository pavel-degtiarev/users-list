import React, { useCallback, useState } from "react";
import { CardsList } from "../card.list/card.list";
import { Container } from "../container/container";
import { Popup } from "../popup/popup";
import { Search } from "../search/search";

import { getUsers } from "../../API/getUsers";

const users = getUsers();

export function App() {
  console.log("render App");

  const [currentUser, setCurrentUser] = useState(null);
  const searchHandler = useCallback(() => console.log("Search clicked"), []);

  return (
    <Container>
      <Search clickHandler={searchHandler} />
      <CardsList cards={users} cardClickHandler={setCurrentUser} />

      {currentUser && <Popup {...currentUser} closeHandler={() => setCurrentUser(null)} />}
    </Container>
  );
}
