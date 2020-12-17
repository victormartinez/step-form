import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Form = ({ onSubmit, children }) => {
  return <S.Form onSubmit={event => onSubmit(event)}>{children}</S.Form>
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
