import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const TextField = ({ label, name }) => {
  const id = `${name}Id`
  return (
    <>
      {label && <label for={id}>{label}</label>}
      <input type="text" id={id} name={name} />
    </>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default TextField
