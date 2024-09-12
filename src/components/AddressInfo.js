import React from 'react'
import {TextField, Box} from '@mui/material'

const AddressInfo = ({formData, setFormData, errors}) => {
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <Box>
      <TextField
        label="Address Line 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        fullWidth
        error={!!errors.address1}
        helperText={errors.address1}
        margin="normal"
      />
      <TextField
        label="Address Line 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        fullWidth
        error={!!errors.city}
        helperText={errors.city}
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        fullWidth
        error={!!errors.state}
        helperText={errors.state}
        margin="normal"
      />
      <TextField
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        fullWidth
        error={!!errors.zip}
        helperText={errors.zip}
        margin="normal"
      />
    </Box>
  )
}

export default AddressInfo
