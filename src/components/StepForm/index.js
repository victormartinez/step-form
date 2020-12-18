import React, { useState } from "react"

import Form from "../Form"
import TextField from "../TextField"
import Button from "../Button"
import List from "../List"

const StepForm = () => {
  const maxSteps = 3
  const [currentStep, setCurrentStep] = useState(0)
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [favoriteColor, setFavoriteColor] = useState("")

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

  const goSubmit = () => {
    setCurrentStep(-1)
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
      value: favoriteColor,
      step: 2,
    },
  ]
  return currentStep >= 0 ? (
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

      {currentStep > 0 && <Button onClick={() => goPrev()}>Previous</Button>}
      {currentStep !== maxSteps - 1 && (
        <Button onClick={() => goNext()}>Next</Button>
      )}
      {currentStep === maxSteps - 1 && (
        <Button onClick={() => goSubmit()}>Done!</Button>
      )}
    </Form>
  ) : (
    <List elements={fields} />
  )
}

export default StepForm
