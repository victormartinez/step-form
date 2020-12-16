import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const TextField = ({ label, name }) => {
  const id = `${name}Id`
  return (
    <S.FormControlGroup>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input type="text" id={id} name={name} />
    </S.FormControlGroup>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default TextField
