import React, {useState, useEffect} from 'react'
import PersonalInfo from './components/PersonalInfo'
import AddressInfo from './components/AddressInfo'
import Confirmation from './components/Confirmation'
import {Container, Button, Stepper, Step, StepLabel} from '@mui/material'
import './App.css'

const steps = ['Personal Information', 'Address Information', 'Confirmation']

const App = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const savedData = localStorage.getItem('formData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  const validateStep = () => {
    let newErrors = {}
    if (activeStep === 0) {
      if (!formData.name) newErrors.name = 'Name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Email is invalid'
      if (!formData.phone) newErrors.phone = 'Phone is required'
    } else if (activeStep === 1) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required'
      if (!formData.city) newErrors.city = 'City is required'
      if (!formData.state) newErrors.state = 'State is required'
      if (!formData.zip) newErrors.zip = 'Zip Code is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep(prevStep => prevStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1)
  }

  const handleSubmit = () => {
    if (validateStep()) {
      alert('Form submitted successfully!')
      localStorage.clear()
    }
  }

  return (
    <Container maxWidth="sm">
      <h2>Multi-Step Form</h2>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {activeStep === 1 && (
          <AddressInfo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        )}
        {activeStep === 2 && <Confirmation formData={formData} />}

        <div style={{marginTop: '20px'}}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </Container>
  )
}

export default App
