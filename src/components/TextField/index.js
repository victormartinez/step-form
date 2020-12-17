import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const TextField = ({ label, name, value, onChange }) => {
  const id = `${name}Id`
  return (
    <S.FormControlGroup>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={event => onChange(event, name)}
      />
    </S.FormControlGroup>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextField
