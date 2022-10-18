import React from "react";

import { Container } from "../container/container";
import { Search } from "../search/search";

export function App() {
  return (
    <Container>
      <Search clickHandler={() => console.log("Click")} />
    </Container>
  );
}
