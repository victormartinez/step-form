import React from "react";

import * as S from "./styled";

const Container = ({ children }) => (
  <S.Container>
    <S.Main>{children}</S.Main>
  </S.Container>
);

export default Container;
