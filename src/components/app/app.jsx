import React from "react";
import { CardsList } from "../card.list/card.list";
import { Container } from "../container/container";
import { Search } from "../search/search";

const users = [
  {
    name: "Ferdinand Carney",
    phone: "(640) 447-3254",
    email: "in@aol.net",
  },
  {
    name: "Deborah Gonzales",
    phone: "1-258-431-9358",
    email: "hendrerit@icloud.net",
  },
  {
    name: "Adrienne Mason",
    phone: "1-395-514-3388",
    email: "erat.eget.ipsum@icloud.ca",
  },
  {
    name: "Jonas Simon",
    phone: "1-886-528-2605",
    email: "at.augue.id@icloud.org",
  },
];

const clickHandler = (title) => console.log(title);

export function App() {
  return (
    <Container>
      <Search clickHandler={() => console.log("Click")} />
      <CardsList cards={users} cardClickHandler={clickHandler} />
    </Container>
  );
}
