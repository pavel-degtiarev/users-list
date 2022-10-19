import React, { useCallback, useEffect, useState } from "react";
import { CardsList } from "../card.list/card.list";
import { Container } from "../container/container";
import { Popup } from "../popup/popup";
import { Search } from "../search/search";

import { getUsersFromAPI } from "../../API/getUsers";

export function App() {
  console.log("render App");

  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const searchHandler = useCallback((search) => setQuery(search), [setQuery]);

  useEffect(() => {
    async function loadUsers() {
      const users = await getUsersFromAPI(query);
      setUsers(users);
    }

    loadUsers();
  }, [query]);

  return (
    <Container>
      <Search clickHandler={searchHandler} />
      {users.length > 0 && <CardsList cards={users} cardClickHandler={setCurrentUser} />}
      {currentUser && <Popup {...currentUser} closeHandler={() => setCurrentUser(null)} />}
    </Container>
  );
}
