import React from "react"

import * as S from "./styled"
import Form from "../Form"
import TextField from "../TextField"

const StepForm = () => {
  return (
    <Form>
      <TextField label="What's your name?" name="name" />
    </Form>
  )
}

export default StepForm
