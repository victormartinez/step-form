import React, { useState } from "react"

import Form from "../Form"
import TextField from "../TextField"

const StepForm = () => {
  const maxSteps = 3
  const [currentStep, setCurrentStep] = useState(0)
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [color, setFavoriteColor] = useState("")

  const setFieldHandler = (event, fieldName) => {
    const fieldStates = {
      name: setName,
      place: setPlace,
      favoriteColor: setFavoriteColor,
    }
    const func = fieldStates[event.target.name]
    func(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
  }

  const goNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const goPrev = () => {
    setCurrentStep(currentStep - 1)
  }

  const fields = [
    {
      label: "What's your name?",
      name: "name",
      value: name,
      step: 0,
    },
    {
      label: "Where are you from?",
      name: "place",
      value: place,
      step: 1,
    },
    {
      label: "What's your favorite color?",
      name: "favoriteColor",
      value: color,
      step: 2,
    },
  ]
  return (
    <Form onSubmit={submitHandler}>
      {fields.map(({ label, name, value, step }) => {
        return currentStep !== step ? null : (
          <TextField
            key={name}
            label={label}
            name={name}
            value={value}
            onChange={setFieldHandler}
          />
        )
      })}

      {currentStep > 0 && <button onClick={() => goPrev()}>Previous</button>}
      {currentStep !== maxSteps - 1 && (
        <button onClick={() => goNext()}>Next</button>
      )}
    </Form>
  )
}

export default StepForm
