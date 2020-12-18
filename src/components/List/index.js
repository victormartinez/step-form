import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const List = ({ elements }) => (
  <S.List>
    {elements.map(({ name, value }, index) => (
      <S.Item key={index}>
        {name}: {value}
      </S.Item>
    ))}
  </S.List>
)

List.propTypes = {
  elements: PropTypes.array.isRequired,
}

export default List
