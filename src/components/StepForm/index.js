import React from "react"

import Form from "../Form"
import TextField from "../TextField"

const StepForm = () => {
  const fields = [
    { label: "What's your name?", name: "name" },
    { label: "Where are you from?", name: "place" },
    { label: "What's your favorite color?", name: "favoriteColor" },
  ]
  return (
    <Form>
      {fields.map(({ label, name }) => {
        return <TextField key={name} label={label} name={name} />
      })}
    </Form>
  )
}

export default StepForm
